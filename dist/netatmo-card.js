const CARD_VERSION = "1.0.0";

console.info(
  "%c NETATMO-CARD %c v" + CARD_VERSION + " ",
  "color:white;background:#2f7fb8;font-weight:700;",
  "color:#2f7fb8;background:white;font-weight:700;"
);

const NT_LANGNAMES = { en: "English", fr: "Français", de: "Deutsch", es: "Español", it: "Italiano", nl: "Nederlands" };

const NT_T = {
  en: { entity: "Temperature sensor", name: "Name", label: "Subtitle", decimals: "Decimals", language: "Language", auto: "Auto",
    unavailable: "Unavailable",
    modType: "Module type", mtIndoor: "Indoor station", mtIndoorExtra: "Additional indoor module", mtOutdoor: "Outdoor", mtRain: "Rain gauge", mtWind: "Anemometer",
    entRain: "Daily rainfall sensor", entWind: "Wind speed sensor",
    rainHour: "Rain in the previous hour", rainRate: "Rain since last reading",
    gust: "Gust speed entity", windDir: "Wind direction entity",
    dirs: ["N", "NE", "E", "SE", "S", "SW", "W", "NW"], windFrom: "Wind from",
    humidity: "Humidity entity", co2: "CO₂ entity", noise: "Noise entity", pressure: "Pressure entity",
    trend: "Temperature trend entity", battery: "Battery entity", connectivity: "Connectivity entity",
    body: "Module finish", bodyAlu: "Aluminium", bodySand: "Sand", bodyMint: "Mint", bodyGraphite: "Graphite",
    glow: "Light up the groove with air quality (indoor)", accent: "Accent color (hex)", clickOpt: "Open more-info when tapped",
    windEnt: "Wind speed entity (from a forecast)", rainFc: "Forecast rain entity, hidden at 0",
    weatherEnt: "Weather entity (current conditions)", weatherIcons: "Weather icon style",
    wiDrawn: "Drawn", wiMdi: "Material icons", showModule: "Show the module drawing",
    colorTemp: "Colour the temperature by threshold", tempCold: "Blue below (°)", tempHot: "Red above (°)",
    co2Good: "CO₂ threshold — good (ppm)", co2Bad: "CO₂ threshold — poor (ppm)",
    histOpt: "Show the 24 h history button", histEnt: "Charted entity (default: temperature)",
    hist: "Last 24 h", noData: "No data",
    airGood: "Healthy air", airFair: "Stuffy air", airPoor: "Poor air",
    fillTitle: "Other sensors of this module were found.", fillBtn: "Fill in from the device",
    filled: "Filled in from the device:", fillNone: "Nothing more to fill in." },
  fr: { entity: "Capteur de température", name: "Nom", label: "Sous-titre", decimals: "Décimales", language: "Langue", auto: "Auto",
    unavailable: "Indisponible",
    modType: "Type de module", mtIndoor: "Station intérieure", mtIndoorExtra: "Module intérieur supplémentaire", mtOutdoor: "Extérieur", mtRain: "Pluviomètre", mtWind: "Anémomètre",
    entRain: "Capteur de pluie du jour", entWind: "Capteur de vitesse du vent",
    rainHour: "Pluie de l'heure précédente", rainRate: "Pluie depuis le dernier relevé",
    gust: "Entité rafales", windDir: "Entité direction du vent",
    dirs: ["N", "NE", "E", "SE", "S", "SO", "O", "NO"], windFrom: "Vent de",
    humidity: "Entité humidité", co2: "Entité CO₂", noise: "Entité bruit", pressure: "Entité pression",
    trend: "Entité tendance de la température", battery: "Entité batterie", connectivity: "Entité connectivité",
    body: "Finition du module", bodyAlu: "Aluminium", bodySand: "Sable", bodyMint: "Menthe", bodyGraphite: "Graphite",
    glow: "Allumer la fente selon la qualité de l'air (intérieur)", accent: "Couleur d'accent (hex)", clickOpt: "Ouvrir la fiche au clic",
    windEnt: "Entité vitesse du vent (prévision)", rainFc: "Entité pluie annoncée, masquée à 0",
    weatherEnt: "Entité météo (temps actuel)", weatherIcons: "Style des icônes météo",
    wiDrawn: "Dessinées", wiMdi: "Icônes Material", showModule: "Afficher le dessin du module",
    colorTemp: "Colorer la température selon des seuils", tempCold: "Bleu en dessous de (°)", tempHot: "Rouge au-dessus de (°)",
    co2Good: "Seuil CO₂ — bon (ppm)", co2Bad: "Seuil CO₂ — mauvais (ppm)",
    histOpt: "Afficher le bouton tracé 24 h", histEnt: "Entité tracée (défaut : température)",
    hist: "Dernières 24 h", noData: "Aucune donnée",
    airGood: "Air sain", airFair: "Air confiné", airPoor: "Air vicié",
    fillTitle: "D'autres capteurs de ce module ont été trouvés.", fillBtn: "Compléter depuis l'appareil",
    filled: "Complété depuis l'appareil :", fillNone: "Rien de plus à compléter." },
  de: { entity: "Temperatursensor", name: "Name", label: "Untertitel", decimals: "Dezimalstellen", language: "Sprache", auto: "Auto",
    unavailable: "Nicht verfügbar",
    modType: "Modultyp", mtIndoor: "Innenstation", mtIndoorExtra: "Zusätzliches Innenmodul", mtOutdoor: "Außen", mtRain: "Regenmesser", mtWind: "Windmesser",
    entRain: "Regensensor (Tagessumme)", entWind: "Windgeschwindigkeitssensor",
    rainHour: "Regen in der letzten Stunde", rainRate: "Regen seit der letzten Messung",
    gust: "Böen-Entität", windDir: "Windrichtungs-Entität",
    dirs: ["N", "NO", "O", "SO", "S", "SW", "W", "NW"], windFrom: "Wind aus",
    humidity: "Feuchtigkeits-Entität", co2: "CO₂-Entität", noise: "Lärm-Entität", pressure: "Luftdruck-Entität",
    trend: "Entität Temperaturtrend", battery: "Batterie-Entität", connectivity: "Konnektivitäts-Entität",
    body: "Oberfläche des Moduls", bodyAlu: "Aluminium", bodySand: "Sand", bodyMint: "Mint", bodyGraphite: "Graphit",
    glow: "Schlitz nach Luftqualität leuchten lassen (innen)", accent: "Akzentfarbe (Hex)", clickOpt: "Beim Tippen die Detailansicht öffnen",
    windEnt: "Windgeschwindigkeit (aus einer Vorhersage)", rainFc: "Regenvorhersage, bei 0 ausgeblendet",
    weatherEnt: "Wetter-Entität (aktuelles Wetter)", weatherIcons: "Stil der Wettersymbole",
    wiDrawn: "Gezeichnet", wiMdi: "Material-Symbole", showModule: "Modulzeichnung anzeigen",
    colorTemp: "Temperatur nach Schwellen einfärben", tempCold: "Blau unter (°)", tempHot: "Rot über (°)",
    co2Good: "CO₂-Schwelle — gut (ppm)", co2Bad: "CO₂-Schwelle — schlecht (ppm)",
    histOpt: "24-h-Verlauf-Button anzeigen", histEnt: "Dargestellte Entität (Standard: Temperatur)",
    hist: "Letzte 24 h", noData: "Keine Daten",
    airGood: "Gute Luft", airFair: "Verbrauchte Luft", airPoor: "Schlechte Luft",
    fillTitle: "Weitere Sensoren dieses Moduls gefunden.", fillBtn: "Aus dem Gerät übernehmen",
    filled: "Aus dem Gerät übernommen:", fillNone: "Nichts weiter zu übernehmen." },
  es: { entity: "Sensor de temperatura", name: "Nombre", label: "Subtítulo", decimals: "Decimales", language: "Idioma", auto: "Auto",
    unavailable: "No disponible",
    modType: "Tipo de módulo", mtIndoor: "Estación interior", mtIndoorExtra: "Módulo interior adicional", mtOutdoor: "Exterior", mtRain: "Pluviómetro", mtWind: "Anemómetro",
    entRain: "Sensor de lluvia del día", entWind: "Sensor de velocidad del viento",
    rainHour: "Lluvia en la hora anterior", rainRate: "Lluvia desde la última lectura",
    gust: "Entidad de rachas", windDir: "Entidad de dirección del viento",
    dirs: ["N", "NE", "E", "SE", "S", "SO", "O", "NO"], windFrom: "Viento del",
    humidity: "Entidad de humedad", co2: "Entidad de CO₂", noise: "Entidad de ruido", pressure: "Entidad de presión",
    trend: "Entidad de tendencia de temperatura", battery: "Entidad de batería", connectivity: "Entidad de conectividad",
    body: "Acabado del módulo", bodyAlu: "Aluminio", bodySand: "Arena", bodyMint: "Menta", bodyGraphite: "Grafito",
    glow: "Iluminar la ranura según la calidad del aire (interior)", accent: "Color de acento (hex)", clickOpt: "Abrir la ficha al tocar",
    windEnt: "Entidad de velocidad del viento (previsión)", rainFc: "Entidad de lluvia prevista, oculta a 0",
    weatherEnt: "Entidad meteorológica (tiempo actual)", weatherIcons: "Estilo de los iconos del tiempo",
    wiDrawn: "Dibujados", wiMdi: "Iconos Material", showModule: "Mostrar el dibujo del módulo",
    colorTemp: "Colorear la temperatura por umbrales", tempCold: "Azul por debajo de (°)", tempHot: "Rojo por encima de (°)",
    co2Good: "Umbral CO₂ — bueno (ppm)", co2Bad: "Umbral CO₂ — malo (ppm)",
    histOpt: "Mostrar el botón de historial 24 h", histEnt: "Entidad del gráfico (por defecto: temperatura)",
    hist: "Últimas 24 h", noData: "Sin datos",
    airGood: "Aire sano", airFair: "Aire cargado", airPoor: "Aire viciado",
    fillTitle: "Se han encontrado otros sensores de este módulo.", fillBtn: "Completar desde el dispositivo",
    filled: "Completado desde el dispositivo:", fillNone: "Nada más que completar." },
  it: { entity: "Sensore di temperatura", name: "Nome", label: "Sottotitolo", decimals: "Decimali", language: "Lingua", auto: "Auto",
    unavailable: "Non disponibile",
    modType: "Tipo di modulo", mtIndoor: "Stazione interna", mtIndoorExtra: "Modulo interno aggiuntivo", mtOutdoor: "Esterno", mtRain: "Pluviometro", mtWind: "Anemometro",
    entRain: "Sensore pioggia del giorno", entWind: "Sensore velocità del vento",
    rainHour: "Pioggia nell'ora precedente", rainRate: "Pioggia dall'ultima lettura",
    gust: "Entità raffiche", windDir: "Entità direzione del vento",
    dirs: ["N", "NE", "E", "SE", "S", "SO", "O", "NO"], windFrom: "Vento da",
    humidity: "Entità umidità", co2: "Entità CO₂", noise: "Entità rumore", pressure: "Entità pressione",
    trend: "Entità tendenza della temperatura", battery: "Entità batteria", connectivity: "Entità connettività",
    body: "Finitura del modulo", bodyAlu: "Alluminio", bodySand: "Sabbia", bodyMint: "Menta", bodyGraphite: "Grafite",
    glow: "Illumina la fessura secondo la qualità dell'aria (interno)", accent: "Colore d'accento (hex)", clickOpt: "Apri la scheda al tocco",
    windEnt: "Entità velocità del vento (previsione)", rainFc: "Entità pioggia prevista, nascosta a 0",
    weatherEnt: "Entità meteo (tempo attuale)", weatherIcons: "Stile delle icone meteo",
    wiDrawn: "Disegnate", wiMdi: "Icone Material", showModule: "Mostra il disegno del modulo",
    colorTemp: "Colora la temperatura per soglie", tempCold: "Blu sotto (°)", tempHot: "Rosso sopra (°)",
    co2Good: "Soglia CO₂ — buona (ppm)", co2Bad: "Soglia CO₂ — scarsa (ppm)",
    histOpt: "Mostra il pulsante storico 24 h", histEnt: "Entità nel grafico (predefinito: temperatura)",
    hist: "Ultime 24 h", noData: "Nessun dato",
    airGood: "Aria salubre", airFair: "Aria viziata", airPoor: "Aria pessima",
    fillTitle: "Trovati altri sensori di questo modulo.", fillBtn: "Completa dal dispositivo",
    filled: "Completato dal dispositivo:", fillNone: "Nulla da completare." },
  nl: { entity: "Temperatuursensor", name: "Naam", label: "Ondertitel", decimals: "Decimalen", language: "Taal", auto: "Auto",
    unavailable: "Niet beschikbaar",
    modType: "Moduletype", mtIndoor: "Binnenstation", mtIndoorExtra: "Extra binnenmodule", mtOutdoor: "Buiten", mtRain: "Regenmeter", mtWind: "Windmeter",
    entRain: "Regensensor (dagtotaal)", entWind: "Windsnelheidssensor",
    rainHour: "Regen in het vorige uur", rainRate: "Regen sinds de laatste meting",
    gust: "Windstoot-entiteit", windDir: "Windrichting-entiteit",
    dirs: ["N", "NO", "O", "ZO", "Z", "ZW", "W", "NW"], windFrom: "Wind uit",
    humidity: "Vochtigheids-entiteit", co2: "CO₂-entiteit", noise: "Geluids-entiteit", pressure: "Luchtdruk-entiteit",
    trend: "Entiteit temperatuurtrend", battery: "Batterij-entiteit", connectivity: "Connectiviteits-entiteit",
    body: "Afwerking van de module", bodyAlu: "Aluminium", bodySand: "Zand", bodyMint: "Mint", bodyGraphite: "Grafiet",
    glow: "Sleuf laten oplichten op luchtkwaliteit (binnen)", accent: "Accentkleur (hex)", clickOpt: "Meer-info openen bij tikken",
    windEnt: "Windsnelheid-entiteit (uit een voorspelling)", rainFc: "Verwachte regen, verborgen bij 0",
    weatherEnt: "Weer-entiteit (huidig weer)", weatherIcons: "Stijl van de weerpictogrammen",
    wiDrawn: "Getekend", wiMdi: "Material-pictogrammen", showModule: "Moduletekening tonen",
    colorTemp: "Temperatuur kleuren op drempels", tempCold: "Blauw onder (°)", tempHot: "Rood boven (°)",
    co2Good: "CO₂-drempel — goed (ppm)", co2Bad: "CO₂-drempel — slecht (ppm)",
    histOpt: "Toon de 24 u-geschiedenisknop", histEnt: "Weergegeven entiteit (standaard: temperatuur)",
    hist: "Afgelopen 24 u", noData: "Geen gegevens",
    airGood: "Gezonde lucht", airFair: "Bedompte lucht", airPoor: "Slechte lucht",
    fillTitle: "Andere sensoren van deze module gevonden.", fillBtn: "Aanvullen vanaf het apparaat",
    filled: "Aangevuld vanaf het apparaat:", fillNone: "Niets meer aan te vullen." },
};

