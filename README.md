<p align="center">
  <img src="https://brands.home-assistant.io/netatmo/logo.png" alt="Netatmo" height="80">
</p>

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

A Lovelace card that draws the **weather station modules** the way they look, with their
readings alongside. Five modules: the indoor station, the additional indoor module and the
outdoor one as matte anodised cylinders with their recessed front groove, each at its real
height, the rain gauge with its clear collector and black funnel, and the anemometer with its
two glossy discs. The indoor grooves light up with air quality, like the real ones.

> 🇫🇷 [Lire en français](README.fr.md)

![Netatmo Card](https://raw.githubusercontent.com/ADNPolymerase/ha-netatmo-card/main/docs/screenshot.png)

## Features

- **Five modules, one card**: `indoor`, `indoor_extra`, `outdoor`, `rain` and `wind`. You pick the type, the drawing and the fields follow. The three cylinders share a diameter and differ in height, exactly like the real ones: 155 mm for the station, 105 mm outdoors, 92 mm for the additional indoor module.
- **Additional indoor module**: temperature, humidity and CO₂ with a battery, and no noise or pressure, because that module does not measure them.
- **Rain gauge**: daily rainfall in large type, with the previous hour and the rain since the last reading as tiles.
- **Anemometer**: wind speed with a vane arrow pointing where the wind blows, gust speed and direction in degrees with a cardinal.
- **The front groove lights up** on both indoor modules, like the real ones: green / amber / red by CO₂. The outdoor module has no LED, so it never lights up. Thresholds are configurable; turn it off with `show_glow: false`.
- **Fill in from the device**: pick the temperature sensor and the editor offers one button that fills in humidity, CO₂, noise, pressure, battery and connectivity from the same device.
- **Only the relevant options**: the editor shows a field when the module type has that reading *and* the device exposes it — no battery field on a mains-powered indoor station, no CO₂ / noise / pressure on the outdoor module. Every picker is narrowed to the matching `device_class`.
- **Readings as tiles**: temperature in large type with its trend arrow, then humidity, CO₂, noise and pressure — each colored when it leaves the comfortable range, each opening its own more-info on tap.
- **Battery and connectivity** in the card corners (colored level, wifi icon crossed out in red when offline).
- **Collapsible 24 h history**: `show_history` adds a discreet button that expands a 24 h curve of the temperature — or of any other sensor via `history_entity`.
- **Finishes**: aluminium, sand, mint or graphite.
- Native HA editor (entity pickers) + full YAML control.

Works with any sensor, not only the Netatmo integration — a DIY or Zigbee temperature/humidity/CO₂ set renders just as well.

The `wind` type is written against the entities the Netatmo integration exposes, checked in the
integration source on the path that serves modules you own, but not tested on a real anemometer
since I do not own one. Two things to know: Netatmo enables **wind speed and wind direction** by
default and leaves **gust speed and the numeric angle disabled**, so enable them on the device page
if you want them. And the direction it enables by default is an enum of cardinals, not degrees. The
card takes either, showing `215° SW` for degrees and `SW` for cardinals, and the vane arrow works
with both.

## Installation (HACS)

1. HACS → three dots → **Custom repositories**
2. Add `https://github.com/ADNPolymerase/ha-netatmo-card` with category **Dashboard**
3. Install **Netatmo Card**, then hard-refresh your browser (Ctrl+Shift+R / Cmd+Shift+R)

Manual alternative: copy `netatmo-card.js` from the [latest release](https://github.com/ADNPolymerase/ha-netatmo-card/releases) to `config/www/`, then add `/local/netatmo-card.js` as a JavaScript-module resource.

## Usage

Add the card from the dashboard UI (search "Netatmo") — a temperature sensor is auto-detected,
and the editor offers to fill in the rest of the module. Pick the module type first.
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
| `module_type` | `indoor` | `indoor`, `indoor_extra`, `outdoor`, `rain` or `wind` — sets which module is drawn |
| `name` | friendly name | Title shown next to the module |
| `label` | — | Subtitle under the value (e.g. the room) |
| `humidity_entity` | — | Humidity, shown as a tile |
| `co2_entity` | — | CO₂, colored by the thresholds below |
| `noise_entity` | — | Noise level, colored above 55 / 70 dB |
| `pressure_entity` | — | Atmospheric pressure |
| `rain_hour_entity` | — | Rain in the previous hour (rain gauge) |
| `rain_rate_entity` | — | Rain since the last reading (rain gauge) |
| `gust_entity` | — | Gust speed (anemometer) |
| `wind_direction_entity` | — | Wind direction, drives the vane arrow (anemometer) |
| `trend_entity` | — | Temperature trend (`up` / `down`) → arrow next to the value |
| `battery_entity` | — | Battery sensor shown top-right |
| `connectivity_entity` | — | Connectivity sensor shown top-left |
| `decimals` | `1` | Decimals for the temperature |
| `body_color` | `aluminium` | `aluminium`, `sand`, `mint` or `graphite` (the three cylinders only) |
| `show_glow` | `true` | Light up the groove with air quality (both indoor modules) |
| `co2_good` | `1000` | Below this, the groove glows green (ppm) |
| `co2_bad` | `2000` | Above this, the groove glows red (ppm) |
| `clickable` | `true` | Open the more-info dialog when the card or a tile is tapped |
| `accent_color` | `#2f8fd0` | Color of the 24 h curve |
| `show_history` | `false` | Adds the collapsible 24 h history button |
| `history_entity` | `entity` | Sensor plotted in the 24 h chart |
| `language` | auto | `en`, `fr`, `de`, `es`, `it`, `nl` |

## License

MIT — see [LICENSE](LICENSE).

Not affiliated with, endorsed by or sponsored by Netatmo / Legrand. Product names are used only to
describe compatibility.
