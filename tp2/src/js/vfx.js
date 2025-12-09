// ==================== CODE JS DU VFX-JS POUR EFFET GLITCH SUR IMAGE ====================

import { VFX } from "vfx-js";

const vfx = new VFX();

const img = document.querySelector(".vfx-img");

vfx.add(img, {
    shader: "glitch",   
    overflow: 30
});
