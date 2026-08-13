/**
 * netatmo-card — behaviour tests.  Run with:  node test/run.mjs
 *
 * This card sets its values with textContent on nodes it queried after building,
 * so its numbers never reach the markup. The tests therefore drive the methods
 * that do the arithmetic and read back what they wrote.
 *
 * The target is the class of bug that stays plausible on screen: a cardinal that
 * is one step off, a threshold that fires on the wrong side, a module drawn at
 * the wrong height, a tile that keeps its thousands separator. None of those
 * look broken, which is exactly why they need a test.
 */
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { loadCard, freezeClock, check, contains, report } from './harness.mjs';

const HERE = dirname(fileURLToPath(import.meta.url));
// Overridable so the same suite can be run against an older build, which is how
// these tests were proved to actually bite.
const CARD = process.env.NETATMO_CARD
  || join(HERE, '..', 'dist', 'netatmo-card.js');
const registry = await loadCard(CARD);
const Card   = registry.get('netatmo-card');
const Editor = registry.get('netatmo-card-editor');

freezeClock('2026-08-12T10:00:00Z');

const FR = {
  dirs: ['N', 'NE', 'E', 'SE', 'S', 'SO', 'O', 'NO'],
  airGood: 'sain', airFair: 'confiné', airPoor: 'vicié',
  unavailable: 'Indisponible', hist: '24 h', noData: 'aucune donnée',
};

const st = (v, attrs = {}) => ({ state: String(v), attributes: attrs });

function mkCard(config, states = {}) {
  const c = new Card();
  c.setConfig({ type: 'custom:netatmo-card', ...config });
  c._hass = { states, locale: { language: 'fr' }, entities: {} };
  return c;
}

/** Stand-in tiles, so _updateRows has somewhere to write. */
function withTiles(card, keys) {
  card._el = {};
  for (const k of keys) {
    card._el['nt-row-' + k] = { style: { setProperty(p, v) { this[p] = v; } }, hidden: false };
    card._el['nt-val-' + k] = { textContent: '' };
  }
  return card;
}
const tile = (c, k) => c._el['nt-val-' + k].textContent;
const tileColor = (c, k) => c._el['nt-row-' + k].style['--nt-row-color'];

// ── Wind direction ───────────────────────────────────────────────────────────
// Netatmo enables an enum of cardinals by default and leaves the degrees
// disabled, so both have to land on the same arrow. A cardinal one step off is
// the definition of a wrong answer that looks right.

function windTile(dirState, dirAttrs = {}) {
  const c = withTiles(mkCard(
    { module_type: 'outdoor', entity: 'sensor.t',
      wind_entity: 'sensor.v', wind_direction_entity: 'sensor.d' },
    { 'sensor.t': st(18.6, { unit_of_measurement: '°C', device_class: 'temperature' }),
      'sensor.v': st(47, { unit_of_measurement: 'km/h', device_class: 'wind_speed' }),
      'sensor.d': st(dirState, dirAttrs) }), ['wind']);
  c._updateRows(FR);
  return tile(c, 'wind');
}

check('direction en énumération « sw »', windTile('sw'), 'SO 47 km/h');
check('direction en degrés 215°', windTile(215), 'SO 47 km/h');
check('les deux formats donnent le même cardinal',
  windTile('sw'), windTile(225));
check('337.5° bascule sur N, pas NO', windTile(337.5), 'N 47 km/h');
check('336° reste NO', windTile(336), 'NO 47 km/h');
check('23° bascule sur NE', windTile(23), 'NE 47 km/h');
check('22° reste N', windTile(22), 'N 47 km/h');
check('380° est ramené dans le tour', windTile(380), 'N 47 km/h');
check('-45° est ramené dans le tour', windTile(-45), 'NO 47 km/h');
check('direction absente : vitesse seule', windTile('brouillard'), '47 km/h');

