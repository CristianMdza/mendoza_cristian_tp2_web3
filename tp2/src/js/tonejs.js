/* ==================== CODE JS POUR LE TONE.JS ==================== */

import * as Tone from "tone.js";

const btn = document.getElementById("toneBtn");

if (!btn) {
    console.warn("⚠ Bouton toneBtn introuvable");
}

let player = null;
let isPlaying = false;

/* INITIALISATION AUDIO */
async function initPlayer() {
    await Tone.start();

    player = new Tone.Player({
        url: "../assets/audio/amb-trafic-ville-23900_HyiRxpey.mp3",
        loop: false,
        volume: -6
    }).toDestination();

    await player.load();

    console.log("Audio chargé");
}

/* ==================== GESTIONNAIRE DE CLIC SUR BOUTON PLAY/STOP ==================== */
btn.addEventListener("click", async () => {

    if (!player) {
        await initPlayer();
    }

    /* STOP */
    if (isPlaying) {
        player.stop();
        btn.classList.remove("playing");
        isPlaying = false;
        return;
    }

    /* PLAY */
    btn.classList.add("playing");
    player.start();
    isPlaying = true;

    player.onstop = () => {
        btn.classList.remove("playing");
        isPlaying = false;
    };
});
