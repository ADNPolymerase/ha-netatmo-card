# Netatmo Card

[![hacs_badge](https://img.shields.io/badge/HACS-Custom-orange.svg)](https://github.com/hacs/integration)
[![GitHub Release](https://img.shields.io/github/v/release/ADNPolymerase/ha-netatmo-card?sort=semver)](https://github.com/ADNPolymerase/ha-netatmo-card/releases)
[![HACS Action](https://github.com/ADNPolymerase/ha-netatmo-card/actions/workflows/hacs.yml/badge.svg)](https://github.com/ADNPolymerase/ha-netatmo-card/actions/workflows/hacs.yml)
[![HA Version](https://img.shields.io/badge/Home%20Assistant-2024.1%2B-blue.svg)](https://www.home-assistant.io)
[![License: MIT](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/ADNPolymerase/ha-netatmo-card/blob/main/LICENSE)
[![Buy Me A Coffee](https://img.shields.io/badge/Buy%20Me%20A%20Coffee-support-yellow.svg?logo=buy-me-a-coffee)](https://buymeacoffee.com/adnpolymerase)

<a href="https://buymeacoffee.com/adnpolymerase" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-orange.png" alt="Buy Me A Coffee" height="60"></a>
<a href="https://adnpolymerase.github.io/HA/" target="_blank"><img src="https://raw.githubusercontent.com/ADNPolymerase/HA/main/assets/site-button.svg" alt="Link to my github.io for my other projects" height="60"></a>

Multilingual (6 languages: EN, FR, DE, ES, IT, NL — auto-detected from Home Assistant).

A Lovelace card that draws the **indoor and outdoor weather modules** the way they look —
matte anodised cylinder, recessed front groove, translucent base — with their readings
alongside and the groove lighting up with air quality, like the real indoor station. Indoor
and outdoor are drawn at their real relative sizes.

> 🇫🇷 [Lire en français](README.fr.md)

![Netatmo Card](https://raw.githubusercontent.com/ADNPolymerase/ha-netatmo-card/main/docs/screenshot.png)

## Features

- **Two modules, one card**: the tall indoor station and the short outdoor module, at their real proportions. You pick `indoor` or `outdoor` and the drawing follows.
- **The front groove lights up**, like the real indoor station: green / amber / red by CO₂. The outdoor module has no LED, so it never lights up. Thresholds are configurable; turn it off with `show_glow: false`.
- **Fill in from the device**: pick the temperature sensor and the editor offers one button that fills in humidity, CO₂, noise, pressure, battery and connectivity from the same device.
- **Readings as tiles**: temperature in large type with its trend arrow, then humidity, CO₂, noise and pressure — each colored when it leaves the comfortable range, each opening its own more-info on tap.
- **Battery and connectivity** in the card corners (colored level, wifi icon crossed out in red when offline).
- **Collapsible 24 h history**: `show_history` adds a discreet button that expands a 24 h curve of the temperature — or of any other sensor via `history_entity`.
- **Finishes**: aluminium, sand, mint or graphite.
- Native HA editor (entity pickers) + full YAML control.

Works with any sensor, not only the Netatmo integration — a DIY or Zigbee temperature/humidity/CO₂ set renders just as well.

## Installation (HACS)

1. HACS → three dots → **Custom repositories**
2. Add `https://github.com/ADNPolymerase/ha-netatmo-card` with category **Dashboard**
3. Install **Netatmo Card**, then hard-refresh your browser (Ctrl+Shift+R / Cmd+Shift+R)

Manual alternative: copy `netatmo-card.js` from the [latest release](https://github.com/ADNPolymerase/ha-netatmo-card/releases) to `config/www/`, then add `/local/netatmo-card.js` as a JavaScript-module resource.

## Usage

Add the card from the dashboard UI (search "Netatmo") — a temperature sensor is auto-detected,
and the editor offers to fill in the rest of the module. Pick indoor or outdoor.
Or in YAML:

```yaml
type: custom:netatmo-card
module_type: indoor
entity: sensor.indoor_module_temperature
humidity_entity: sensor.indoor_module_humidity
co2_entity: sensor.indoor_module_carbon_dioxide
noise_entity: sensor.indoor_module_noise
pressure_entity: sensor.indoor_module_pressure
connectivity_entity: binary_sensor.indoor_module_connectivity
label: Hallway
```

| Option | Default | Description |
|---|---|---|
| `entity` | **required** | Temperature sensor — the card's main value |
| `module_type` | `indoor` | `indoor` or `outdoor` — sets which module is drawn |
| `name` | friendly name | Title shown next to the module |
| `label` | — | Subtitle under the value (e.g. the room) |
| `humidity_entity` | — | Humidity, shown as a tile |
| `co2_entity` | — | CO₂, colored by the thresholds below |
| `noise_entity` | — | Noise level, colored above 55 / 70 dB |
| `pressure_entity` | — | Atmospheric pressure |
| `trend_entity` | — | Temperature trend (`up` / `down`) → arrow next to the value |
| `battery_entity` | — | Battery sensor shown top-right |
| `connectivity_entity` | — | Connectivity sensor shown top-left |
| `decimals` | `1` | Decimals for the temperature |
| `body_color` | `aluminium` | `aluminium`, `sand`, `mint` or `graphite` |
| `show_glow` | `true` | Light up the groove with air quality (indoor module only) |
| `co2_good` | `1000` | Below this, the groove glows green (ppm) |
| `co2_bad` | `2000` | Above this, the groove glows red (ppm) |
| `accent_color` | `#2f8fd0` | Color of the 24 h curve |
| `show_history` | `false` | Adds the collapsible 24 h history button |
| `history_entity` | `entity` | Sensor plotted in the 24 h chart |
| `language` | auto | `en`, `fr`, `de`, `es`, `it`, `nl` |

## License

MIT — see [LICENSE](LICENSE).

Not affiliated with, endorsed by or sponsored by Netatmo / Legrand. Product names are used only to
describe compatibility.