// The wind tile used to span the whole row so its direction would not be clipped.
// It then could not sit beside the humidity, dropped a line, and left a hole.
function windSpans(dir) {
  const c = withTiles(mkCard(
    { module_type: 'outdoor', entity: 'sensor.t', wind_entity: 'sensor.v',
      ...(dir ? { wind_direction_entity: 'sensor.d' } : {}) },
    { 'sensor.t': st(18.6, { device_class: 'temperature' }),
      'sensor.v': st(47, { unit_of_measurement: 'km/h', device_class: 'wind_speed' }),
      'sensor.d': st('sw', {}) }), ['wind']);
  c._el['nt-row-wind'].style.gridColumn = '';
  c._updateRows(FR);
  return c._el['nt-row-wind'].style.gridColumn;
}
check('la tuile vent ne prend pas la ligne entière', windSpans(true), '');
check('sans direction non plus', windSpans(false), '');

// The anemometer has its own direction tile, computed separately from the outdoor
// one. Both have to agree, or the same wind reads differently on two cards.

function dirTile(v) {
  const c = withTiles(mkCard(
    { module_type: 'wind', entity: 'sensor.v', wind_direction_entity: 'sensor.d' },
    { 'sensor.v': st(23, { unit_of_measurement: 'km/h', device_class: 'wind_speed' }),
      'sensor.d': st(v, {}) }), ['wind_dir']);
  c._updateRows(FR);
  return tile(c, 'wind_dir');
}
check('anémomètre : degrés affichés avec leur cardinal', dirTile(215), '215° SO');
check('anémomètre : 337.5° bascule sur N', dirTile(337.5), '338° N');
check('anémomètre : 336° reste NO', dirTile(336), '336° NO');
check('anémomètre : énumération sans degrés', dirTile('sw'), 'SO');
check('anémomètre et extérieur donnent le même cardinal',
  dirTile('sw'), windTile('sw').replace(' 47 km/h', ''));

// ── Forecast rain ────────────────────────────────────────────────────────────
// The tile has to vanish at zero, and only at zero: hiding it at 0.1 mm would
// silently swallow a real shower.

function rainHidden(v) {
  const c = withTiles(mkCard(
    { module_type: 'outdoor', entity: 'sensor.t', rain_forecast_entity: 'sensor.p' },
    { 'sensor.t': st(18.6, { device_class: 'temperature' }),
      'sensor.p': st(v, { unit_of_measurement: 'mm', device_class: 'precipitation' }) }),
    ['rain_forecast']);
  c._updateRows(FR);
  return c._el['nt-row-rain_forecast'].hidden;
}
check('pluie annoncée à 0 : tuile masquée', rainHidden(0), true);
check('pluie annoncée à 0.1 : tuile visible', rainHidden(0.1), false);
check('pluie annoncée à 1.2 : tuile visible', rainHidden(1.2), false);
check('pluie indisponible : tuile masquée', rainHidden('unknown'), true);

// ── Number formatting ────────────────────────────────────────────────────────
// Pressure is the one reading printed without a thousands separator, because
// "1 018 hPa" wraps the tile. A regression here reads perfectly well.

const press = withTiles(mkCard(
  { module_type: 'indoor', entity: 'sensor.t', pressure_entity: 'sensor.pr',
    humidity_entity: 'sensor.h' },
  { 'sensor.t': st(21, { device_class: 'temperature' }),
    'sensor.pr': st(1018.4, { unit_of_measurement: 'hPa', device_class: 'atmospheric_pressure' }),
    'sensor.h': st(62.4, { unit_of_measurement: '%', device_class: 'humidity' }) }),
  ['pressure', 'humidity']);
press._updateRows(FR);
check('pression sans séparateur de milliers et sans décimale',
  tile(press, 'pressure'), '1018 hPa');
check('humidité arrondie à l\'entier', tile(press, 'humidity'), '62 %');

// ── Comfort thresholds on the tiles ──────────────────────────────────────────

