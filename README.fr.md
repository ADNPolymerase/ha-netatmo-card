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
<a href="https://adnpolymerase.github.io/HA/" target="_blank"><img src="https://raw.githubusercontent.com/ADNPolymerase/HA/main/assets/site-button.svg" alt="Lien vers mon github.io pour mes autres projets" height="60"></a>

Multilingue (6 langues : EN, FR, DE, ES, IT, NL — détectées depuis Home Assistant).

Une card Lovelace qui dessine les **modules de la station météo** tels qu'ils sont, avec les
mesures à côté. Cinq modules : la station intérieure, le module intérieur supplémentaire et
le module extérieur en cylindres alu mat avec leur rainure en creux, chacun à sa hauteur réelle,
le pluviomètre avec son collecteur transparent et son entonnoir noir, et l'anémomètre avec ses
deux disques brillants. Les fentes des modules intérieurs s'allument selon la qualité de l'air,
comme sur les vrais.

![Netatmo Card](https://raw.githubusercontent.com/ADNPolymerase/ha-netatmo-card/main/docs/screenshot.fr.png)

## Fonctionnalités

- **Cinq modules, une card** : `indoor`, `indoor_extra`, `outdoor`, `rain` et `wind`. Vous choisissez le type, le dessin et les champs suivent. Les trois cylindres partagent leur diamètre et diffèrent en hauteur, comme les vrais : 155 mm pour la station, 105 mm à l'extérieur, 92 mm pour le module intérieur supplémentaire.
- **Module intérieur supplémentaire** : température, humidité et CO₂ avec une batterie, sans bruit ni pression, puisque ce module ne les mesure pas.
- **Pluviomètre** : la pluie du jour en gros, avec l'heure précédente et la pluie depuis le dernier relevé en tuiles.
- **Anémomètre** : la vitesse du vent avec une flèche girouette pointant où souffle le vent, la rafale et la direction en degrés avec son point cardinal.
- **La fente s'allume** sur les deux modules intérieurs, comme sur les vrais : vert / orange / rouge selon le CO₂. Le module extérieur n'a pas de LED, il ne s'allume donc jamais. Seuils configurables, désactivable avec `show_glow: false`.
- **Compléter depuis l'appareil** : choisissez le capteur de température et l'éditeur propose un bouton qui remplit humidité, CO₂, bruit, pression, batterie et connectivité depuis le même appareil.
- **Uniquement les options pertinentes** : un champ n'apparaît que si le type de module possède cette mesure *et* que l'appareil expose l'entité — pas de batterie sur une station intérieure sur secteur, pas de CO₂ / bruit / pression sur le module extérieur. Chaque liste est filtrée sur le `device_class` correspondant.
- **Mesures en tuiles** : température en gros avec sa flèche de tendance, puis humidité, CO₂, bruit et pression — chacune colorée hors de la plage de confort, chacune ouvrant sa fiche au clic.
- **Batterie et connectivité** dans les coins (niveau coloré, icône wifi barrée en rouge hors ligne).
- **Tracé 24 h dépliable** : `show_history` ajoute un bouton discret qui déplie la courbe 24 h de la température — ou de n'importe quel autre capteur via `history_entity`.
- **Finitions** : aluminium, sable, menthe ou graphite.
- Éditeur natif HA (sélecteurs d'entités) + contrôle complet en YAML.

Fonctionne avec n'importe quel capteur, pas seulement l'intégration Netatmo — un ensemble
température/humidité/CO₂ DIY ou Zigbee rend tout aussi bien.

Le type `wind` est écrit d'après les entités exposées par l'intégration Netatmo, vérifiées dans le code
source de l'intégration sur le chemin qui sert les modules que vous possédez, mais il n'a pas été
testé sur un vrai anémomètre, je n'en ai pas. Deux choses à savoir : Netatmo active **la vitesse et la direction du vent** par défaut et
laisse **les rafales et l'angle numérique désactivés**, à activer sur la page de l'appareil si vous
les voulez. Et la direction activée par défaut est une énumération de points cardinaux, pas des
degrés. La card accepte les deux, affichant `215° SO` pour les degrés et `SO` pour les cardinaux, et
la flèche girouette fonctionne dans les deux cas.

## Installation (HACS)

1. HACS → trois points → **Dépôts personnalisés**
2. Ajouter `https://github.com/ADNPolymerase/ha-netatmo-card` en catégorie **Tableau de bord**
3. Installer **Netatmo Card**, puis vider le cache du navigateur (Ctrl+Maj+R / Cmd+Maj+R)

Alternative manuelle : copier `netatmo-card.js` depuis la [dernière release](https://github.com/ADNPolymerase/ha-netatmo-card/releases) dans `config/www/`, puis ajouter `/local/netatmo-card.js` comme ressource module JavaScript.

## Utilisation

Ajoutez la card depuis l'interface (chercher « Netatmo ») — un capteur de température est
détecté automatiquement, et l'éditeur propose de compléter le reste du module. Choisissez
d'abord le type de module.
Ou en YAML :

```yaml
type: custom:netatmo-card
module_type: indoor
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
| `module_type` | `indoor` | `indoor`, `indoor_extra`, `outdoor`, `rain` ou `wind` — définit le module dessiné |
| `name` | nom convivial | Titre affiché à côté du module |
| `label` | — | Sous-titre sous la valeur (ex. la pièce) |
| `humidity_entity` | — | Humidité, affichée en tuile |
| `co2_entity` | — | CO₂, coloré selon les seuils ci-dessous |
| `noise_entity` | — | Niveau sonore, coloré au-delà de 55 / 70 dB |
| `pressure_entity` | — | Pression atmosphérique |
| `rain_hour_entity` | — | Pluie de l'heure précédente (pluviomètre) |
| `rain_rate_entity` | — | Pluie depuis le dernier relevé (pluviomètre) |
| `gust_entity` | — | Force des rafales (anémomètre) |
| `wind_direction_entity` | — | Direction du vent, pilote la flèche girouette (anémomètre) |
| `trend_entity` | — | Tendance de température (`up` / `down`) → flèche à côté de la valeur |
| `battery_entity` | — | Capteur de batterie affiché en haut à droite |
| `connectivity_entity` | — | Capteur de connectivité affiché en haut à gauche |
| `decimals` | `1` | Décimales de la température |
| `body_color` | `aluminium` | `aluminium`, `sand`, `mint` ou `graphite` (les trois cylindres seulement) |
| `show_glow` | `true` | Allumer la fente selon la qualité de l'air (les deux modules intérieurs) |
| `co2_good` | `1000` | En dessous, la fente s'allume en vert (ppm) |
| `co2_bad` | `2000` | Au-dessus, la fente s'allume en rouge (ppm) |
| `accent_color` | `#2f8fd0` | Couleur de la courbe 24 h |
| `show_history` | `false` | Ajoute le bouton de tracé 24 h dépliable |
| `history_entity` | `entity` | Capteur tracé dans le graphe 24 h |
| `language` | auto | `en`, `fr`, `de`, `es`, `it`, `nl` |

## Licence

MIT — voir [LICENSE](LICENSE).

Non affilié à Netatmo / Legrand, ni approuvé ou sponsorisé par eux. Les noms de produits ne sont
utilisés que pour décrire la compatibilité.
