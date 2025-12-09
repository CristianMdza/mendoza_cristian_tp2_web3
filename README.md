# mendoza_cristian_tp2_web3

# TP2 — Interface de visière futuriste (Web 3)

**Nom :** Cristian Mendoza  
**Cours :** Web 3 — 582311MO  
**Enseignant :** Jean-François Cartier  
**Programme :** Techniques d’Intégration Multimédia  
**Collège :** Montmorency  
**Session :** Automne 2025  

---
##  Sommaire

- [ Description du projet](#-description-du-projet)
- [ Direction artistique](#-direction-artistique)
- [ Structure & Mise en page](#-structure--mise-en-page)
- [ Technologies utilisées](#️-technologies-utilisées)
  - [CSS Grid](#css-grid)
  - [Bootstrap Icons](#bootstrap-icons)
  - [Chart.js](#chartjs)
  - [MapLibre](#maplibre)
  - [ZDog](#zdog)
  - [VFX-JS](#vfx-js)
  - [Tone.js](#tonejs)
- [ Contenu média](#️-contenu-média)
  - [Images VFX](#images-vfx)
  - [Carrousel d’images (Pixabay)](#carrousel-dimages-pixabay)
- [ Données graphiques](#-données-graphiques)
- [ Résultat attendu](#-résultat-attendu)
- [ Auteur](#-auteur)

---

##  Description du projet

Ce projet consiste à concevoir une **interface interne de visière de casque futuriste**, inspirée de l’univers de **Halo**.  
La visière simule un système d’analyse urbaine en temps réel du **centre-ville de Montréal** à l’aide de modules visuels interactifs :

- Carte 3D de géolocalisation (MapLibre)
- Détection sonore avec visualisation audio (Tone-JS)
- Reconnaissance faciale (Vfx-JS)
- Objets géométriques 3D abstraits (Zdog)
- Données graphiques animées (Chart-JS)
- Carrousel d’images de lieux emblématiques (Bootstrap)

L’ensemble crée une **expérience immersive de surveillance, d’analyse et de reconnaissance urbaine futuriste**.

---

##  Direction artistique

**Inspiration principale**  
- HUD et visières futuristes du jeu **Halo**

**Palette de couleurs**
- Bleu turquoise : foncé, normal, pâle  
- Blanc  
- Noir  

**Typographies**
- **Eurostile** — utilisée comme police (choix final)

---

##  Structure & Mise en page

L’interface repose sur une **grille CSS en trois colonnes**, chacune composée de **trois placeholders verticaux** :


Tous les modules interactifs s’intègrent dans cette grille globale.

---

##  Technologies utilisées

### CSS Grid  
**Emplacement :** Structure complète de la page  
**Rôle :**
- Organisation des trois colonnes principales
- Positionnement précis de tous les modules visuels

---

### Bootstrap Icons  
**Emplacement :**  
- Colonne centrale — Placeholder haut

**Rôle :**
- Barre d’icônes HUD interactives représentant les fonctions de la visière :
  - Géolocalisation  
  - Reconnaissance faciale  
  - Température  
  - Analyse de données  
  - Détection sonore  
  - Intelligence artificielle

---

### Chart.js  
**Emplacement :**
- Colonne gauche — Placeholder bas : **Graphique polaire**
- Colonne droite — Placeholder bas : **Graphique radar**

**Rôle :**

- **Graphique polaire**  
  Représente la **répartition linguistique de Montréal** en pourcentage :
  - Français  
  - Anglais  
  - Arabe  
  - Espagnol  
  - Mandarin  
  - Autres  

- **Graphique radar**  
  Analyse de l’**activité urbaine** dans différents secteurs :
  - Centre-ville  
  - Plateau Mont-Royal  
  - Vieux-Montréal  

  Critères mesurés :
  - Bruit  
  - Éclairage  
  - Trafic  
  - Flux piéton  
  - Connexions mobiles  
  - Activité commerciale  

Chaque graphique possède :
- Son propre `<canvas>`
- Son propre fichier JavaScript indépendant

---

### MapLibre  
**Emplacement :**
- Colonne centrale — Placeholder centre

**Rôle :**
- Affichage d’un **globe 3D interactif**
- Illustration de la géolocalisation analysée par la visière

---

### ZDog  
**Emplacement :**
- Colonne gauche — Placeholder centre

**Rôle :**
- Génération de **formes géométriques 3D abstraites**, représentant des structures urbaines détectées :

| Forme 3D | Équivalent réel |
|----------|------------------|
| Anneau   | Sculpture d'Anneau à la **Place Ville-Marie** |
| Hémisphère | **Biosphère de Montréal** |
| Cône     | Silhouettes pointues de gratte-ciels comme la Tour **Le 1000** |

La visière transforme ainsi l’architecture réelle en visualisation abstraite futuriste.

---

### VFX-JS  
**Emplacement :**
- Colonne gauche — Placeholder haut

**Rôle :**
- Effet holographique et glitch appliqué sur l’image de **Leonard Cohen**
- Simulation d’un panneau électronique relié au système de reconnaissance faciale

---

### Tone.js  
**Emplacement :**
- Colonne droite — Placeholder centre

**Rôle :**
- Lecture et analyse de sons urbains simulés
- Transformation de l’audio en **visualisation dynamique**
- Lancement via un bouton interactif

**Source sonore :**
- Extrait « *amb-trafic-ville-23900_HyixRpey.mp3* » (Pixabay)
- Audio raccourci pour le projet

---

##  Contenu média

### Images VFX

- **Leonard Cohen — murale de Montréal**  
  Source : ombrages.com

---

### Carrousel d’images (Pixabay)

4 images libres de droits (1280 × 720 px) :

1. Basilique Notre-Dame de Montréal  
2. Biosphère de Montréal  
3. Tour de l’Horloge  
4. Jardin japonais du Jardin botanique

Les images défilent via un **carrousel interactif (Swiper/Bootstrap)** intégré dans l’interface de la visière.

---

##  Données graphiques

> Les données utilisées dans les graphiques **sont fictives**.  
Elles simulent des statistiques qui seraient collectées et analysées par un véritable système futuriste de surveillance urbaine.

---

##  Résultat attendu

L’interface finale offre :

- Une lecture fluide et immersive du HUD futuriste
- Une intégration cohérente des modules :
  - Carte 3D
  - Objets ZDog
  - VFX
  - Tonalisation audio
  - Graphiques animés
  - Carrousel d’images

Le tout constitue une **expérience interactive complète** explorant la ville de Montréal à travers une visière de science-fiction.

---

##  Auteur

**Cristian Mendoza**  
Étudiant en Techniques d’Intégration Multimédia  
Collège Montmorency  
Session A2025