function co2Tile(ppm) {
  const c = withTiles(mkCard(
    { module_type: 'indoor', entity: 'sensor.t', co2_entity: 'sensor.c' },
    { 'sensor.t': st(21, { device_class: 'temperature' }),
      'sensor.c': st(ppm, { unit_of_measurement: 'ppm', device_class: 'carbon_dioxide' }) }),
    ['co2']);
  c._updateRows(FR);
  return tileColor(c, 'co2');
}
const GREEN = 'var(--success-color, #43a047)';
const AMBER = 'var(--warning-color, #f0a025)';
const RED   = 'var(--error-color, #db4437)';
check('CO2 999 ppm : vert', co2Tile(999), GREEN);
check('CO2 1000 ppm pile : orange, le seuil est exclusif', co2Tile(1000), AMBER);
check('CO2 1999 ppm : orange', co2Tile(1999), AMBER);
check('CO2 2000 ppm pile : rouge', co2Tile(2000), RED);

function humTile(pct) {
  const c = withTiles(mkCard(
    { module_type: 'indoor', entity: 'sensor.t', humidity_entity: 'sensor.h' },
    { 'sensor.t': st(21, { device_class: 'temperature' }),
      'sensor.h': st(pct, { unit_of_measurement: '%', device_class: 'humidity' }) }), ['humidity']);
  c._updateRows(FR);
  return tileColor(c, 'humidity');
}
const PLAIN = 'var(--secondary-text-color)';
check('humidité 30 % : dans la plage', humTile(30), PLAIN);
check('humidité 29 % : trop sec', humTile(29), AMBER);
check('humidité 70 % : dans la plage', humTile(70), PLAIN);
check('humidité 71 % : trop humide', humTile(71), AMBER);

// ── Temperature colouring ────────────────────────────────────────────────────
// Bounds are inclusive on both sides. Off by one and a 15° morning stops being
// blue without anyone noticing.

const BLUE = '#3d84e0';
const HOT  = '#e0503a';
const tCol = (v, cfg = {}) => mkCard(
  { module_type: 'outdoor', entity: 'sensor.t', color_temperature: true, ...cfg })
  ._valueColor(v);

check('15° pile : bleu', tCol(15), BLUE);
check('15.1° : couleur normale', tCol(15.1), '');
check('29.9° : couleur normale', tCol(29.9), '');
check('30° pile : rouge', tCol(30), HOT);
check('seuils personnalisés respectés', tCol(-4, { temp_cold: -5 }), '');
check('option désactivée : jamais de couleur',
  mkCard({ module_type: 'outdoor', entity: 'sensor.t' })._valueColor(35), '');
check('type pluviomètre : pas de coloration de température',
  mkCard({ module_type: 'rain', entity: 'sensor.p', color_temperature: true })._valueColor(35), '');

// ── Groove glow ──────────────────────────────────────────────────────────────
// The outdoor module has no LED. Lighting it would look good and be a lie.

const glow = (cfg, ppm) => mkCard(cfg,
  { 'sensor.t': st(21, { device_class: 'temperature' }),
    'sensor.c': st(ppm, { device_class: 'carbon_dioxide' }) })._glowColor();
const IN = { module_type: 'indoor', entity: 'sensor.t', co2_entity: 'sensor.c' };

check('intérieur, air sain : vert', glow(IN, 600), '#3ec46d');
check('intérieur, air confiné : orange', glow(IN, 1500), '#f0a025');
check('intérieur, air vicié : rouge', glow(IN, 2400), '#e0503a');
check('module supplémentaire : s\'allume aussi',
  glow({ ...IN, module_type: 'indoor_extra' }, 600), '#3ec46d');
check('extérieur : ne s\'allume jamais',
  glow({ ...IN, module_type: 'outdoor' }, 600), null);
check('show_glow false : éteint', glow({ ...IN, show_glow: false }, 600), null);
check('pas de capteur CO2 : éteint',
  mkCard({ module_type: 'indoor', entity: 'sensor.t' }, {})._glowColor(), null);

// ── Module type ──────────────────────────────────────────────────────────────

check('type inconnu ramené à intérieur',
  mkCard({ module_type: 'jardin', entity: 'sensor.t' })._kind(), 'indoor');
