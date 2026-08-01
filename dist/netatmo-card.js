const CARD_VERSION = "0.1.0";

console.info(
  "%c NETATMO-CARD %c v" + CARD_VERSION + " ",
  "color:white;background:#2f7fb8;font-weight:700;",
  "color:#2f7fb8;background:white;font-weight:700;"
);

const NT_LANGNAMES = { en: "English", fr: "Français", de: "Deutsch", es: "Español", it: "Italiano", nl: "Nederlands" };

const NT_T = {
  en: { entity: "Temperature sensor", name: "Name", label: "Subtitle", decimals: "Decimals", language: "Language", auto: "Auto",
    unavailable: "Unavailable",
    modType: "Module type", mtIndoor: "Indoor", mtOutdoor: "Outdoor",
    humidity: "Humidity entity", co2: "CO₂ entity", noise: "Noise entity", pressure: "Pressure entity",
    trend: "Temperature trend entity", battery: "Battery entity", connectivity: "Connectivity entity",
    body: "Module finish", bodyAlu: "Aluminium", bodySand: "Sand", bodyMint: "Mint", bodyGraphite: "Graphite",
    glow: "Light up the front groove (air quality / temperature)", accent: "Accent color (hex)",
    co2Good: "CO₂ threshold — good (ppm)", co2Bad: "CO₂ threshold — poor (ppm)",
    histOpt: "Show the 24 h history button", histEnt: "Charted entity (default: temperature)",
    hist: "Last 24 h", noData: "No data",
    airGood: "Healthy air", airFair: "Stuffy air", airPoor: "Poor air",
    fillTitle: "Other sensors of this module were found.", fillBtn: "Fill in from the device",
    filled: "Filled in: ", fillNone: "Nothing more to fill in." },
  fr: { entity: "Capteur de température", name: "Nom", label: "Sous-titre", decimals: "Décimales", language: "Langue", auto: "Auto",
    unavailable: "Indisponible",
    modType: "Type de module", mtIndoor: "Intérieur", mtOutdoor: "Extérieur",
    humidity: "Entité humidité", co2: "Entité CO₂", noise: "Entité bruit", pressure: "Entité pression",
    trend: "Entité tendance de la température", battery: "Entité batterie", connectivity: "Entité connectivité",
    body: "Finition du module", bodyAlu: "Aluminium", bodySand: "Sable", bodyMint: "Menthe", bodyGraphite: "Graphite",
    glow: "Allumer la fente (qualité de l'air / température)", accent: "Couleur d'accent (hex)",
    co2Good: "Seuil CO₂ — bon (ppm)", co2Bad: "Seuil CO₂ — mauvais (ppm)",
    histOpt: "Afficher le bouton tracé 24 h", histEnt: "Entité tracée (défaut : température)",
    hist: "Dernières 24 h", noData: "Aucune donnée",
    airGood: "Air sain", airFair: "Air confiné", airPoor: "Air vicié",
    fillTitle: "D'autres capteurs de ce module ont été trouvés.", fillBtn: "Compléter depuis l'appareil",
    filled: "Complété : ", fillNone: "Rien de plus à compléter." },
  de: { entity: "Temperatursensor", name: "Name", label: "Untertitel", decimals: "Dezimalstellen", language: "Sprache", auto: "Auto",
    unavailable: "Nicht verfügbar",
    modType: "Modultyp", mtIndoor: "Innen", mtOutdoor: "Außen",
    humidity: "Feuchtigkeits-Entität", co2: "CO₂-Entität", noise: "Lärm-Entität", pressure: "Luftdruck-Entität",
    trend: "Entität Temperaturtrend", battery: "Batterie-Entität", connectivity: "Konnektivitäts-Entität",
    body: "Oberfläche des Moduls", bodyAlu: "Aluminium", bodySand: "Sand", bodyMint: "Mint", bodyGraphite: "Graphit",
    glow: "Frontschlitz leuchten lassen (Luftqualität / Temperatur)", accent: "Akzentfarbe (Hex)",
    co2Good: "CO₂-Schwelle — gut (ppm)", co2Bad: "CO₂-Schwelle — schlecht (ppm)",
    histOpt: "24-h-Verlauf-Button anzeigen", histEnt: "Dargestellte Entität (Standard: Temperatur)",
    hist: "Letzte 24 h", noData: "Keine Daten",
    airGood: "Gute Luft", airFair: "Verbrauchte Luft", airPoor: "Schlechte Luft",
    fillTitle: "Weitere Sensoren dieses Moduls gefunden.", fillBtn: "Aus dem Gerät übernehmen",
    filled: "Übernommen: ", fillNone: "Nichts weiter zu übernehmen." },
  es: { entity: "Sensor de temperatura", name: "Nombre", label: "Subtítulo", decimals: "Decimales", language: "Idioma", auto: "Auto",
    unavailable: "No disponible",
    modType: "Tipo de módulo", mtIndoor: "Interior", mtOutdoor: "Exterior",
    humidity: "Entidad de humedad", co2: "Entidad de CO₂", noise: "Entidad de ruido", pressure: "Entidad de presión",
    trend: "Entidad de tendencia de temperatura", battery: "Entidad de batería", connectivity: "Entidad de conectividad",
    body: "Acabado del módulo", bodyAlu: "Aluminio", bodySand: "Arena", bodyMint: "Menta", bodyGraphite: "Grafito",
    glow: "Iluminar la ranura frontal (calidad del aire / temperatura)", accent: "Color de acento (hex)",
    co2Good: "Umbral CO₂ — bueno (ppm)", co2Bad: "Umbral CO₂ — malo (ppm)",
    histOpt: "Mostrar el botón de historial 24 h", histEnt: "Entidad del gráfico (por defecto: temperatura)",
    hist: "Últimas 24 h", noData: "Sin datos",
    airGood: "Aire sano", airFair: "Aire cargado", airPoor: "Aire viciado",
    fillTitle: "Se han encontrado otros sensores de este módulo.", fillBtn: "Completar desde el dispositivo",
    filled: "Completado: ", fillNone: "Nada más que completar." },
  it: { entity: "Sensore di temperatura", name: "Nome", label: "Sottotitolo", decimals: "Decimali", language: "Lingua", auto: "Auto",
    unavailable: "Non disponibile",
    modType: "Tipo di modulo", mtIndoor: "Interno", mtOutdoor: "Esterno",
    humidity: "Entità umidità", co2: "Entità CO₂", noise: "Entità rumore", pressure: "Entità pressione",
    trend: "Entità tendenza della temperatura", battery: "Entità batteria", connectivity: "Entità connettività",
    body: "Finitura del modulo", bodyAlu: "Alluminio", bodySand: "Sabbia", bodyMint: "Menta", bodyGraphite: "Grafite",
    glow: "Illumina la fessura frontale (qualità dell'aria / temperatura)", accent: "Colore d'accento (hex)",
    co2Good: "Soglia CO₂ — buona (ppm)", co2Bad: "Soglia CO₂ — scarsa (ppm)",
    histOpt: "Mostra il pulsante storico 24 h", histEnt: "Entità nel grafico (predefinito: temperatura)",
    hist: "Ultime 24 h", noData: "Nessun dato",
    airGood: "Aria salubre", airFair: "Aria viziata", airPoor: "Aria pessima",
    fillTitle: "Trovati altri sensori di questo modulo.", fillBtn: "Completa dal dispositivo",
    filled: "Completato: ", fillNone: "Nulla da completare." },
  nl: { entity: "Temperatuursensor", name: "Naam", label: "Ondertitel", decimals: "Decimalen", language: "Taal", auto: "Auto",
    unavailable: "Niet beschikbaar",
    modType: "Moduletype", mtIndoor: "Binnen", mtOutdoor: "Buiten",
    humidity: "Vochtigheids-entiteit", co2: "CO₂-entiteit", noise: "Geluids-entiteit", pressure: "Luchtdruk-entiteit",
    trend: "Entiteit temperatuurtrend", battery: "Batterij-entiteit", connectivity: "Connectiviteits-entiteit",
    body: "Afwerking van de module", bodyAlu: "Aluminium", bodySand: "Zand", bodyMint: "Mint", bodyGraphite: "Grafiet",
    glow: "Voorste sleuf laten oplichten (luchtkwaliteit / temperatuur)", accent: "Accentkleur (hex)",
    co2Good: "CO₂-drempel — goed (ppm)", co2Bad: "CO₂-drempel — slecht (ppm)",
    histOpt: "Toon de 24 u-geschiedenisknop", histEnt: "Weergegeven entiteit (standaard: temperatuur)",
    hist: "Afgelopen 24 u", noData: "Geen gegevens",
    airGood: "Gezonde lucht", airFair: "Bedompte lucht", airPoor: "Slechte lucht",
    fillTitle: "Andere sensoren van deze module gevonden.", fillBtn: "Aanvullen vanaf het apparaat",
    filled: "Aangevuld: ", fillNone: "Niets meer aan te vullen." },
};

