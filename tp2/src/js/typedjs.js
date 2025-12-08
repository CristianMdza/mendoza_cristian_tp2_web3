// CODE TYPEDJS POUR L'AFFICHAGE DU TEXTE ANIMÉ DANS LE HUD

import Typed from "typed.js";

const titleText = "Montréal, Québec";

const dataText = 
`Température: -12°C
Langues: Français / Anglais
Population: 2.2M
Signaux urbains: Actifs
Reconnaissance faciale: Activée`;

let typedTitle = null;
let typedData = null;

/* FONCTION "LOOP" DE DÉMARRAGE DE LA SÉQUENCE TYPEDJS */

function startSequence() {

  // DÉTRUIT LES INSTANCES PRÉCÉDENTES
  if (typedTitle) typedTitle.destroy();
  if (typedData) typedData.destroy();

  // RESET DU HTML, VIDE LE PLACEHOLDER
  document.querySelector("#typed-title").textContent = "";
  document.querySelector("#typed-info").textContent = "";

  /* TITRE PRINCIPAL */
  typedTitle = new Typed("#typed-title", {

    strings: [titleText],
    typeSpeed: 60,
    showCursor: false,
    loop: false,

    onComplete: () => {

      /* DONNÉES INFO */
      typedData = new Typed("#typed-info", {

        strings: [dataText],
        typeSpeed: 28,

        backSpeed: 20,
        backDelay: 2000,

        showCursor: true,
        cursorChar: "▌",
        loop: false,

        onComplete: () => {
          setTimeout(startSequence, 1500);
        }

      });

    }

  });
}

/* DÉMARRAGE DE LA SÉQUENCE */
startSequence();
