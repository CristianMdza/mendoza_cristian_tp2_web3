// ==================== CODE CHART.JS - POUR "GRAPHIQUE RADAR" COLONNE DROITE ====================

// IMPORT LOCAL SELON DANS MON IMPORTMAP    
import Chart from "chart.js/auto";

// RÉFÉRENCE AU CANVAS
const canvas = document.getElementById("radarChart");

if (!canvas) {
    console.warn("⚠ Canvas radarChart introuvable.");
}

// GRAPHIQUE RADAR — GENRES MUSICAUX PAR TRANCHE D'ÂGE
const graphique = new Chart(canvas, {
    type: "radar",
    // DONNÉES DU GRAPHIQUE RADAR
    data: {
        labels: [
            "Bruit",
            "Trafic",
            "Flux piéton",
            "Activité commerciale",
            "Connexions mobiles",
            "Éclairage"
        ],
        // VALEURS PAR TRANCHE D'ÂGE
        datasets: [
            {
                label: "Centre-Ville",
                data: [42, 44, 46, 39, 45, 36],
                backgroundColor: "rgba(255,80,80,0.25)",
                pointBackgroundColor: "rgba(255,80,80,1)",
                borderWidth: 0
            },

            {
                label: "Plateau Mont-Royal",
                data: [27, 20, 34, 30, 32, 35],
                backgroundColor: "rgba(80,255,140,0.25)",
                pointBackgroundColor: "rgba(80,255,140,1)",
                borderWidth: 0
            },

            {
                label: "Vieux-Montréal",
                data: [18, 14, 22, 24, 20, 31],
                backgroundColor: "rgba(80,160,255,0.25)",
                pointBackgroundColor: "rgba(80,160,255,1)",
                borderWidth: 0
            }
        ]
    },
    // OPTIONS DE STYLISATION
    options: {
        responsive: true,
        maintainAspectRatio: false,

        layout: {
            padding: {
                top: 0,
                bottom: 10,
                left: 4,
                right: 4
            }
        },
        
        plugins: {
            tooltip: {
                enabled: false
            },
            // TITRE DE LA GRAPHIQUE RADAR
            title: {
                display: true,
                text: "Niveaux d'activité urbaine — Montréal",
                color: "#8df7ff",

                font: {
                    family: "Eurostile",
                    size: 13,
                    weight: "500"
                }
            },
            // LÉGENDE
            legend: {
                position: "top",

                labels: {
                    boxWidth: 13,
                    boxHeight: 13,
                    padding: 6,

                    color: "#bff6ff",
                    font: {
                        family: "Eurostile",
                        size: 11
                    }
                }
            }
        },
        // CONFIGURATION DES AXES
        scales: {
            r: {
                angleLines: {
                    color: "rgba(222,222,222,0.1)"
                },

                grid: {
                    circular: false,
                    color: "rgba(222,222,222,0.1)"
                },

                ticks: {
                    color: "#8df7ff",
                    showLabelBackdrop: false,
                    stepSize: 10,

                    font: {
                        family: "Eurostile",
                        size: 8
                    }
                },

                pointLabels: {
                    color: "#25e7ff",

                    font: {
                        family: "Eurostile",
                        size: 10
                    }
                }
            }
        }
    }
});


// ==================== ANIMATION DE MISES À JOUR DES DONNÉES TOUTES LES 1s ====================
setInterval(() => {
  for (let ds of graphique.data.datasets) {
    for (let i = 0; i < ds.data.length; i++) {
      ds.data[i] += Math.round(Math.random() * 6 - 3);
    }
  }

  graphique.update();
}, 1000);