function ntLangCode(hass, config) {
  const l = (config && config.language) || (hass && (hass.locale ? hass.locale.language : hass.language)) || "en";
  const s = String(l).substring(0, 2).toLowerCase();
  return NT_T[s] ? s : "en";
}
function ntT(hass, config) { return NT_T[ntLangCode(hass, config)]; }

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
};

const NT_METRICS = [
  { key: "humidity", cfg: "humidity_entity", icon: "mdi:water-percent", dec: 0 },
  { key: "co2", cfg: "co2_entity", icon: "mdi:molecule-co2", dec: 0 },
  { key: "noise", cfg: "noise_entity", icon: "mdi:volume-high", dec: 0 },
  { key: "pressure", cfg: "pressure_entity", icon: "mdi:gauge", dec: 0, group: false },
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

function ntSiblings(hass, entity) {
  // Entities of the same device, or failing that entities sharing the object_id prefix.
  const reg = hass.entities || {};
  const devId = reg[entity] && reg[entity].device_id;
  if (devId) {
    return Object.keys(hass.states).filter((e) => reg[e] && reg[e].device_id === devId && e !== entity);
  }
  const base = entity.split(".")[1].replace(/_[a-z0-9]+$/, "");
  if (base.length < 3) return [];
  return Object.keys(hass.states).filter(
    (e) => e !== entity && /^(sensor|binary_sensor)\./.test(e) && e.split(".")[1].startsWith(base + "_")
  );
}

function ntAutofill(hass, config) {
  // Returns the config keys that could be filled from the module's other entities.
  const out = {};
  if (!config.entity || !hass.states[config.entity]) return out;
  for (const e of ntSiblings(hass, config.entity)) {
    const dc = hass.states[e].attributes.device_class;
    const key = NT_BY_CLASS[dc];
    if (key && !config[key] && !out[key]) out[key] = e;
    if (!key && !config.trend_entity && !out.trend_entity && /trend|tendance|tendenz|tendencia|tendenza/i.test(e)
        && !/pressure|pression|druck|presion|presión|pressione/i.test(e)) {
      out.trend_entity = e;
    }
  }
  return out;
}

class NetatmoCard extends HTMLElement {
  static getConfigElement() { return document.createElement("netatmo-card-editor"); }

  static getStubConfig(hass) {
    const temps = Object.keys(hass.states).filter(
      (e) => e.startsWith("sensor.") && hass.states[e].attributes.device_class === "temperature"
    );
    const netatmo = temps.filter((e) => /netatmo/i.test(hass.states[e].attributes.attribution || ""));
    const entity = netatmo[0] || temps[0] || "";
    return { entity: entity, ...(entity ? ntAutofill(hass, { entity }) : {}) };
  }

  setConfig(config) {
    if (!config || !config.entity) throw new Error("Please define an entity (temperature sensor)");
    let dec = parseInt(config.decimals, 10);
    if (!(dec >= 0 && dec <= 3)) dec = 1;
    this._config = {
      ...config,
      decimals: dec,
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
    const m = this._config.module_type;
    if (m === "indoor" || m === "outdoor") return m;
    return (this._config.co2_entity || this._config.pressure_entity || this._config.noise_entity) ? "indoor" : "outdoor";
  }

  // Drawn from the Netatmo product shots: matte anodised cylinder, one long recessed
  // groove on the front, translucent white base ring, white top that lights up.
  _moduleSvg() {
    const u = this._uid();
    const indoor = this._kind() === "indoor";
    const CX = 62, RX = 26, RY = 6.5;
    const BASE_BOT = 288, BASE_H = 10;
    const FOOT = BASE_BOT - BASE_H;                          // metal / white base seam
    const TOTAL = (indoor ? 3.44 : 2.33) * RX * 2;           // 45 mm across, 155 / 105 mm tall
    const TOP = BASE_BOT - TOTAL + RY;                       // centre of the top ellipse
    const H = FOOT - TOP;

    const slotY1 = TOP + H * (indoor ? 0.175 : 0.22);
    const slotY2 = TOP + H * (indoor ? 0.84 : 0.76);
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
        ${indoor ? "" : `<rect x="${CX + 1}" y="${BASE_BOT - 1}" width="1.8" height="4" rx="0.9" fill="#e6e9ea" stroke="#000" stroke-opacity="0.18" stroke-width="0.5"/>`}

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
    this._card = card;

    const rows = NT_METRICS.filter((m) => c[m.cfg]).map((m) => `
      <div class="nt-row" id="nt-row-${m.key}" data-entity="${c[m.cfg]}">
        <ha-icon icon="${m.icon}" id="nt-ico-${m.key}"></ha-icon>
        <span class="nt-rv" id="nt-val-${m.key}">—</span>
      </div>`).join("");

    card.innerHTML = `
      <style>
        .nt-wrap { display: flex; align-items: stretch; gap: 10px; padding: 12px 16px 14px; cursor: pointer; }
        .nt-wrap.nt-corners { padding-top: 32px; }
        .nt-mod { flex: none; width: 92px; }
        .nt-mod svg { display: block; width: 100%; height: auto; overflow: visible; }
        .nt-info { flex: 1; min-width: 0; display: flex; flex-direction: column; justify-content: center; }
        .nt-name { font-size: 1em; font-weight: 500; color: var(--primary-text-color);
          overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
        .nt-main { display: flex; align-items: baseline; gap: 3px; }
        .nt-value { font-size: 2.1em; font-weight: 700; color: var(--primary-text-color); line-height: 1.2; }
        .nt-unit { font-size: 1em; font-weight: 400; color: var(--secondary-text-color); }
        .nt-trend { font-size: 0.95em; color: var(--secondary-text-color); margin-left: 2px; }
        .nt-label { font-size: 0.85em; color: var(--secondary-text-color); }
        .nt-rows { display: grid; grid-template-columns: repeat(auto-fit, minmax(82px, 1fr));
          gap: 3px 8px; margin-top: 10px; }
        .nt-row { display: flex; align-items: center; gap: 4px; min-width: 0; }
        .nt-row ha-icon { --mdc-icon-size: 17px; width: 17px; height: 17px; flex: none;
          color: var(--nt-row-color, var(--secondary-text-color)); }
        .nt-rv { font-size: 0.88em; color: var(--primary-text-color);
          overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
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
        <div class="nt-mod">${this._moduleSvg()}</div>
        <div class="nt-info">
          <div class="nt-name" id="nt-name"></div>
          <div class="nt-main">
            <span class="nt-value" id="nt-value">—</span><span class="nt-unit" id="nt-unit"></span>
            <span class="nt-trend" id="nt-trend"></span>
          </div>
          <div class="nt-label" id="nt-label"></div>
          <div class="nt-rows">${rows}</div>
        </div>
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
    const ids = ["nt-wrap", "nt-name", "nt-value", "nt-unit", "nt-trend", "nt-label", "nt-hist-toggle",
      "nt-hist", "nt-hist-label", "nt-hist-body", "nt-conn", "nt-conn-off", "nt-batt", "nt-batt-fill", "nt-batt-pct"];
    for (const m of NT_METRICS) ids.push("nt-row-" + m.key, "nt-val-" + m.key, "nt-ico-" + m.key);
    for (const id of ids) this._el[id] = card.querySelector("#" + id);

    this._el["nt-wrap"].addEventListener("click", () => this._moreInfo(this._config.entity));
    for (const m of NT_METRICS) {
      const row = this._el["nt-row-" + m.key];
      if (!row) continue;
      row.style.cursor = "pointer";
      row.addEventListener("click", (e) => { e.stopPropagation(); this._moreInfo(row.dataset.entity); });
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

  _glowColor() {
    const c = this._config;
    if (c.show_glow === false) return null;
    const co2 = this._num(c.co2_entity);
    if (this._kind() === "indoor" && !isNaN(co2)) {
      if (co2 < c.co2_good) return "#3ec46d";
      if (co2 < c.co2_bad) return "#f0a025";
      return "#e0503a";
    }
    const t = this._num(c.entity);
    if (isNaN(t)) return null;
    if (t <= 0) return "#4a7fe2";
    if (t <= 10) return "#5cb4e8";
    if (t <= 19) return "#3ec46d";
    if (t <= 26) return "#f2c744";
    if (t <= 32) return "#f0883c";
    return "#e0503a";
  }

  _update() {
    if (!this._hass || !this._built) return;
    const c = this._config;
    const t = ntT(this._hass, c);
    const st = this._hass.states[c.entity];
    const wrap = this._el["nt-wrap"];

    this._el["nt-name"].textContent = c.name || (st && st.attributes.friendly_name) || c.entity;
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
      if (!c.label) this._el["nt-label"].textContent = t.unavailable;
    } else {
      wrap.classList.remove("nt-unavailable");
      this._el["nt-value"].textContent = ntFmt(value, c.decimals);
      this._el["nt-unit"].textContent = st.attributes.unit_of_measurement || "";
    }

    const tr = c.trend_entity && this._hass.states[c.trend_entity];
    const trs = tr ? String(tr.state).toLowerCase() : "";
    this._el["nt-trend"].textContent = trs === "up" ? "▲" : trs === "down" ? "▼" : "";
    this._el["nt-trend"].title = tr ? (tr.attributes.friendly_name || c.trend_entity) + " : " + tr.state : "";

    this._updateRows(t);
    this._updateGlow();
    this._updateCorners();
  }

  _updateRows(t) {
    const c = this._config;
    for (const m of NT_METRICS) {
      const row = this._el["nt-row-" + m.key];
      if (!row) continue;
      const st = this._hass.states[c[m.cfg]];
      const n = st ? parseFloat(st.state) : NaN;
      const unit = st ? st.attributes.unit_of_measurement || "" : "";
      this._el["nt-val-" + m.key].textContent = isNaN(n) ? "—" : ntFmt(n, m.dec, m.group) + (unit ? " " + unit : "");
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
  set hass(hass) { this._hass = hass; this._render(); }

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
        const out = { type: "custom:netatmo-card", entity: v.entity };
        if (v.module_type && v.module_type !== "auto") out.module_type = v.module_type;
        if (v.name) out.name = v.name;
        if (v.label) out.label = v.label;
        for (const k of ["humidity_entity", "co2_entity", "noise_entity", "pressure_entity",
          "trend_entity", "battery_entity", "connectivity_entity"]) {
          if (v[k]) out[k] = v[k];
        }
        if (v.decimals != null && v.decimals !== "" && parseInt(v.decimals, 10) !== 1) out.decimals = parseInt(v.decimals, 10);
        if (v.body_color && v.body_color !== "aluminium") out.body_color = v.body_color;
        if (v.show_glow === false) out.show_glow = false;
        if (v.accent_color && v.accent_color !== "#2f8fd0") out.accent_color = v.accent_color;
        if (v.co2_good != null && v.co2_good !== "" && parseFloat(v.co2_good) !== 1000) out.co2_good = parseFloat(v.co2_good);
        if (v.co2_bad != null && v.co2_bad !== "" && parseFloat(v.co2_bad) !== 2000) out.co2_bad = parseFloat(v.co2_bad);
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
    this._form.data = {
      entity: c.entity || "",
      module_type: c.module_type || "auto",
      name: c.name || "",
      label: c.label || "",
      humidity_entity: c.humidity_entity || "",
      co2_entity: c.co2_entity || "",
      noise_entity: c.noise_entity || "",
      pressure_entity: c.pressure_entity || "",
      trend_entity: c.trend_entity || "",
      battery_entity: c.battery_entity || "",
      connectivity_entity: c.connectivity_entity || "",
      decimals: c.decimals != null ? c.decimals : 1,
      body_color: c.body_color || "aluminium",
      show_glow: c.show_glow !== false,
      accent_color: c.accent_color || "#2f8fd0",
      co2_good: c.co2_good != null ? c.co2_good : 1000,
      co2_bad: c.co2_bad != null ? c.co2_bad : 2000,
      show_history: c.show_history === true,
      history_entity: c.history_entity || "",
      language: c.language || "",
    };
    this._form.schema = [
      { name: "entity", label: t.entity, selector: { entity: { domain: "sensor", device_class: "temperature" } } },
      { name: "module_type", label: t.modType, selector: { select: { mode: "dropdown", options: [
        { value: "auto", label: t.auto },
        { value: "indoor", label: t.mtIndoor },
        { value: "outdoor", label: t.mtOutdoor },
      ] } } },
      { name: "name", label: t.name, selector: { text: {} } },
      { name: "label", label: t.label, selector: { text: {} } },
      { name: "humidity_entity", label: t.humidity, selector: { entity: { domain: "sensor" } } },
      { name: "co2_entity", label: t.co2, selector: { entity: { domain: "sensor" } } },
      { name: "noise_entity", label: t.noise, selector: { entity: { domain: "sensor" } } },
      { name: "pressure_entity", label: t.pressure, selector: { entity: { domain: "sensor" } } },
      { name: "trend_entity", label: t.trend, selector: { entity: { domain: "sensor" } } },
      { name: "battery_entity", label: t.battery, selector: { entity: { domain: "sensor" } } },
      { name: "connectivity_entity", label: t.connectivity, selector: { entity: { domain: ["binary_sensor", "sensor"] } } },
      { name: "decimals", label: t.decimals, selector: { number: { mode: "box", step: 1, min: 0, max: 3 } } },
      { name: "body_color", label: t.body, selector: { select: { mode: "dropdown", options: [
        { value: "aluminium", label: t.bodyAlu },
        { value: "sand", label: t.bodySand },
        { value: "mint", label: t.bodyMint },
        { value: "graphite", label: t.bodyGraphite },
      ] } } },
      { name: "show_glow", label: t.glow, selector: { boolean: {} } },
      { name: "co2_good", label: t.co2Good, selector: { number: { mode: "box", step: 50, min: 0 } } },
      { name: "co2_bad", label: t.co2Bad, selector: { number: { mode: "box", step: 50, min: 0 } } },
      { name: "accent_color", label: t.accent, selector: { text: {} } },
      { name: "show_history", label: t.histOpt, selector: { boolean: {} } },
      { name: "history_entity", label: t.histEnt, selector: { entity: { domain: "sensor" } } },
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
    if (status) html += `<div style="margin-bottom:8px;color:var(--success-color, #0f9d58);">${status}</div>`;
    if (keys.length) {
      html += `<button id="nt-fill" style="cursor:pointer;padding:8px 14px;border:none;border-radius:6px;background:var(--primary-color);color:var(--text-primary-color, #fff);font:inherit;">${t.fillBtn}</button>`;
    }
    this._fillBox.innerHTML = html;
    const btn = this._fillBox.querySelector("#nt-fill");
    if (btn) btn.addEventListener("click", () => this._fill(t, found));
  }

  _fill(t, found) {
    const keys = Object.keys(found);
    if (!keys.length) { this._fillStatus = t.fillNone; this._renderFillBox(t); return; }
    this._config = { ...this._config, ...found };
    this._fillStatus = t.filled + keys.map((k) => found[k]).join(", ");
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
