// ===== IMPORTATION DE ZDOG (ANNEAU, HEMISPHERE ET CYLINDER) =====

import Zdog from "zzz";

// ===== TAILLE INTERNE DES CANVAS =====

function fixCanvas(id, size = 120) {
  const c = document.getElementById(id);
  c.width = size;
  c.height = size;
}

fixCanvas("zdog1", 120);
fixCanvas("zdog2", 120);
fixCanvas("zdog3", 120);

// ===== ZDOG #1 — ANNEAU ANIMÉ =====

const illo1 = new Zdog.Illustration({
  element: "#zdog1",
  dragRotate: false,
  scale: 1.8,
});

new Zdog.Ellipse({
  addTo: illo1,
  diameter: 40,
  stroke: 8,
  color: "#0dcaf0",
});

function animate1() {
  illo1.rotate.y += 0.01;
  illo1.rotate.x += 0.01;
  illo1.updateRenderGraph();
  requestAnimationFrame(animate1);
}
animate1();

// ===== ZDOG #2 — HEMISPHERE ANIMÉE =====

const illo2 = new Zdog.Illustration({
  element: "#zdog2",
  dragRotate: false,
  scale: 1.8,
});

new Zdog.Hemisphere({
  addTo: illo2,
  diameter: 40,
  stroke: false,
  color: "#0dcaf0",
  backface: "#9ceffcff",
});

function animate2() {
  illo2.rotate.y += 0.02;
  illo2.updateRenderGraph();
  requestAnimationFrame(animate2);
}
animate2();

// ===== ZDOG #3 — CYLINDER ANIMÉ =====

const illo3 = new Zdog.Illustration({
  element: "#zdog3",
  dragRotate: false,
  scale: 1.8,
});

new Zdog.Cylinder({
  addTo: illo3,
  diameter: 40,
  length: 50,
  stroke: false,
  color: "#0dcaf0",
  backface: "#9ceffcff",
});

function animate3() {
  illo3.rotate.y += 0.01;
  illo3.updateRenderGraph();
  requestAnimationFrame(animate3);
}
animate3();