function ntLangCode(hass, config) {
  const l = (config && config.language) || (hass && (hass.locale ? hass.locale.language : hass.language)) || "en";
  const s = String(l).substring(0, 2).toLowerCase();
  return NT_T[s] ? s : "en";
}
function ntT(hass, config) { return NT_T[ntLangCode(hass, config)]; }

function ntEsc(v) {
  return String(v).replace(/[&<>"]/g, (ch) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[ch]));
}

function ntFmt(n, decimals, group) {
  if (n == null || isNaN(n)) return "—";
  return n.toLocaleString(undefined, {
    minimumFractionDigits: decimals, maximumFractionDigits: decimals, useGrouping: group !== false,
  });
}

// Matte anodised aluminium, sampled left-to-right across the cylinder.
const NT_BODY = {
  aluminium: ["#9aa0a4", "#c2c7cb", "#e2e5e7", "#eef0f1", "#e0e3e5", "#cbcfd2", "#b1b6ba", "#ced2d5", "#93999d"],
  sand: ["#897d6e", "#b6a898", "#d3c5b3", "#e0d4c4", "#cfc2b0", "#bdb09e", "#a39684", "#bcb09e", "#83776a"],
  mint: ["#8ca097", "#b6c8bf", "#d6e3dc", "#e3ede7", "#d2dfd8", "#bfd0c8", "#a5b8af", "#bdcec6", "#879b92"],
  graphite: ["#232629", "#3d4145", "#5c6165", "#6f7479", "#5e6367", "#4b4f53", "#36393d", "#4c5054", "#202326"],
  // Not selectable: the rain gauge and the anemometer only exist in glossy black.
  gloss: ["#14171b", "#333944", "#59616d", "#767e8a", "#4d5560", "#31373f", "#1e2228", "#2f343c", "#121418"],
};

const NT_METRICS = [
  { key: "humidity", cfg: "humidity_entity", icon: "mdi:water-percent", dec: 0 },
  { key: "wind", cfg: "wind_entity", icon: "mdi:weather-windy", dec: 0 },
  { key: "rain_forecast", cfg: "rain_forecast_entity", icon: "mdi:weather-pouring", dec: 1 },
  { key: "co2", cfg: "co2_entity", icon: "mdi:molecule-co2", dec: 0 },
  { key: "noise", cfg: "noise_entity", icon: "mdi:volume-high", dec: 0 },
  { key: "pressure", cfg: "pressure_entity", icon: "mdi:gauge", dec: 0, group: false },
  { key: "rain_hour", cfg: "rain_hour_entity", icon: "mdi:weather-pouring", dec: 1 },
  { key: "rain_rate", cfg: "rain_rate_entity", icon: "mdi:water-outline", dec: 1 },
  { key: "gust", cfg: "gust_entity", icon: "mdi:weather-windy", dec: 0 },
  { key: "wind_dir", cfg: "wind_direction_entity", icon: "mdi:compass-outline", dec: 0 },
];

// device_class -> config key, used to pull the sibling sensors of a module.
const NT_BY_CLASS = {
  humidity: "humidity_entity",
  carbon_dioxide: "co2_entity",
  sound_pressure: "noise_entity",
  atmospheric_pressure: "pressure_entity",
  pressure: "pressure_entity",
  battery: "battery_entity",
  connectivity: "connectivity_entity",
};

// What each module actually measures. The outdoor module has no CO2, noise or pressure —
// those live in the indoor base station.
const NT_FIELDS = {
  indoor: ["humidity_entity", "co2_entity", "noise_entity", "pressure_entity",
    "trend_entity", "battery_entity", "connectivity_entity"],
  indoor_extra: ["humidity_entity", "co2_entity", "trend_entity", "battery_entity", "connectivity_entity"],
  outdoor: ["humidity_entity", "wind_entity", "wind_direction_entity", "rain_forecast_entity",
    "trend_entity", "battery_entity", "connectivity_entity"],
  rain: ["rain_hour_entity", "rain_rate_entity", "battery_entity", "connectivity_entity"],
  wind: ["gust_entity", "wind_direction_entity", "battery_entity", "connectivity_entity"],
};

// The main reading of each module, and how many decimals suit it.
const NT_MAIN = {
  indoor: { device_class: "temperature", dec: 1 },
  indoor_extra: { device_class: "temperature", dec: 1 },
  outdoor: { device_class: "temperature", dec: 1 },
  rain: { device_class: "precipitation", dec: 1 },
  wind: { device_class: "wind_speed", dec: 0 },
};

// Narrows each picker to sensors that can plausibly answer it.
const NT_SELECTOR = {
  humidity_entity: { entity: { domain: "sensor", device_class: "humidity" } },
  co2_entity: { entity: { domain: "sensor", device_class: "carbon_dioxide" } },
  noise_entity: { entity: { domain: "sensor", device_class: "sound_pressure" } },
  pressure_entity: { entity: { domain: "sensor", device_class: ["atmospheric_pressure", "pressure"] } },
  trend_entity: { entity: { domain: "sensor" } },
  battery_entity: { entity: { domain: "sensor", device_class: "battery" } },
  connectivity_entity: { entity: { domain: "binary_sensor", device_class: "connectivity" } },
  rain_hour_entity: { entity: { domain: "sensor", device_class: "precipitation" } },
  rain_rate_entity: { entity: { domain: "sensor", device_class: ["precipitation", "precipitation_intensity"] } },
  gust_entity: { entity: { domain: "sensor", device_class: "wind_speed" } },
  wind_direction_entity: { entity: { domain: "sensor", device_class: ["wind_direction", "enum"] } },
  wind_entity: { entity: { domain: "sensor", device_class: "wind_speed" } },
  rain_forecast_entity: { entity: { domain: "sensor", device_class: ["precipitation", "precipitation_intensity"] } },
};

function ntFieldLabels(t) {
  return { humidity_entity: t.humidity, co2_entity: t.co2, noise_entity: t.noise,
    pressure_entity: t.pressure, trend_entity: t.trend, battery_entity: t.battery,
    connectivity_entity: t.connectivity, rain_hour_entity: t.rainHour,
    rain_rate_entity: t.rainRate, gust_entity: t.gust, wind_direction_entity: t.windDir,
    wind_entity: t.windEnt, rain_forecast_entity: t.rainFc };
}

// Readings that do not come from the module itself: a forecast, a weather service. The
// editor must offer them even though the device exposes nothing of the sort.
const NT_EXTERNAL = new Set(["wind_entity", "wind_direction_entity", "rain_forecast_entity"]);

const NT_TREND_RE = /trend|tendance|tendenz|tendencia|tendenza/i;
const NT_PRESS_RE = /pressure|pression|druck|presion|presión|pressione/i;
const NT_GUST_RE = /gust|rafale|b(ö|oe)e|raffica|racha|windstoot/i;

// Netatmo ships two direction sensors: `windangle_value` in degrees (device_class
// wind_direction, disabled by default) and `windangle`, an enum of cardinals that IS
// enabled by default. Both are accepted; the enum is mapped back onto an angle.
// All three cylinders are 45 mm across. Heights: 155 mm for the station, 92 mm for the
// additional indoor module, 105 mm for the outdoor one.
const NT_SHAPE = {
  indoor: { ratio: 3.44, slot: [0.175, 0.84] },
  indoor_extra: { ratio: 2.04, slot: [0.22, 0.78] },
  outdoor: { ratio: 2.33, slot: [0.22, 0.76] },
};

const NT_ENUM_DIRS = ["n", "ne", "e", "se", "s", "sw", "w", "nw"];
function ntWindAngle(st) {
  if (!st) return NaN;
  const n = parseFloat(st.state);
  if (!isNaN(n)) return ((n % 360) + 360) % 360;
  const i = NT_ENUM_DIRS.indexOf(String(st.state).trim().toLowerCase());
  return i < 0 ? NaN : i * 45;
}
const NT_HOUR_RE = /hour|heure|stunde|hora|ora|uur/i;

function ntSiblings(hass, entity) {
  // Entities of the same device, or failing that entities sharing the object_id prefix.
  const reg = hass.entities || {};
  const devId = reg[entity] && reg[entity].device_id;
  if (devId) {
    return Object.keys(hass.states).filter((e) => reg[e] && reg[e].device_id === devId && e !== entity);
  }
  const base = entity.split(".")[1].replace(/_[a-z0-9]+$/, "");
  if (base.length < 3) return [];
  return Object.keys(hass.states)
    .filter((e) => e !== entity && /^(sensor|binary_sensor)\./.test(e) && e.split(".")[1].startsWith(base + "_"))
    .sort((a, b) => a.length - b.length);
}

// Whether two entities sit on the same device. Undecidable without the registry, in which
// case we leave the user's choice alone.
function ntSameDevice(hass, a, b) {
  const reg = hass.entities || {};
  const da = reg[a] && reg[a].device_id;
  const db = reg[b] && reg[b].device_id;
  return da && db ? da === db : true;
}

// Maps the other entities of the module onto the card's config keys. Kind-aware, because
// a rain gauge exposes two `precipitation` sensors and an anemometer two `wind_speed` ones:
// the daily total is told apart by its state_class, the gust by its name.
function ntResolve(hass, entity, kind) {
  const out = {};
  if (!entity || !hass.states[entity]) return out;
  const allowed = NT_FIELDS[kind] || NT_FIELDS.indoor;
  for (const e of ntSiblings(hass, entity)) {
    const a = hass.states[e].attributes;
    const dc = a.device_class;
    let k = null;
    if (kind === "rain" && dc === "precipitation") {
      if (a.state_class === "total_increasing" || a.state_class === "total") continue;
      k = NT_HOUR_RE.test(e) ? "rain_hour_entity" : "rain_rate_entity";
    } else if (kind === "wind" && dc === "wind_speed") {
      k = NT_GUST_RE.test(e) ? "gust_entity" : null;
    } else if (kind === "wind" && (dc === "wind_direction" || dc === "enum")) {
      k = NT_GUST_RE.test(e) ? null : "wind_direction_entity";
      // Degrees beat cardinals when the module exposes both.
      if (k && out[k] && dc === "wind_direction") out[k] = e;
    } else if (dc) {
      k = NT_BY_CLASS[dc] || null;
    } else if (NT_TREND_RE.test(e) && !NT_PRESS_RE.test(e)) {
      k = "trend_entity";
    }
    if (k && allowed.includes(k) && !out[k]) out[k] = e;
  }
  return out;
}

// The keys still worth filling in, i.e. resolved but not already set.
function ntAutofill(hass, config) {
  const kind = NT_FIELDS[config.module_type] ? config.module_type : "indoor";
  const out = ntResolve(hass, config.entity, kind);
  for (const k of Object.keys(out)) if (config[k]) delete out[k];
  return out;
}

// The config keys the device behind `entity` can actually fill. null when no device is
// resolvable, in which case the caller falls back to everything the module type allows.
function ntDeviceFields(hass, entity, kind) {
  if (!entity || !hass.states[entity]) return null;
  if (!ntSiblings(hass, entity).length) return null;
  return new Set(Object.keys(ntResolve(hass, entity, kind)));
}

// ---------------------------------------------------------------------------
// Weather icons, drawn here so the card needs nothing installed alongside it.
// Home Assistant's own weather integrations already give the condition state.
// ---------------------------------------------------------------------------
const NT_WEATHER_MDI = {
  "clear-night": "mdi:weather-night", cloudy: "mdi:weather-cloudy",
  exceptional: "mdi:alert-circle-outline", fog: "mdi:weather-fog",
  hail: "mdi:weather-hail", lightning: "mdi:weather-lightning",
  "lightning-rainy": "mdi:weather-lightning-rainy", partlycloudy: "mdi:weather-partly-cloudy",
  pouring: "mdi:weather-pouring", rainy: "mdi:weather-rainy",
  snowy: "mdi:weather-snowy", "snowy-rainy": "mdi:weather-snowy-rainy",
  sunny: "mdi:weather-sunny", windy: "mdi:weather-windy",
  "windy-variant": "mdi:weather-windy-variant",
};

const NT_WP = {
  sun(cx, cy, r) {
    let out = "";
    for (let a = 0; a < 360; a += 45) {
      const t = (a * Math.PI) / 180, r1 = r + 3.4, r2 = r + 8.2;
      out += `<line x1="${(cx + r1 * Math.cos(t)).toFixed(1)}" y1="${(cy + r1 * Math.sin(t)).toFixed(1)}"` +
        ` x2="${(cx + r2 * Math.cos(t)).toFixed(1)}" y2="${(cy + r2 * Math.sin(t)).toFixed(1)}"` +
        ` stroke="#f5b62c" stroke-width="3.2" stroke-linecap="round"/>`;
    }
    return out + `<circle cx="${cx}" cy="${cy}" r="${r}" fill="#fbc72d"/>` +
      `<circle cx="${cx - r * 0.3}" cy="${cy - r * 0.3}" r="${r * 0.55}" fill="#fdd85e"/>`;
  },
  // Bitten out with a mask: two arcs sharing endpoints are far too easy to get wrong.
  moon(cx, cy, r, uid) {
    return `<defs><mask id="nt-moon-${uid}">
        <rect x="0" y="0" width="64" height="64" fill="#ffffff"/>
        <circle cx="${cx + r * 0.62}" cy="${cy - r * 0.46}" r="${r * 0.94}" fill="#000000"/>
      </mask></defs>
      <circle cx="${cx}" cy="${cy}" r="${r}" fill="#f3d264" mask="url(#nt-moon-${uid})"/>`;
  },
  cloud(x, y, s) {
    return `<g transform="translate(${x} ${y}) scale(${s})">
      <circle cx="15" cy="14" r="10" fill="#c3d3e0"/><circle cx="28" cy="10" r="12.5" fill="#c3d3e0"/>
      <circle cx="40" cy="16" r="9" fill="#c3d3e0"/><rect x="6" y="16" width="42" height="10" rx="5" fill="#c3d3e0"/>
      <circle cx="15" cy="12.5" r="9" fill="#eef4f9"/><circle cx="28" cy="8.5" r="11.5" fill="#eef4f9"/>
      <circle cx="39" cy="14.5" r="8" fill="#eef4f9"/><rect x="7" y="14" width="39" height="9" rx="4.5" fill="#eef4f9"/>
    </g>`;
  },
  drops(xs, y, len) {
    return xs.map((x) => `<line x1="${x}" y1="${y}" x2="${x - 2.5}" y2="${y + len}"` +
      ` stroke="#4a9fe0" stroke-width="3.4" stroke-linecap="round"/>`).join("");
  },
  flakes(xs, y) {
    return xs.map((x) => `<g transform="translate(${x} ${y})" stroke="#8fc9ee" stroke-width="2.4" stroke-linecap="round">
      <line x1="-3.4" y1="0" x2="3.4" y2="0"/><line x1="-1.7" y1="-2.9" x2="1.7" y2="2.9"/>
      <line x1="1.7" y1="-2.9" x2="-1.7" y2="2.9"/></g>`).join("");
  },
  hail(xs, y) {
    return xs.map((x) => `<circle cx="${x}" cy="${y + 3}" r="3" fill="#a8d4f0" stroke="#6fb0dc" stroke-width="1.2"/>`).join("");
  },
  bolt(x, y) {
    return `<path d="M ${x} ${y} L ${x - 7} ${y + 13} L ${x - 1} ${y + 13} L ${x - 4} ${y + 24}` +
      ` L ${x + 8} ${y + 9} L ${x + 1} ${y + 9} L ${x + 5} ${y} Z" fill="#f7b733" stroke="#e09a1c" stroke-width="1"/>`;
  },
  fog(y) {
    return [0, 1, 2].map((i) => `<line x1="${11 + (i % 2) * 4}" y1="${y + i * 7}" x2="${53 - (i % 2) * 4}" y2="${y + i * 7}"` +
      ` stroke="#c2ced7" stroke-width="3.6" stroke-linecap="round"/>`).join("");
  },
  wind(y) {
    return `<g fill="none" stroke="#9fb3c2" stroke-width="3.4" stroke-linecap="round">
      <path d="M 10 ${y} h 22 a 5 5 0 1 0 -5 -5"/>
      <path d="M 12 ${y + 10} h 30 a 5.5 5.5 0 1 1 -5.5 5.5"/></g>`;
  },
};

function ntWeatherSvg(cond, uid) {
  const P = NT_WP;
  let g;
  switch (cond) {
    case "sunny": g = P.sun(32, 32, 12); break;
    case "clear-night": g = P.moon(32, 32, 15, uid); break;
    case "partlycloudy": g = P.sun(23, 21, 9) + P.cloud(12, 24, 0.86); break;
    case "cloudy": g = P.cloud(6, 18, 1.02); break;
    case "rainy": g = P.cloud(8, 10, 0.94) + P.drops([22, 32, 42], 44, 10); break;
    case "pouring": g = P.cloud(8, 8, 0.94) + P.drops([19, 28, 37, 46], 42, 14); break;
    case "snowy": g = P.cloud(8, 10, 0.94) + P.flakes([22, 32, 42], 48); break;
    case "snowy-rainy": g = P.cloud(8, 10, 0.94) + P.drops([23], 44, 10) + P.flakes([41], 48); break;
    case "hail": g = P.cloud(8, 10, 0.94) + P.hail([22, 32, 42], 45); break;
    case "lightning": g = P.cloud(8, 8, 0.94) + P.bolt(32, 38); break;
    case "lightning-rainy": g = P.cloud(8, 6, 0.94) + P.bolt(36, 34) + P.drops([20], 42, 12); break;
    case "fog": g = P.cloud(8, 4, 0.86) + P.fog(38); break;
    case "windy": g = P.wind(26); break;
    case "windy-variant": g = P.cloud(8, 6, 0.86) + P.wind(40); break;
    case "exceptional":
      g = `<circle cx="32" cy="32" r="16" fill="#f7b733"/>
           <rect x="29.6" y="21" width="4.8" height="15" rx="2.4" fill="#fff"/>
           <circle cx="32" cy="41" r="2.8" fill="#fff"/>`;
      break;
    default: return "";
  }
  return `<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" style="display:block;width:100%;height:auto;">${g}</svg>`;
}

class NetatmoCard extends HTMLElement {
  static getConfigElement() { return document.createElement("netatmo-card-editor"); }

  static getStubConfig(hass) {
    const temps = Object.keys(hass.states).filter(
      (e) => e.startsWith("sensor.") && hass.states[e].attributes.device_class === "temperature"
    );
    const netatmo = temps.filter((e) => /netatmo/i.test(hass.states[e].attributes.attribution || ""));
    const entity = netatmo[0] || temps[0] || "";
    const dev = entity ? ntDeviceFields(hass, entity, "indoor") : null;
    const type = !dev || dev.has("noise_entity") || dev.has("pressure_entity") ? "indoor"
      : dev.has("co2_entity") ? "indoor_extra" : "outdoor";
    return { module_type: type, entity: entity, ...(entity ? ntAutofill(hass, { entity, module_type: type }) : {}) };
  }

  setConfig(config) {
    if (!config) throw new Error("Please define a configuration");
    const kind = NT_FIELDS[config.module_type] ? config.module_type : "indoor";
    let dec = parseInt(config.decimals, 10);
    if (!(dec >= 0 && dec <= 3)) dec = NT_MAIN[kind].dec;
    this._config = {
      ...config,
      module_type: kind,
      decimals: dec,
      temp_cold: config.temp_cold != null && config.temp_cold !== "" ? parseFloat(config.temp_cold) : 15,
      temp_hot: config.temp_hot != null && config.temp_hot !== "" ? parseFloat(config.temp_hot) : 30,
      co2_good: parseFloat(config.co2_good) > 0 ? parseFloat(config.co2_good) : 1000,
      co2_bad: parseFloat(config.co2_bad) > 0 ? parseFloat(config.co2_bad) : 2000,
      body_color: NT_BODY[config.body_color] ? config.body_color : "aluminium",
      accent_color: config.accent_color || "#2f8fd0",
    };
    this._built = false;
  }

  set hass(hass) {
    this._hass = hass;
    if (!this._built) { this._build(); this._built = true; }
    this._update();
  }

  getCardSize() { return 4; }

  _uid() {
    if (!this.__uid) this.__uid = Math.random().toString(36).slice(2, 8);
    return this.__uid;
  }

  _kind() {
    return NT_FIELDS[this._config.module_type] ? this._config.module_type : "indoor";
  }

  _moduleSvg() {
    const k = this._kind();
    return k === "rain" ? this._svgRain() : k === "wind" ? this._svgWind() : this._svgCylinder();
  }

  _glossStops() {
    return NT_BODY.gloss
      .map((c, i, a) => `<stop offset="${(i / (a.length - 1)).toFixed(3)}" stop-color="${c}"/>`)
      .join("");
  }

  // Rain gauge: clear collector ring, glossy black funnel and body, white base.
  _svgRain() {
    const u = this._uid();
    const CX = 62, BASE_BOT = 288;
    const RXc = 39, RYc = 9.75;                // clear collector, 126 mm across
    const RXb = 26.5, RYb = 6.5;               // black body, 68 % of the collector
    const TOTAL = RXc * 2 * 1.07;
    const TOP = BASE_BOT - TOTAL;
    const rimCY = TOP + RYc;
    const clearBot = TOP + TOTAL * 0.44;
    const bodyTop = clearBot - 3, bodyBot = TOP + TOTAL * 0.92;
    const funCY = clearBot - 2.5, funRX = RXc * 0.82, funRY = RYc * 0.82;

    const clear = `M ${CX - RXc} ${rimCY} L ${CX - RXc} ${clearBot} A ${RXc} ${RYc} 0 0 0 ${CX + RXc} ${clearBot} L ${CX + RXc} ${rimCY} Z`;
    const body = `M ${CX - RXb} ${bodyTop} L ${CX - RXb} ${bodyBot} A ${RXb} ${RYb} 0 0 0 ${CX + RXb} ${bodyBot} L ${CX + RXb} ${bodyTop} Z`;
    const base = `M ${CX - RXb - 1} ${bodyBot} L ${CX - RXb - 1} ${BASE_BOT} A ${RXb + 1} ${RYb} 0 0 0 ${CX + RXb + 1} ${BASE_BOT} L ${CX + RXb + 1} ${bodyBot} A ${RXb + 1} ${RYb} 0 0 1 ${CX - RXb - 1} ${bodyBot} Z`;

    return `
      <svg viewBox="0 ${TOP - 8} 124 ${BASE_BOT + 14 - TOP + 8}" xmlns="http://www.w3.org/2000/svg" role="img">
        <defs>
          <linearGradient id="nt-gloss-${u}" x1="0" y1="0" x2="1" y2="0">${this._glossStops()}</linearGradient>
          <linearGradient id="nt-glass-${u}" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stop-color="#ffffff" stop-opacity="0.55"/>
            <stop offset="0.18" stop-color="#ffffff" stop-opacity="0.08"/>
            <stop offset="0.72" stop-color="#ffffff" stop-opacity="0.10"/>
            <stop offset="0.9" stop-color="#ffffff" stop-opacity="0.5"/>
            <stop offset="1" stop-color="#ffffff" stop-opacity="0.2"/>
          </linearGradient>
          <linearGradient id="nt-funnel-${u}" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stop-color="#20242a"/>
            <stop offset="0.35" stop-color="#3c434e"/>
            <stop offset="0.6" stop-color="#2a2f37"/>
            <stop offset="1" stop-color="#15181d"/>
          </linearGradient>
          <linearGradient id="nt-base-${u}" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stop-color="#d3d7da"/>
            <stop offset="0.3" stop-color="#fbfcfc"/>
            <stop offset="0.62" stop-color="#eef0f1"/>
            <stop offset="1" stop-color="#cfd3d6"/>
          </linearGradient>
          <filter id="nt-blur-s-${u}" x="-60%" y="-60%" width="220%" height="220%">
            <feGaussianBlur stdDeviation="2.4"/>
          </filter>
        </defs>

        <ellipse cx="${CX}" cy="${BASE_BOT + 5}" rx="${RXb + 8}" ry="4" fill="#000" opacity="0.16" filter="url(#nt-blur-s-${u})"/>

        <path d="${clear}" fill="#dfe6ea" opacity="0.28"/>
        <ellipse cx="${CX}" cy="${rimCY}" rx="${RXc}" ry="${RYc}" fill="#c9d4da" opacity="0.22"/>

        <path d="${base}" fill="url(#nt-base-${u})"/>
        <path d="${base}" fill="none" stroke="#000" stroke-opacity="0.14" stroke-width="0.7"/>
        <path d="${body}" fill="url(#nt-gloss-${u})"/>
        <path d="${body}" fill="none" stroke="#000" stroke-opacity="0.25" stroke-width="0.7"/>

        <path d="M ${CX - funRX} ${funCY} A ${funRX} ${funRY} 0 0 0 ${CX + funRX} ${funCY} L ${CX + 2.5} ${funCY + 11} L ${CX - 2.5} ${funCY + 11} Z" fill="url(#nt-funnel-${u})"/>
        <ellipse cx="${CX}" cy="${funCY}" rx="${funRX}" ry="${funRY}" fill="url(#nt-funnel-${u})"/>
        <ellipse cx="${CX}" cy="${funCY}" rx="${funRX}" ry="${funRY}" fill="none" stroke="#7d858f" stroke-opacity="0.5" stroke-width="0.6"/>
        <ellipse cx="${CX}" cy="${funCY + 3.6}" rx="${funRX * 0.16}" ry="${funRY * 0.22}" fill="#0d0f12"/>
        <rect x="${CX - 0.55}" y="${funCY - 0.5}" width="1.1" height="4.6" rx="0.55" fill="#8b939d"/>

        <path d="${clear}" fill="url(#nt-glass-${u})"/>
        <path d="${clear}" fill="none" stroke="#ffffff" stroke-opacity="0.9" stroke-width="1.1"/>
        <path d="${clear}" fill="none" stroke="#5c666e" stroke-opacity="0.45" stroke-width="0.5"/>
        <ellipse cx="${CX}" cy="${rimCY}" rx="${RXc}" ry="${RYc}" fill="none" stroke="#ffffff" stroke-opacity="0.95" stroke-width="2"/>
        <ellipse cx="${CX}" cy="${rimCY}" rx="${RXc}" ry="${RYc}" fill="none" stroke="#7c868e" stroke-opacity="0.5" stroke-width="0.6"/>
        <ellipse cx="${CX}" cy="${rimCY + 2}" rx="${RXc - 2.6}" ry="${RYc - 1.6}" fill="none" stroke="#ffffff" stroke-opacity="0.5" stroke-width="0.9"/>
      </svg>`;
  }

  // Anemometer: two glossy black discs held apart by four posts, white top and base.
  _svgWind() {
    const u = this._uid();
    const CX = 62, BASE_BOT = 288, TOTAL = 95;
    const RX = 33, RY = 8.25;
    const TOP = BASE_BOT - TOTAL;
    const upCY = TOP + RY;
    const upBot = TOP + TOTAL * 0.458;
    const lowCY = TOP + TOTAL * 0.551;
    const lowBot = TOP + TOTAL * 0.916;

    const disc = (top, bot) => `M ${CX - RX} ${top} L ${CX - RX} ${bot} A ${RX} ${RY} 0 0 0 ${CX + RX} ${bot} L ${CX + RX} ${top} Z`;
    const base = `M ${CX - RX - 1} ${lowBot} L ${CX - RX - 1} ${BASE_BOT} A ${RX + 1} ${RY} 0 0 0 ${CX + RX + 1} ${BASE_BOT} L ${CX + RX + 1} ${lowBot} A ${RX + 1} ${RY} 0 0 1 ${CX - RX - 1} ${lowBot} Z`;

    let posts = "";
    for (const f of [-0.8, -0.35, 0.35, 0.8]) {
      const x = CX + RX * f;
      const w = 2.1 * (1 - Math.abs(f) * 0.25);
      posts += `<rect x="${(x - w / 2).toFixed(2)}" y="${upBot - 1}" width="${w.toFixed(2)}" height="${(lowCY - upBot + 2).toFixed(1)}" rx="${(w / 2).toFixed(2)}" fill="#eef1f2" stroke="#000" stroke-opacity="0.12" stroke-width="0.35"/>`;
    }

    return `
      <svg viewBox="0 ${TOP - 8} 124 ${BASE_BOT + 14 - TOP + 8}" xmlns="http://www.w3.org/2000/svg" role="img">
        <defs>
          <linearGradient id="nt-gloss-${u}" x1="0" y1="0" x2="1" y2="0">${this._glossStops()}</linearGradient>
          <linearGradient id="nt-base-${u}" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stop-color="#d3d7da"/>
            <stop offset="0.3" stop-color="#fbfcfc"/>
            <stop offset="0.62" stop-color="#eef0f1"/>
            <stop offset="1" stop-color="#cfd3d6"/>
          </linearGradient>
          <radialGradient id="nt-top-${u}" cx="0.4" cy="0.3" r="0.8">
            <stop offset="0" stop-color="#ffffff"/>
            <stop offset="0.65" stop-color="#f6f8f8"/>
            <stop offset="1" stop-color="#dde1e3"/>
          </radialGradient>
          <filter id="nt-blur-s-${u}" x="-60%" y="-60%" width="220%" height="220%">
            <feGaussianBlur stdDeviation="2.4"/>
          </filter>
        </defs>

        <ellipse cx="${CX}" cy="${BASE_BOT + 5}" rx="${RX + 8}" ry="4" fill="#000" opacity="0.16" filter="url(#nt-blur-s-${u})"/>

        <path d="${base}" fill="url(#nt-base-${u})"/>
        <path d="${base}" fill="none" stroke="#000" stroke-opacity="0.14" stroke-width="0.7"/>

        <path d="${disc(lowCY, lowBot)}" fill="url(#nt-gloss-${u})"/>
        <ellipse cx="${CX}" cy="${lowCY}" rx="${RX}" ry="${RY}" fill="url(#nt-top-${u})"/>
        <ellipse cx="${CX}" cy="${lowCY}" rx="${RX}" ry="${RY}" fill="none" stroke="#000" stroke-opacity="0.12" stroke-width="0.6"/>
        <path d="${disc(lowCY, lowBot)}" fill="none" stroke="#000" stroke-opacity="0.25" stroke-width="0.7"/>
        <ellipse cx="${CX}" cy="${lowCY - 1.5}" rx="8" ry="4" fill="#f2f5f6"/>
        <path d="M ${CX - 8} ${lowCY - 1.5} A 8 4 0 0 1 ${CX + 8} ${lowCY - 1.5} L ${CX + 2} ${lowCY - 7} L ${CX - 2} ${lowCY - 7} Z" fill="#e6eaec"/>

        ${posts}

        <path d="${disc(upCY, upBot)}" fill="url(#nt-gloss-${u})"/>
        <path d="${disc(upCY, upBot)}" fill="none" stroke="#000" stroke-opacity="0.25" stroke-width="0.7"/>
        <ellipse cx="${CX}" cy="${upCY}" rx="${RX}" ry="${RY}" fill="url(#nt-top-${u})"/>
        <ellipse cx="${CX}" cy="${upCY}" rx="${RX}" ry="${RY}" fill="none" stroke="#000" stroke-opacity="0.13" stroke-width="0.6"/>
        <path d="M ${CX - RX + 5} ${upCY - 3} A ${RX - 5} ${RY - 2.6} 0 0 1 ${CX + 2} ${upCY - 4.6}" fill="none" stroke="#fff" stroke-opacity="0.9" stroke-width="1.3" stroke-linecap="round"/>
        <ellipse cx="${CX}" cy="${upCY + RY * 0.52}" rx="1.6" ry="0.9" fill="#c4cacf"/>
      </svg>`;
  }

  // Drawn from the Netatmo product shots: matte anodised cylinder, one long recessed
  // groove on the front, translucent white base ring, white top that lights up.
  _svgCylinder() {
    const u = this._uid();
    const kind = this._kind();
    const shape = NT_SHAPE[kind] || NT_SHAPE.indoor;
    const outdoor = kind === "outdoor";
    const CX = 62, RX = 26, RY = 6.5;
    const BASE_BOT = 288, BASE_H = 10;
    const FOOT = BASE_BOT - BASE_H;                          // metal / white base seam
    const TOTAL = shape.ratio * RX * 2;                      // 45 mm across
    const TOP = BASE_BOT - TOTAL + RY;                       // centre of the top ellipse
    const H = FOOT - TOP;

    const slotY1 = TOP + H * shape.slot[0];
    const slotY2 = TOP + H * shape.slot[1];
    const slotX = CX + RX * 0.25, slotW = 4.2;               // sits right of centre: we see the front-right face
    const slotH = slotY2 - slotY1;                           // the groove is the light guide — this is what lights up

    const pal = NT_BODY[this._config.body_color];
    const stops = pal
      .map((c, i, a) => `<stop offset="${(i / (a.length - 1)).toFixed(3)}" stop-color="${c}"/>`)
      .join("");

    const body = `M ${CX - RX} ${TOP} L ${CX - RX} ${FOOT} A ${RX} ${RY} 0 0 0 ${CX + RX} ${FOOT} L ${CX + RX} ${TOP} Z`;
    const base = `M ${CX - RX} ${FOOT} L ${CX - RX} ${BASE_BOT} A ${RX} ${RY} 0 0 0 ${CX + RX} ${BASE_BOT} L ${CX + RX} ${FOOT} A ${RX} ${RY} 0 0 1 ${CX - RX} ${FOOT} Z`;

    // Crop to the module so the short outdoor one does not drag empty space into the card,
    // while the fixed viewBox width keeps both diameters identical.
    const vbTop = TOP - 24, vbH = BASE_BOT + 14 - vbTop;

    return `
      <svg viewBox="0 ${vbTop} 124 ${vbH}" xmlns="http://www.w3.org/2000/svg" role="img">
        <defs>
          <linearGradient id="nt-body-${u}" x1="0" y1="0" x2="1" y2="0">${stops}</linearGradient>
          <linearGradient id="nt-foot-${u}" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stop-color="#000000" stop-opacity="0"/>
            <stop offset="1" stop-color="#000000" stop-opacity="0.16"/>
          </linearGradient>
          <linearGradient id="nt-slot-${u}" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stop-color="${pal[0]}"/>
            <stop offset="0.4" stop-color="${pal[2]}"/>
            <stop offset="0.8" stop-color="${pal[3]}"/>
            <stop offset="1" stop-color="${pal[3]}"/>
          </linearGradient>
          <linearGradient id="nt-base-${u}" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stop-color="#d3d7da"/>
            <stop offset="0.3" stop-color="#fbfcfc"/>
            <stop offset="0.62" stop-color="#eef0f1"/>
            <stop offset="1" stop-color="#cfd3d6"/>
          </linearGradient>
          <radialGradient id="nt-cap-${u}" cx="0.4" cy="0.28" r="0.8">
            <stop offset="0" stop-color="#ffffff"/>
            <stop offset="0.6" stop-color="#f4f6f7"/>
            <stop offset="1" stop-color="#dde1e3"/>
          </radialGradient>
          <filter id="nt-blur-${u}" x="-80%" y="-80%" width="260%" height="260%">
            <feGaussianBlur stdDeviation="5"/>
          </filter>
          <filter id="nt-blur-s-${u}" x="-60%" y="-60%" width="220%" height="220%">
            <feGaussianBlur stdDeviation="2.4"/>
          </filter>
          <clipPath id="nt-clip-${u}"><path d="${body}"/></clipPath>
        </defs>

        <ellipse cx="${CX}" cy="${BASE_BOT + 6}" rx="${RX + 7}" ry="4.5" fill="#000" opacity="0.16" filter="url(#nt-blur-s-${u})"/>

        <path d="${base}" fill="url(#nt-base-${u})"/>
        <path d="${base}" fill="none" stroke="#000" stroke-opacity="0.14" stroke-width="0.7"/>
        ${outdoor ? `<rect x="${CX + 1}" y="${BASE_BOT - 1}" width="1.8" height="4" rx="0.9" fill="#e6e9ea" stroke="#000" stroke-opacity="0.18" stroke-width="0.5"/>` : ""}

        <path d="${body}" fill="url(#nt-body-${u})"/>
        <g clip-path="url(#nt-clip-${u})">
          <rect x="${CX - RX}" y="${FOOT - 26}" width="${RX * 2}" height="${26 + RY}" fill="url(#nt-foot-${u})"/>
        </g>
        <rect x="${(slotX - slotW / 2 - 0.7).toFixed(2)}" y="${(slotY1 - 0.7).toFixed(1)}" width="${slotW + 1.4}" height="${(slotH + 1.4).toFixed(1)}" rx="${(slotW / 2 + 0.7).toFixed(2)}" fill="#000" opacity="0.1"/>
        <rect x="${(slotX - slotW / 2).toFixed(2)}" y="${slotY1.toFixed(1)}" width="${slotW}" height="${slotH.toFixed(1)}" rx="${(slotW / 2).toFixed(2)}" fill="url(#nt-slot-${u})"/>
        <rect x="${(slotX - slotW / 2).toFixed(2)}" y="${slotY1.toFixed(1)}" width="1.5" height="${slotH.toFixed(1)}" rx="0.75" fill="#000" opacity="0.34"/>

        <g class="nt-halo">
          <rect x="${(slotX - slotW / 2 - 3.5).toFixed(2)}" y="${(slotY1 - 3.5).toFixed(1)}" width="${slotW + 7}" height="${(slotH + 7).toFixed(1)}" rx="${(slotW / 2 + 3.5).toFixed(2)}" filter="url(#nt-blur-${u})"/>
        </g>
        <rect class="nt-lens" x="${(slotX - slotW / 2 + 0.45).toFixed(2)}" y="${(slotY1 + 0.45).toFixed(1)}" width="${slotW - 0.9}" height="${(slotH - 0.9).toFixed(1)}" rx="${(slotW / 2 - 0.45).toFixed(2)}"/>

        <path d="${body}" fill="none" stroke="#000" stroke-opacity="0.18" stroke-width="0.7"/>

        <ellipse cx="${CX}" cy="${TOP}" rx="${RX}" ry="${RY}" fill="url(#nt-cap-${u})"/>
        <ellipse cx="${CX}" cy="${TOP}" rx="${RX - 3.4}" ry="${RY - 1}" fill="none" stroke="#000" stroke-opacity="0.09" stroke-width="0.6"/>
        <path d="M ${CX - RX} ${TOP} A ${RX} ${RY} 0 0 0 ${CX + RX} ${TOP}" fill="none" stroke="#000" stroke-opacity="0.13" stroke-width="0.7"/>
        <path d="M ${CX - RX + 5} ${TOP - 3} A ${RX - 5} ${RY - 2.6} 0 0 1 ${CX + 2} ${TOP - 4.6}" fill="none" stroke="#fff" stroke-opacity="0.85" stroke-width="1.3" stroke-linecap="round"/>
      </svg>`;
  }

  _build() {
    this.innerHTML = "";
    const c = this._config;
    const card = document.createElement("ha-card");
    card.style.setProperty("--nt-accent", c.accent_color);
    card.style.setProperty("--nt-cursor", c.clickable === false ? "default" : "pointer");
    this._card = card;

    const kindNow = this._kind();
    const allowed = NT_FIELDS[kindNow].filter(
      (k) => !(kindNow === "outdoor" && k === "wind_direction_entity"));
    const rows = NT_METRICS.filter((m) => c[m.cfg] && allowed.includes(m.cfg)).map((m) => `
      <div class="nt-row" id="nt-row-${m.key}" data-entity="${c[m.cfg]}">
        <ha-icon icon="${m.icon}" id="nt-ico-${m.key}"></ha-icon>
        <span class="nt-rv" id="nt-val-${m.key}">—</span>
      </div>`).join("");

    card.innerHTML = `
      <style>
        .nt-wrap { display: flex; align-items: stretch; gap: 10px; padding: 12px 16px 14px;
          cursor: var(--nt-cursor, pointer); }
        .nt-wrap.nt-corners { padding-top: 32px; }
        .nt-mod { flex: none; width: 92px; }
        .nt-mod svg { display: block; width: 100%; height: auto; overflow: visible; }
        .nt-info { flex: 1; min-width: 0; display: flex; flex-direction: column; justify-content: center; }
        .nt-name { font-size: 1em; font-weight: 500; color: var(--primary-text-color);
          overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
        .nt-main { display: flex; align-items: baseline; gap: 3px; }
        .nt-value { font-size: 2.1em; font-weight: 700; color: var(--primary-text-color); line-height: 1.2; }
        .nt-unit { font-size: 1em; font-weight: 400; color: var(--secondary-text-color); }
        .nt-trend { font-size: 0.95em; color: var(--secondary-text-color); margin-left: 2px;
          display: inline-flex; align-items: center; }
        .nt-trend svg { display: block; }
        .nt-label { font-size: 0.85em; color: var(--secondary-text-color); }
        .nt-rows { display: grid; grid-template-columns: repeat(auto-fit, minmax(86px, 1fr));
          gap: 4px 8px; margin-top: 10px; }
        .nt-row[hidden] { display: none !important; }
        .nt-row { display: grid; grid-template-columns: 18px minmax(0, 1fr);
          align-items: center; column-gap: 6px; min-width: 0; }
        .nt-row ha-icon { display: flex; align-items: center; justify-content: center;
          width: 18px; height: 18px; --mdc-icon-size: 18px; line-height: 0;
          color: var(--nt-row-color, var(--secondary-text-color)); }
        .nt-rv { font-size: 0.88em; line-height: 18px; color: var(--primary-text-color);
          overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
        .nt-weather { flex: none; width: 50px; display: flex; align-items: center; justify-content: center; }
        .nt-weather[hidden] { display: none !important; }
        .nt-weather ha-icon { --mdc-icon-size: 40px; width: 40px; height: 40px;
          color: var(--nt-wx-color, var(--secondary-text-color)); }
        .nt-halo > * { fill: var(--nt-glow, transparent); opacity: var(--nt-glow-op, 0); transition: opacity 0.6s; }
        .nt-lens { fill: var(--nt-glow, transparent); opacity: var(--nt-lens-op, 0); transition: opacity 0.6s; }
        .nt-unavailable .nt-mod, .nt-unavailable .nt-value { opacity: 0.4; }
        .nt-hist-toggle { display: flex; align-items: center; justify-content: center; gap: 6px;
          padding: 2px 0 10px; cursor: pointer; color: var(--secondary-text-color);
          font-size: 0.85em; user-select: none; }
        .nt-hist-toggle svg { transition: transform 0.3s; }
        .nt-hist-toggle.nt-open svg { transform: rotate(180deg); }
        .nt-hist { overflow: hidden; max-height: 0; transition: max-height 0.35s ease; padding: 0 16px; }
        .nt-hist.nt-open { max-height: 220px; padding-bottom: 14px; }
        .nt-hist-status { text-align: center; color: var(--secondary-text-color); font-size: 0.85em; padding: 10px 0; }
        .nt-hist-grid { stroke: var(--divider-color, #e0e0e0); stroke-width: 1; }
        .nt-hist-axis { font-size: 10px; fill: var(--secondary-text-color); }
        .nt-hist-line { fill: none; stroke: var(--nt-accent); stroke-width: 2; stroke-linejoin: round; stroke-linecap: round; }
        .nt-hist-area { fill: var(--nt-accent); opacity: 0.14; }
        ha-card { position: relative; }
        .nt-corner { position: absolute; top: 10px; display: flex; align-items: center; gap: 5px;
          font-size: 0.9em; color: var(--secondary-text-color); z-index: 2; }
        .nt-corner[hidden] { display: none !important; }
        .nt-batt { right: 12px; }
        .nt-conn { left: 12px; }
        .nt-conn.nt-off { color: var(--error-color, #db4437); }
      </style>
      <div class="nt-corner nt-conn" id="nt-conn" hidden>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round">
          <path d="M3.5 9.5 A 12 12 0 0 1 20.5 9.5"/>
          <path d="M6.5 12.7 A 8 8 0 0 1 17.5 12.7"/>
          <path d="M9.4 15.8 A 4.2 4.2 0 0 1 14.6 15.8"/>
          <circle cx="12" cy="18.6" r="1.5" fill="currentColor" stroke="none"/>
          <line id="nt-conn-off" x1="4" y1="3.5" x2="20.5" y2="20" style="display:none;"/>
        </svg>
      </div>
      <div class="nt-corner nt-batt" id="nt-batt" hidden>
        <svg width="28" height="16" viewBox="0 0 24 14">
          <rect x="1" y="2" width="19" height="10" rx="2" fill="none" stroke="currentColor" stroke-width="1.6"/>
          <rect x="21" y="5" width="2.4" height="4" rx="1" fill="currentColor"/>
          <rect id="nt-batt-fill" x="3" y="4" width="15" height="6" rx="1" fill="currentColor"/>
        </svg>
        <span id="nt-batt-pct"></span>
      </div>
      <div class="nt-wrap" id="nt-wrap">
        ${c.show_module === false ? "" : `<div class="nt-mod">${this._moduleSvg()}</div>`}
        <div class="nt-info">
          <div class="nt-name" id="nt-name"></div>
          <div class="nt-main">
            <span class="nt-value" id="nt-value">—</span><span class="nt-unit" id="nt-unit"></span>
            <span class="nt-trend" id="nt-trend"></span>
          </div>
          <div class="nt-label" id="nt-label"></div>
          <div class="nt-rows">${rows}</div>
        </div>
        <div class="nt-weather" id="nt-weather" hidden></div>
      </div>
      ${c.show_history ? `
      <div class="nt-hist-toggle" id="nt-hist-toggle">
        <svg width="15" height="15" viewBox="0 0 24 24"><path d="M7 10l5 5 5-5" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
        <span id="nt-hist-label"></span>
      </div>
      <div class="nt-hist" id="nt-hist"><div id="nt-hist-body"></div></div>` : ""}
    `;
    this.appendChild(card);

    this._el = {};
    const ids = ["nt-wrap", "nt-name", "nt-value", "nt-unit", "nt-trend", "nt-label", "nt-hist-toggle", "nt-weather",
      "nt-hist", "nt-hist-label", "nt-hist-body", "nt-conn", "nt-conn-off", "nt-batt", "nt-batt-fill", "nt-batt-pct"];
    for (const m of NT_METRICS) ids.push("nt-row-" + m.key, "nt-val-" + m.key, "nt-ico-" + m.key);
    for (const id of ids) this._el[id] = card.querySelector("#" + id);

    if (c.clickable !== false) {
      this._el["nt-wrap"].addEventListener("click", () => this._moreInfo(this._config.entity));
      this._el["nt-weather"].style.cursor = "pointer";
      this._el["nt-weather"].addEventListener("click", (e) => {
        e.stopPropagation();
        this._moreInfo(this._config.weather_entity);
      });
      for (const m of NT_METRICS) {
        const row = this._el["nt-row-" + m.key];
        if (!row) continue;
        row.style.cursor = "pointer";
        row.addEventListener("click", (e) => { e.stopPropagation(); this._moreInfo(row.dataset.entity); });
      }
    }
    if (this._el["nt-hist-toggle"]) {
      this._el["nt-hist-toggle"].addEventListener("click", (e) => { e.stopPropagation(); this._toggleHist(); });
    }
  }

  _moreInfo(entityId) {
    if (!entityId) return;
    this.dispatchEvent(new CustomEvent("hass-more-info", {
      detail: { entityId }, bubbles: true, composed: true,
    }));
  }

  _num(entityId) {
    const st = entityId && this._hass.states[entityId];
    if (!st) return NaN;
    const n = parseFloat(st.state);
    return isNaN(n) ? NaN : n;
  }

  // Cold blue below temp_cold, hot red above temp_hot, ordinary text in between. Thresholds
  // are in the entity's own unit, so it works in °F too.
  _valueColor(value) {
    const c = this._config;
    if (c.color_temperature !== true) return "";
    if (NT_MAIN[this._kind()].device_class !== "temperature") return "";
    if (value <= c.temp_cold) return "#3d84e0";
    if (value >= c.temp_hot) return "#e0503a";
    return "";
  }

  // Only the indoor station has a light guide behind the groove — the outdoor module has no LED.
  _glowColor() {
    const c = this._config;
    const kind = this._kind();
    if (c.show_glow === false || (kind !== "indoor" && kind !== "indoor_extra")) return null;
    const co2 = this._num(c.co2_entity);
    if (isNaN(co2)) return null;
    if (co2 < c.co2_good) return "#3ec46d";
    if (co2 < c.co2_bad) return "#f0a025";
    return "#e0503a";
  }

  _update() {
    if (!this._hass || !this._built) return;
    const c = this._config;
    const t = ntT(this._hass, c);
    const st = this._hass.states[c.entity];
    const wrap = this._el["nt-wrap"];

    this._el["nt-name"].textContent = c.name || (st && st.attributes.friendly_name) || c.entity || "";
    this._el["nt-label"].textContent = c.label || "";
    if (this._el["nt-hist-label"]) {
      this._el["nt-hist-label"].textContent = t.hist;
      if (this._histOpen && this._histAt && Date.now() - this._histAt > 600000) this._loadHist();
    }

    const value = st ? parseFloat(st.state) : NaN;
    if (isNaN(value)) {
      wrap.classList.add("nt-unavailable");
      this._el["nt-value"].textContent = "—";
      this._el["nt-unit"].textContent = "";
      this._el["nt-value"].style.color = "";
      if (!c.label) this._el["nt-label"].textContent = t.unavailable;
    } else {
      wrap.classList.remove("nt-unavailable");
      this._el["nt-value"].textContent = ntFmt(value, c.decimals);
      this._el["nt-unit"].textContent = st.attributes.unit_of_measurement || "";
      this._el["nt-value"].style.color = this._valueColor(value);
    }

    const slot = this._el["nt-trend"];
    if (this._kind() === "wind") {
      // The angle is where the wind comes from, so the arrow points the other way.
      const a = ntWindAngle(this._hass.states[c.wind_direction_entity]);
      slot.innerHTML = isNaN(a) ? "" :
        `<svg width="15" height="15" viewBox="0 0 24 24" style="transform:rotate(${((a + 180) % 360).toFixed(0)}deg);">
           <path d="M12 3 L18.5 20.5 L12 16.2 L5.5 20.5 Z" fill="currentColor"/></svg>`;
      slot.title = isNaN(a) ? "" : t.windFrom + " " + Math.round(a) + "°";
    } else {
      const tr = c.trend_entity && this._hass.states[c.trend_entity];
      const trs = tr ? String(tr.state).toLowerCase() : "";
      slot.textContent = trs === "up" ? "▲" : trs === "down" ? "▼" : "";
      slot.title = tr ? (tr.attributes.friendly_name || c.trend_entity) + " : " + tr.state : "";
    }

    this._updateRows(t);
    this._updateWeather();
    this._updateGlow();
    this._updateCorners();
  }

  // Rewritten only when the condition actually changes, so the icon is never torn out
  // from under a click.
  _updateWeather() {
    const c = this._config;
    const el = this._el["nt-weather"];
    const st = c.weather_entity && this._hass.states[c.weather_entity];
    if (!st) { el.hidden = true; this._wxKey = null; return; }
    el.hidden = false;
    const cond = String(st.state);
    const mdi = `<ha-icon icon="${NT_WEATHER_MDI[cond] || "mdi:weather-cloudy"}"></ha-icon>`;
    const key = (c.weather_icons === "mdi" ? "mdi:" : "drawn:") + cond;
    if (this._wxKey !== key) {
      this._wxKey = key;
      el.innerHTML = c.weather_icons === "mdi" ? mdi : (ntWeatherSvg(cond, this._uid()) || mdi);
    }
    el.title = this._condLabel(st);
  }

  // Home Assistant already translates weather states, so borrow its wording when we can.
  _condLabel(st) {
    if (this._hass.formatEntityState) {
      try { return this._hass.formatEntityState(st); } catch (e) { /* older frontend */ }
    }
    return st.state;
  }

  _updateRows(t) {
    const c = this._config;
    for (const m of NT_METRICS) {
      const row = this._el["nt-row-" + m.key];
      if (!row) continue;
      const st = this._hass.states[c[m.cfg]];
      const n = st ? parseFloat(st.state) : NaN;
      const unit = st ? st.attributes.unit_of_measurement || "" : "";
      let txt;
      if (m.key === "wind_dir") {
        const a = ntWindAngle(st);
        txt = isNaN(a) ? "—"
          : (isNaN(n) ? "" : Math.round(a) + "° ") + t.dirs[Math.round(a / 45) % 8];
      } else if (m.key === "wind") {
        // Direction sits in front of the speed rather than in a tile of its own. That makes
        // the line long, so it takes the whole row instead of being clipped in half a column.
        const a = ntWindAngle(this._hass.states[c.wind_direction_entity]);
        const card = isNaN(a) ? "" : t.dirs[Math.round(a / 45) % 8] + " ";
        row.style.gridColumn = card ? "1 / -1" : "";
        txt = isNaN(n) ? "—" : card + ntFmt(n, m.dec, m.group) + (unit ? " " + unit : "");
      } else {
        txt = isNaN(n) ? "—" : ntFmt(n, m.dec, m.group) + (unit ? " " + unit : "");
      }
      this._el["nt-val-" + m.key].textContent = txt;
      // No rain announced, no tile.
      if (m.key === "rain_forecast") row.hidden = !(n > 0);
      let color = "";
      let hint = "";
      if (m.key === "co2" && !isNaN(n)) {
        color = n < c.co2_good ? "var(--success-color, #43a047)"
          : n < c.co2_bad ? "var(--warning-color, #f0a025)" : "var(--error-color, #db4437)";
        hint = " — " + (n < c.co2_good ? t.airGood : n < c.co2_bad ? t.airFair : t.airPoor);
      } else if (m.key === "humidity" && !isNaN(n)) {
        color = n < 30 || n > 70 ? "var(--warning-color, #f0a025)" : "";
      } else if (m.key === "noise" && !isNaN(n)) {
        color = n >= 70 ? "var(--error-color, #db4437)" : n >= 55 ? "var(--warning-color, #f0a025)" : "";
      }
      row.style.setProperty("--nt-row-color", color || "var(--secondary-text-color)");
      row.title = (st ? st.attributes.friendly_name || c[m.cfg] : c[m.cfg]) + hint;
    }
  }

  _updateGlow() {
    const col = this._glowColor();
    this._card.style.setProperty("--nt-glow", col || "transparent");
    this._card.style.setProperty("--nt-glow-op", col ? "0.55" : "0");
    this._card.style.setProperty("--nt-lens-op", col ? "1" : "0");
  }

  _updateCorners() {
    const c = this._config;
    const conn = this._el["nt-conn"];
    const cst = c.connectivity_entity && this._hass.states[c.connectivity_entity];
    if (cst) {
      conn.hidden = false;
      const stt = String(cst.state).toLowerCase();
      const ok = !["off", "unavailable", "unknown", "disconnected", "not_home", "none"].includes(stt);
      conn.classList.toggle("nt-off", !ok);
      this._el["nt-conn-off"].style.display = ok ? "none" : "";
      conn.title = (cst.attributes.friendly_name || c.connectivity_entity) + " : " + cst.state;
    } else {
      conn.hidden = true;
    }
    const batt = this._el["nt-batt"];
    const bst = c.battery_entity && this._hass.states[c.battery_entity];
    const lvl = bst ? parseFloat(bst.state) : NaN;
    if (bst && !isNaN(lvl)) {
      batt.hidden = false;
      this._el["nt-batt-pct"].textContent = Math.round(lvl) + "%";
      const fill = this._el["nt-batt-fill"];
      fill.setAttribute("width", Math.max(0.8, (15 * Math.max(0, Math.min(100, lvl))) / 100).toFixed(1));
      fill.setAttribute("fill", lvl <= 15 ? "var(--error-color, #db4437)"
        : lvl <= 40 ? "var(--warning-color, #f0a025)" : "var(--success-color, #43a047)");
      batt.title = (bst.attributes.friendly_name || c.battery_entity) + " : " + Math.round(lvl) + "%";
    } else {
      batt.hidden = true;
    }
    this._el["nt-wrap"].classList.toggle("nt-corners", !conn.hidden || !batt.hidden);
  }

  _toggleHist() {
    this._histOpen = !this._histOpen;
    this._el["nt-hist-toggle"].classList.toggle("nt-open", this._histOpen);
    this._el["nt-hist"].classList.toggle("nt-open", this._histOpen);
    if (this._histOpen && (!this._histAt || Date.now() - this._histAt > 300000)) this._loadHist();
  }

  async _loadHist() {
    const t = ntT(this._hass, this._config);
    const body = this._el["nt-hist-body"];
    const entity = this._config.history_entity || this._config.entity;
    if (!body.innerHTML) body.innerHTML = `<div class="nt-hist-status">…</div>`;
    try {
      const start = new Date(Date.now() - 24 * 3600 * 1000).toISOString();
      const url = `history/period/${start}?filter_entity_id=${entity}&minimal_response&no_attributes`;
      const res = await this._hass.callApi("GET", url);
      const pts = ((res && res[0]) || [])
        .map((s) => ({ t: new Date(s.last_changed || s.last_updated).getTime(), v: parseFloat(s.state) }))
        .filter((p) => !isNaN(p.v) && !isNaN(p.t));
      this._histAt = Date.now();
      body.innerHTML = pts.length > 1 ? this._histSvg(pts, entity) : `<div class="nt-hist-status">${t.noData}</div>`;
    } catch (e) {
      body.innerHTML = `<div class="nt-hist-status">${t.noData}</div>`;
    }
  }

  _histSvg(pts, entity) {
    const W = 480, H = 150, L = 38, R = 8, T = 12, B = 20;
    const end = Date.now(), start = end - 24 * 3600 * 1000;
    const inWin = pts.filter((p) => p.t >= start);
    if (inWin.length < 2) return `<div class="nt-hist-status">${ntT(this._hass, this._config).noData}</div>`;
    const vals = inWin.map((p) => p.v);
    let lo = Math.min(...vals), hi = Math.max(...vals);
    if (hi - lo < 1e-6) { hi += 0.5; lo -= 0.5; }
    const pad = (hi - lo) * 0.12;
    lo -= pad; hi += pad;
    const x = (tt) => L + Math.max(0, Math.min(1, (tt - start) / (end - start))) * (W - L - R);
    const y = (v) => T + (1 - (v - lo) / (hi - lo)) * (H - T - B);
    const dec = Math.abs(hi - lo) < 12 ? 1 : 0;

    let grid = "";
    for (const f of [0, 0.5, 1]) {
      const gy = y(lo + (hi - lo) * f).toFixed(1);
      grid += `<line class="nt-hist-grid" x1="${L}" y1="${gy}" x2="${W - R}" y2="${gy}"/>`;
      grid += `<text class="nt-hist-axis" x="${L - 4}" y="${(+gy + 3.5).toFixed(1)}" text-anchor="end">${ntFmt(lo + (hi - lo) * f, dec)}</text>`;
    }
    for (let k = 0; k <= 4; k++) {
      const tk = start + (k / 4) * 24 * 3600 * 1000;
      const tx = (L + (k / 4) * (W - L - R)).toFixed(1);
      grid += `<text class="nt-hist-axis" x="${tx}" y="${H - 6}" text-anchor="${k === 0 ? "start" : k === 4 ? "end" : "middle"}">${new Date(tk).getHours()}h</text>`;
    }

    const d = inWin.map((p, i) => `${i ? "L" : "M"}${x(p.t).toFixed(1)} ${y(p.v).toFixed(1)}`).join(" ");
    const area = `${d} L${x(inWin[inWin.length - 1].t).toFixed(1)} ${y(lo).toFixed(1)} L${x(inWin[0].t).toFixed(1)} ${y(lo).toFixed(1)} Z`;
    const unit = (this._hass.states[entity] && this._hass.states[entity].attributes.unit_of_measurement) || "";
    const title = `${ntFmt(Math.min(...inWin.map((p) => p.v)), dec)} → ${ntFmt(Math.max(...inWin.map((p) => p.v)), dec)} ${unit}`;

    return `<svg viewBox="0 0 ${W} ${H}" style="display:block;width:100%;height:auto;" xmlns="http://www.w3.org/2000/svg">
      <title>${title}</title>${grid}
      <path class="nt-hist-area" d="${area}"/>
      <path class="nt-hist-line" d="${d}"/>
    </svg>`;
  }
}

class NetatmoCardEditor extends HTMLElement {
  setConfig(config) { this._config = { ...config }; this._render(); }

  // Only render on the first hass and on config changes. Re-rendering on every state
  // update reassigns the form schema and closes any dropdown the user has open.
  set hass(hass) {
    const first = !this._hass;
    this._hass = hass;
    if (this._form) this._form.hass = hass;
    if (first) this._render();
  }

  _render() {
    if (!this._hass || !this._config) return;
    const c = this._config;
    const t = ntT(this._hass, c);

    if (!this._form) {
      this.innerHTML = "";
      this._form = document.createElement("ha-form");
      this._form.computeLabel = (s) => s.label || s.name;
      this._form.addEventListener("value-changed", (ev) => {
        const v = ev.detail.value;
        const kind = NT_FIELDS[v.module_type] ? v.module_type : "indoor";
        const out = { type: "custom:netatmo-card", module_type: kind };
        // A temperature sensor cannot be the main reading of a rain gauge.
        const mainSt = v.entity && this._hass.states[v.entity];
        const wanted = NT_MAIN[kind].device_class;
        if (v.entity && (!mainSt || mainSt.attributes.device_class === wanted)) out.entity = v.entity;
        if (v.name) out.name = v.name;
        if (v.label) out.label = v.label;
        // Switching module type drops the readings the other one does not have. Pointing the
        // card at another module drops the readings that belong to the old one, otherwise a
        // sub-module keeps showing its parent station's humidity, CO2 and so on.
        const moved = out.entity && out.entity !== (this._config && this._config.entity);
        const fresh = moved ? ntResolve(this._hass, out.entity, kind) : null;
        for (const k of NT_FIELDS[kind]) {
          let val = v[k];
          if (moved && val && !ntSameDevice(this._hass, out.entity, val)) val = fresh[k] || "";
          if (val) out[k] = val;
        }
        if (v.decimals != null && v.decimals !== "" && parseInt(v.decimals, 10) !== NT_MAIN[kind].dec) {
          out.decimals = parseInt(v.decimals, 10);
        }
        if (NT_SHAPE[kind] && v.body_color && v.body_color !== "aluminium") out.body_color = v.body_color;
        if (kind === "indoor") {
          if (v.show_glow === false) out.show_glow = false;
          if (v.co2_good != null && v.co2_good !== "" && parseFloat(v.co2_good) !== 1000) out.co2_good = parseFloat(v.co2_good);
          if (v.co2_bad != null && v.co2_bad !== "" && parseFloat(v.co2_bad) !== 2000) out.co2_bad = parseFloat(v.co2_bad);
        }
        if (v.clickable === false) out.clickable = false;
        if (v.show_module === false) out.show_module = false;
        if (v.weather_entity) {
          out.weather_entity = v.weather_entity;
          if (v.weather_icons === "mdi") out.weather_icons = "mdi";
        }
        if (NT_MAIN[kind].device_class === "temperature" && v.color_temperature === true) {
          out.color_temperature = true;
          if (v.temp_cold != null && v.temp_cold !== "" && parseFloat(v.temp_cold) !== 15) out.temp_cold = parseFloat(v.temp_cold);
          if (v.temp_hot != null && v.temp_hot !== "" && parseFloat(v.temp_hot) !== 30) out.temp_hot = parseFloat(v.temp_hot);
        }
        if (v.accent_color && v.accent_color !== "#2f8fd0") out.accent_color = v.accent_color;
        if (v.show_history) out.show_history = true;
        if (v.history_entity) out.history_entity = v.history_entity;
        if (v.language) out.language = v.language;
        this._config = out;
        this._fillStatus = null;
        this._render();
        this.dispatchEvent(new CustomEvent("config-changed", { detail: { config: out }, bubbles: true, composed: true }));
      });
      this.appendChild(this._form);
    }

    this._form.hass = this._hass;
    const data = {
      entity: c.entity || "",
      module_type: NT_FIELDS[c.module_type] ? c.module_type : "indoor",
      name: c.name || "",
      label: c.label || "",
      humidity_entity: c.humidity_entity || "",
      co2_entity: c.co2_entity || "",
      noise_entity: c.noise_entity || "",
      pressure_entity: c.pressure_entity || "",
      trend_entity: c.trend_entity || "",
      battery_entity: c.battery_entity || "",
      connectivity_entity: c.connectivity_entity || "",
      decimals: c.decimals != null ? c.decimals
        : NT_MAIN[NT_FIELDS[c.module_type] ? c.module_type : "indoor"].dec,
      body_color: c.body_color || "aluminium",
      show_glow: c.show_glow !== false,
      accent_color: c.accent_color || "#2f8fd0",
      clickable: c.clickable !== false,
      show_module: c.show_module !== false,
      weather_entity: c.weather_entity || "",
      weather_icons: c.weather_icons === "mdi" ? "mdi" : "drawn",
      color_temperature: c.color_temperature === true,
      temp_cold: c.temp_cold != null ? c.temp_cold : 15,
      temp_hot: c.temp_hot != null ? c.temp_hot : 30,
      co2_good: c.co2_good != null ? c.co2_good : 1000,
      co2_bad: c.co2_bad != null ? c.co2_bad : 2000,
      show_history: c.show_history === true,
      history_entity: c.history_entity || "",
      language: c.language || "",
    };
    this._form.data = data;
    const kind = data.module_type;
    const dev = ntDeviceFields(this._hass, c.entity, kind);
    // A field is offered when the module type has it AND the device exposes it
    // (or it is already set, so it stays clearable).
    const has = (k) => NT_FIELDS[kind].includes(k) &&
      (NT_EXTERNAL.has(k) || !!c[k] || !dev || dev.has(k));
    const labels = ntFieldLabels(t);
    // The 24 h chart can only plot a reading this card already shows.
    const charted = [c.entity].concat(NT_FIELDS[kind].map((k) => c[k])).filter(Boolean);

    const mainLabel = kind === "rain" ? t.entRain : kind === "wind" ? t.entWind : t.entity;
    this._form.schema = [
      { name: "module_type", label: t.modType, selector: { select: { mode: "dropdown", options: [
        { value: "indoor", label: t.mtIndoor },
        { value: "indoor_extra", label: t.mtIndoorExtra },
        { value: "outdoor", label: t.mtOutdoor },
        { value: "rain", label: t.mtRain },
        { value: "wind", label: t.mtWind },
      ] } } },
      { name: "entity", label: mainLabel,
        selector: { entity: { domain: "sensor", device_class: NT_MAIN[kind].device_class } } },
      { name: "name", label: t.name, selector: { text: {} } },
      { name: "label", label: t.label, selector: { text: {} } },
      ...NT_FIELDS[kind].filter(has).map((k) => ({ name: k, label: labels[k], selector: NT_SELECTOR[k] })),
      { name: "decimals", label: t.decimals, selector: { number: { mode: "box", step: 1, min: 0, max: 3 } } },
      { name: "show_module", label: t.showModule, selector: { boolean: {} } },
      { name: "weather_entity", label: t.weatherEnt, selector: { entity: { domain: "weather" } } },
      ...(c.weather_entity ? [
        { name: "weather_icons", label: t.weatherIcons, selector: { select: { mode: "dropdown", options: [
          { value: "drawn", label: t.wiDrawn },
          { value: "mdi", label: t.wiMdi },
        ] } } },
      ] : []),
      ...(NT_SHAPE[kind] ? [
        { name: "body_color", label: t.body, selector: { select: { mode: "dropdown", options: [
          { value: "aluminium", label: t.bodyAlu },
          { value: "sand", label: t.bodySand },
          { value: "mint", label: t.bodyMint },
          { value: "graphite", label: t.bodyGraphite },
        ] } } },
      ] : []),
      ...(has("co2_entity") ? [
        { name: "show_glow", label: t.glow, selector: { boolean: {} } },
        { name: "co2_good", label: t.co2Good, selector: { number: { mode: "box", step: 50, min: 0 } } },
        { name: "co2_bad", label: t.co2Bad, selector: { number: { mode: "box", step: 50, min: 0 } } },
      ] : []),
      ...(NT_MAIN[kind].device_class === "temperature" ? [
        { name: "color_temperature", label: t.colorTemp, selector: { boolean: {} } },
      ].concat(c.color_temperature === true ? [
        { name: "temp_cold", label: t.tempCold, selector: { number: { mode: "box", step: "any" } } },
        { name: "temp_hot", label: t.tempHot, selector: { number: { mode: "box", step: "any" } } },
      ] : []) : []),
      { name: "clickable", label: t.clickOpt, selector: { boolean: {} } },
      { name: "accent_color", label: t.accent, selector: { text: {} } },
      { name: "show_history", label: t.histOpt, selector: { boolean: {} } },
      { name: "history_entity", label: t.histEnt, selector: { entity: { include_entities: charted } } },
      { name: "language", label: t.language, selector: { select: { mode: "dropdown", options:
        [{ value: "", label: t.auto }].concat(Object.keys(NT_LANGNAMES).map((l) => ({ value: l, label: NT_LANGNAMES[l] }))) } } },
    ];
    this._renderFillBox(t);
  }

  _renderFillBox(t) {
    if (!this._fillBox) {
      this._fillBox = document.createElement("div");
      this._fillBox.style.cssText = "margin-bottom:12px;padding:12px 14px;border:1px solid var(--divider-color);border-radius:8px;font-size:0.9em;color:var(--secondary-text-color);";
      this.insertBefore(this._fillBox, this._form || null);
    }
    const found = this._config.entity ? ntAutofill(this._hass, this._config) : {};
    const keys = Object.keys(found);
    const status = this._fillStatus;
    if (!keys.length && !status) { this._fillBox.hidden = true; return; }
    this._fillBox.hidden = false;
    let html = "";
    if (keys.length) html += `<div style="margin-bottom:8px;">🌡️ ${t.fillTitle}</div>`;
    if (status) {
      html += `<div style="margin-bottom:4px;color:var(--success-color, #0f9d58);">${ntEsc(status.title)}</div>`;
      if (status.lines.length) {
        html += `<ul style="margin:0 0 8px;padding-left:18px;">` +
          status.lines.map((l) => `<li>${ntEsc(l)}</li>`).join("") + `</ul>`;
      }
    }
    if (keys.length) {
      html += `<button id="nt-fill" style="cursor:pointer;padding:8px 14px;border:none;border-radius:6px;background:var(--primary-color);color:var(--text-primary-color, #fff);font:inherit;">${t.fillBtn}</button>`;
    }
    this._fillBox.innerHTML = html;
    const btn = this._fillBox.querySelector("#nt-fill");
    if (btn) btn.addEventListener("click", () => this._fill(t, found));
  }

  _fill(t, found) {
    const keys = Object.keys(found);
    if (!keys.length) { this._fillStatus = { title: t.fillNone, lines: [] }; this._renderFillBox(t); return; }
    this._config = { ...this._config, ...found };
    // List every reading that now comes from this device, not only the ones this click
    // added: the others were resolved earlier and leaving them out reads like they are missing.
    const c = this._config;
    const kind = NT_FIELDS[c.module_type] ? c.module_type : "indoor";
    const labels = ntFieldLabels(t);
    const lines = NT_FIELDS[kind]
      .filter((k) => c[k] && ntSameDevice(this._hass, c.entity, c[k]))
      .map((k) => labels[k] + " : " + c[k]);
    this._fillStatus = { title: t.filled, lines: lines };
    this._render();
    this.dispatchEvent(new CustomEvent("config-changed", { detail: { config: this._config }, bubbles: true, composed: true }));
  }
}

customElements.define("netatmo-card", NetatmoCard);
customElements.define("netatmo-card-editor", NetatmoCardEditor);

window.customCards = window.customCards || [];
window.customCards.push({
  type: "netatmo-card",
  name: "Netatmo Card",
  description: "The Netatmo indoor and outdoor weather modules drawn as they look, with their readings alongside and the front groove lighting up with air quality.",
  preview: true,
  documentationURL: "https://github.com/ADNPolymerase/ha-netatmo-card",
});