check('type absent ramené à intérieur',
  mkCard({ entity: 'sensor.t' })._kind(), 'indoor');

// ── Drawn proportions ────────────────────────────────────────────────────────
// The three cylinders share a diameter and differ in height: 155, 105 and 92 mm.
// A wrong ratio draws a perfectly convincing module of the wrong size.

const drawnHeight = (kind) => {
  const vb = mkCard({ module_type: kind, entity: 'sensor.t' })._moduleSvg()
    .match(/viewBox="0 ([-\d.]+) 124 ([\d.]+)"/);
  return vb ? Number(vb[2]) : NaN;
};
const hIn = drawnHeight('indoor'), hOut = drawnHeight('outdoor'), hEx = drawnHeight('indoor_extra');
check('station plus haute que l\'extérieur', hIn > hOut, true);
check('extérieur plus haut que le module supplémentaire', hOut > hEx, true);
check('rapport station / extérieur conforme aux 155 et 105 mm',
  Math.abs((hIn - 22) / (hOut - 22) - 155 / 105) < 0.05, true);
check('rapport extérieur / supplémentaire conforme aux 105 et 92 mm',
  Math.abs((hOut - 22) / (hEx - 22) - 105 / 92) < 0.05, true);

// ── Weather icons ────────────────────────────────────────────────────────────

const wx = mkCard({ module_type: 'outdoor', entity: 'sensor.t', weather_entity: 'weather.h' },
  { 'sensor.t': st(18, { device_class: 'temperature' }),
    'weather.h': st('partlycloudy') });
wx._el = { 'nt-weather': { hidden: true, innerHTML: '', title: '' } };
wx._uid = () => 'test';
wx._updateWeather();
contains('condition connue : icône dessinée', wx._el['nt-weather'].innerHTML, '<svg');
check('bloc météo affiché', wx._el['nt-weather'].hidden, false);

const wxUnknown = mkCard({ module_type: 'outdoor', entity: 'sensor.t', weather_entity: 'weather.h' },
  { 'sensor.t': st(18, { device_class: 'temperature' }), 'weather.h': st('brouillard-violet') });
wxUnknown._el = { 'nt-weather': { hidden: true, innerHTML: '', title: '' } };
wxUnknown._uid = () => 'test';
wxUnknown._updateWeather();
contains('condition inconnue : repli sur une icône Material',
  wxUnknown._el['nt-weather'].innerHTML, 'ha-icon');

const wxNone = mkCard({ module_type: 'outdoor', entity: 'sensor.t' }, {});
wxNone._el = { 'nt-weather': { hidden: false, innerHTML: '', title: '' } };
wxNone._updateWeather();
check('pas d\'entité météo : bloc masqué', wxNone._el['nt-weather'].hidden, true);

// ── 24 h chart scale ─────────────────────────────────────────────────────────
// The curve is drawn against a padded min and max. Get the padding wrong and
// the line still looks like a plausible temperature curve.

const t0 = Date.now();
const pts = [
  { t: t0 - 20 * 3600e3, v: 10 },
  { t: t0 - 10 * 3600e3, v: 15 },
  { t: t0 - 1 * 3600e3,  v: 20 },
];
const chart = mkCard({ module_type: 'indoor', entity: 'sensor.t' },
  { 'sensor.t': st(20, { unit_of_measurement: '°C' }) })._histSvg(pts, 'sensor.t');
contains('le tracé annonce les extrêmes réels', chart, '<title>10 → 20 °C</title>');
contains('échelle basse rembourrée sous le minimum', chart, '>9</text>');
contains('échelle haute rembourrée au-dessus du maximum', chart, '>21</text>');

const flat = mkCard({ module_type: 'indoor', entity: 'sensor.t' },
  { 'sensor.t': st(20, { unit_of_measurement: '°C' }) })
  ._histSvg([{ t: t0 - 3600e3, v: 20 }, { t: t0 - 60e3, v: 20 }], 'sensor.t');
check('série plate : pas de division par zéro', /NaN|Infinity/.test(flat), false);

