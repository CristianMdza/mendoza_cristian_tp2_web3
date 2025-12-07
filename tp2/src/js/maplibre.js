// CODE POUR LA CARTE MAPLIBRE VERSION "GLOBE 3D" AVEC ROTATION AUTOMATIQUE

import maplibregl from "maplibre-gl";

const carte = new maplibregl.Map({
  container: "carte",
  style: "https://tiles.openfreemap.org/styles/bright",
  center: [0, 0],
  zoom: 1,
  bearing: 0,
  pitch: 0,
  attributionControl: false
});

carte.on("style.load", () => {
  carte.setProjection({ type: "globe" });
});

// CONTRÔLES (ZOOM - ROTATION)
carte.addControl(new maplibregl.NavigationControl());

// ANIMATION AUTOMATIQUE DE ROTATION DU GLOBE
const speed = 15;  
let lastTime = 0;

function rotate(timestamp) {
  if (!lastTime) lastTime = timestamp;
  const elapsed = (timestamp - lastTime) / 1000;
  lastTime = timestamp;

  const center = carte.getCenter();
  center.lng += speed * elapsed;

  if (center.lng > 180) center.lng -= 360;

  carte.setCenter(center);
  requestAnimationFrame(rotate);
}

requestAnimationFrame(rotate);
