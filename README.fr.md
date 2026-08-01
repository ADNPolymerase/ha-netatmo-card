# Netatmo Card

[![hacs_badge](https://img.shields.io/badge/HACS-Custom-orange.svg)](https://github.com/hacs/integration)
[![GitHub Release](https://img.shields.io/github/v/release/ADNPolymerase/ha-netatmo-card?sort=semver)](https://github.com/ADNPolymerase/ha-netatmo-card/releases)
[![HACS Action](https://github.com/ADNPolymerase/ha-netatmo-card/actions/workflows/hacs.yml/badge.svg)](https://github.com/ADNPolymerase/ha-netatmo-card/actions/workflows/hacs.yml)
[![HA Version](https://img.shields.io/badge/Home%20Assistant-2024.1%2B-blue.svg)](https://www.home-assistant.io)
[![License: MIT](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/ADNPolymerase/ha-netatmo-card/blob/main/LICENSE)
[![Buy Me A Coffee](https://img.shields.io/badge/Buy%20Me%20A%20Coffee-support-yellow.svg?logo=buy-me-a-coffee)](https://buymeacoffee.com/adnpolymerase)

<a href="https://buymeacoffee.com/adnpolymerase" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-orange.png" alt="Buy Me A Coffee" height="60"></a>
<a href="https://adnpolymerase.github.io/HA/" target="_blank"><img src="https://raw.githubusercontent.com/ADNPolymerase/HA/main/assets/site-button.svg" alt="Lien vers mon github.io pour mes autres projets" height="60"></a>

Multilingue (6 langues : EN, FR, DE, ES, IT, NL — détectées depuis Home Assistant).

Une card Lovelace qui dessine les **modules météo intérieur et extérieur** tels qu'ils sont —
cylindre alu mat, rainure verticale en creux, socle translucide — avec les mesures à côté
et le dessus qui s'allume selon la qualité de l'air. Intérieur et extérieur sont dessinés
à leurs tailles relatives réelles.

![Netatmo Card](https://raw.githubusercontent.com/ADNPolymerase/ha-netatmo-card/main/docs/screenshot.fr.png)

## Fonctionnalités

- **Deux modules, une card** : la station intérieure haute et le module extérieur court, à leurs proportions réelles. `module_type` est déduit automatiquement des entités fournies.
- **Le dessus s'allume**, comme sur le vrai module : vert / orange / rouge selon le CO₂ à l'intérieur, selon la température à l'extérieur. Seuils configurables, désactivable avec `show_glow: false`.
- **Compléter depuis l'appareil** : choisissez le capteur de température et l'éditeur propose un bouton qui remplit humidité, CO₂, bruit, pression, batterie et connectivité depuis le même appareil.
- **Mesures en tuiles** : température en gros avec sa flèche de tendance, puis humidité, CO₂, bruit et pression — chacune colorée hors de la plage de confort, chacune ouvrant sa fiche au clic.
- **Batterie et connectivité** dans les coins (niveau coloré, icône wifi barrée en rouge hors ligne).
- **Tracé 24 h dépliable** : `show_history` ajoute un bouton discret qui déplie la courbe 24 h de la température — ou de n'importe quel autre capteur via `history_entity`.
- **Finitions** : aluminium, sable, menthe ou graphite.
- Éditeur natif HA (sélecteurs d'entités) + contrôle complet en YAML.

Fonctionne avec n'importe quel capteur, pas seulement l'intégration Netatmo — un ensemble
température/humidité/CO₂ DIY ou Zigbee rend tout aussi bien.

## Installation (HACS)

1. HACS → trois points → **Dépôts personnalisés**
2. Ajouter `https://github.com/ADNPolymerase/ha-netatmo-card` en catégorie **Tableau de bord**
3. Installer **Netatmo Card**, puis vider le cache du navigateur (Ctrl+Maj+R / Cmd+Maj+R)

Alternative manuelle : copier `netatmo-card.js` depuis la [dernière release](https://github.com/ADNPolymerase/ha-netatmo-card/releases) dans `config/www/`, puis ajouter `/local/netatmo-card.js` comme ressource module JavaScript.

## Utilisation

Ajoutez la card depuis l'interface (chercher « Netatmo ») — un capteur de température est
détecté automatiquement, et l'éditeur propose de compléter le reste du module.
Ou en YAML :

```yaml
type: custom:netatmo-card
entity: sensor.capteur_interieur_temperature
humidity_entity: sensor.capteur_interieur_humidite
co2_entity: sensor.capteur_interieur_dioxyde_de_carbone
noise_entity: sensor.capteur_interieur_bruit
pressure_entity: sensor.capteur_interieur_pression_atmospherique
connectivity_entity: binary_sensor.capteur_interieur_connectivite
label: Entrée
```

| Option | Défaut | Description |
|---|---|---|
| `entity` | **requis** | Capteur de température — la valeur principale |
| `module_type` | auto | `indoor` ou `outdoor` ; auto = intérieur si CO₂/bruit/pression renseigné |
| `name` | nom convivial | Titre affiché à côté du module |
| `label` | — | Sous-titre sous la valeur (ex. la pièce) |
| `humidity_entity` | — | Humidité, affichée en tuile |
| `co2_entity` | — | CO₂, coloré selon les seuils ci-dessous |
| `noise_entity` | — | Niveau sonore, coloré au-delà de 55 / 70 dB |
| `pressure_entity` | — | Pression atmosphérique |
| `trend_entity` | — | Tendance de température (`up` / `down`) → flèche à côté de la valeur |
| `battery_entity` | — | Capteur de batterie affiché en haut à droite |
| `connectivity_entity` | — | Capteur de connectivité affiché en haut à gauche |
| `decimals` | `1` | Décimales de la température |
| `body_color` | `aluminium` | `aluminium`, `sand`, `mint` ou `graphite` |
| `show_glow` | `true` | Allumer le dessus du module |
| `co2_good` | `1000` | En dessous, le dessus s'allume en vert (ppm) |
| `co2_bad` | `2000` | Au-dessus, le dessus s'allume en rouge (ppm) |
| `accent_color` | `#2f8fd0` | Couleur de la courbe 24 h |
| `show_history` | `false` | Ajoute le bouton de tracé 24 h dépliable |
| `history_entity` | `entity` | Capteur tracé dans le graphe 24 h |
| `language` | auto | `en`, `fr`, `de`, `es`, `it`, `nl` |

## Licence

MIT — voir [LICENSE](LICENSE).

Non affilié à Netatmo / Legrand, ni approuvé ou sponsorisé par eux. Les noms de produits ne sont
utilisés que pour décrire la compatibilité.