const stale = mkCard({ module_type: 'indoor', entity: 'sensor.t' },
  { 'sensor.t': st(20, {}) })
  ._histSvg([{ t: t0 - 48 * 3600e3, v: 10 }, { t: t0 - 47 * 3600e3, v: 12 }], 'sensor.t');
contains('points tous antérieurs à la fenêtre : message, pas de courbe', stale, 'nt-hist-status');
check('points hors fenêtre : aucun tracé produit', /<svg/.test(stale), false);

// ── Editor ───────────────────────────────────────────────────────────────────

function mkEditor(config, states = {}) {
  const ed = new Editor();
  ed.insertBefore = function (n) { this.children.unshift(n); return n; };
  ed.setConfig({ type: 'custom:netatmo-card', ...config });
  ed.hass = { states, locale: { language: 'fr' }, entities: {} };
  return ed;
}

// The form data used to be a hand-written list. Every field added after it was
// written was missing from it, so ha-form reported those fields as undefined on
// the next edit and the change handler dropped them from the configuration.
const edOut = mkEditor(
  { module_type: 'outdoor', entity: 'sensor.t', wind_entity: 'sensor.v',
    rain_forecast_entity: 'sensor.p', humidity_entity: 'sensor.h' },
  { 'sensor.t': st(18, { device_class: 'temperature' }) });
check('le formulaire reçoit la valeur du vent',
  edOut._form.data.wind_entity, 'sensor.v');
check('le formulaire reçoit la valeur de la pluie annoncée',
  edOut._form.data.rain_forecast_entity, 'sensor.p');
check('le formulaire reçoit la valeur de l\'humidité',
  edOut._form.data.humidity_entity, 'sensor.h');

const edRain = mkEditor({ module_type: 'rain', entity: 'sensor.p',
  rain_hour_entity: 'sensor.rh', rain_rate_entity: 'sensor.rr' });
check('pluviomètre : le formulaire reçoit l\'heure précédente',
  edRain._form.data.rain_hour_entity, 'sensor.rh');
check('pluviomètre : le formulaire reçoit le relevé courant',
  edRain._form.data.rain_rate_entity, 'sensor.rr');

const edWind = mkEditor({ module_type: 'wind', entity: 'sensor.v', gust_entity: 'sensor.g' });
check('anémomètre : le formulaire reçoit les rafales',
  edWind._form.data.gust_entity, 'sensor.g');

// Every entity field of the module type must reach the form, whatever gets
// added later. This is the invariant, not the individual fields above.
const names = (ed) => ed._form.schema.map(s => s.name);
for (const [kind, entity] of [['indoor', 'sensor.t'], ['indoor_extra', 'sensor.t'],
                              ['outdoor', 'sensor.t'], ['rain', 'sensor.p'], ['wind', 'sensor.v']]) {
  const ed = mkEditor({ module_type: kind, entity });
  const missing = names(ed).filter(n => n.endsWith('_entity') && !(n in ed._form.data));
  check(`${kind} : aucun champ du schéma absent des données`, missing.join(',') , '');
}

// Options belong to the module that can use them.
check('extérieur : pas de seuil CO2 proposé',
  names(mkEditor({ module_type: 'outdoor', entity: 'sensor.t' })).includes('co2_good'), false);
check('pluviomètre : pas de finition proposée',
  names(mkEditor({ module_type: 'rain', entity: 'sensor.p' })).includes('body_color'), false);
check('extérieur : le vent est proposé',
  names(mkEditor({ module_type: 'outdoor', entity: 'sensor.t' })).includes('wind_entity'), true);
check('intérieur : le vent n\'est pas proposé',
  names(mkEditor({ module_type: 'indoor', entity: 'sensor.t' })).includes('wind_entity'), false);

// CustomEvent.detail is a readonly accessor: assigning it after construction
// drops the payload and every edit made in the editor is silently discarded.
const edFire = mkEditor({ module_type: 'outdoor', entity: 'sensor.t' });
edFire._fill(FR, { humidity_entity: 'sensor.h' });
const ev = edFire.events.at(-1);
check('l\'éditeur émet config-changed', ev?.type, 'config-changed');
check('config-changed porte bien detail.config',
  ev?.detail?.config?.humidity_entity, 'sensor.h');

// ── Editor rebuild: silent entity loss ───────────────────────────────────────
// Home Assistant calls setConfig again after every config-changed the editor
// emits. An editor that rebuilds its DOM each time recreates its pickers, and a
// fresh picker can fire an empty value-changed before it knows its value, which
// then overwrites the configured entity. The card must survive being re-fed its
// own configuration.

const CFG = { type: 'custom:netatmo-card', module_type: 'outdoor', entity: 'sensor.t',
  humidity_entity: 'sensor.h', wind_entity: 'sensor.v' };
const edKeep = mkEditor(CFG, { 'sensor.t': st(18, { device_class: 'temperature' }) });
const formFirst = edKeep._form;
const sentinel = { tag: 'sentinelle', markup: '<!--sentinelle-->' };
edKeep.appendChild(sentinel);

edKeep.setConfig({ ...CFG });   // l'écho que HA renvoie après un config-changed

check('le DOM de l\'éditeur n\'est pas reconstruit à chaque setConfig',
  edKeep.children.includes(sentinel), true);
check('le formulaire reste le même objet', edKeep._form === formFirst, true);
check('l\'entité principale survit à l\'écho', edKeep._form.data.entity, 'sensor.t');
check('le vent survit à l\'écho', edKeep._form.data.wind_entity, 'sensor.v');
check('l\'humidité survit à l\'écho', edKeep._form.data.humidity_entity, 'sensor.h');

// Ten echoes in a row, as a dashboard editor session produces.
for (let i = 0; i < 10; i++) edKeep.setConfig({ ...CFG });
check('dix échos consécutifs : rien n\'est perdu',
  [edKeep._form.data.entity, edKeep._form.data.wind_entity,
   edKeep._form.data.humidity_entity].join('|'),
  'sensor.t|sensor.v|sensor.h');
check('dix échos consécutifs : le DOM tient toujours',
  edKeep.children.includes(sentinel), true);

// An empty value-changed must not wipe a configured entity unless the user has
// actually touched the form. Clearing a picker involves a pointer or a key, so
// the legitimate case still goes through.

function echoEditor() {
  const realCreate = globalThis.document.createElement;
  globalThis.document.createElement = (tag) => {
    const n = realCreate(tag);
    n.addEventListener = (type, fn) => { (n._l = n._l || {})[type] = fn; };
    return n;
  };
  const ed = mkEditor({ module_type: 'outdoor', entity: 'sensor.t',
    humidity_entity: 'sensor.h', wind_entity: 'sensor.v' },
    { 'sensor.t': st(18, { device_class: 'temperature' }) });
  globalThis.document.createElement = realCreate;
  return ed;
}
function echo(patch, touched) {
  const ed = echoEditor();
  if (touched) ed._touched = true;
  ed._form._l['value-changed']({ detail: { value: { ...ed._form.data, ...patch } } });
  return ed.events.at(-1)?.detail?.config || {};
}

check('écho vide non sollicité : l\'entité principale est gardée',
  echo({ entity: '' }, false).entity, 'sensor.t');
check('écho vide non sollicité : le vent est gardé',
  echo({ wind_entity: '' }, false).wind_entity, 'sensor.v');
check('écho identique : rien ne bouge',
  echo({}, false).entity, 'sensor.t');
check('champ vidé après une vraie interaction : le vide est accepté',
  echo({ wind_entity: '' }, true).wind_entity, undefined);
check('vrai changement, formulaire touché : la nouvelle valeur passe',
  echo({ wind_entity: 'sensor.autre' }, true).wind_entity, 'sensor.autre');
check('vrai changement sans interaction : la nouvelle valeur passe quand même',
  echo({ wind_entity: 'sensor.autre' }, false).wind_entity, 'sensor.autre');

report();
