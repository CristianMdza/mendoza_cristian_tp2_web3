// ==================== CODE CHART.JS - POUR "GRAPHIQUE POLAIRE" COLONNE GAUCHE ====================

// IMPORT LOCAL SELON DANS MON IMPORTMAP
import Chart from "chart.js/auto";

// RÉFÉRENCE AU CANVAS
const canvas = document.getElementById("polarChart");

if (!canvas) {
    console.warn("⚠ Canvas polarChart introuvable.");
}

// GRAPHIQUE POLAIRE — LANGUES À MONTRÉAL
const graphique = new Chart(canvas, {
    type: "polarArea",
    // DONNÉES DU GRAPHIQUE POLAIRE
    data: {
        labels: [
            "Français",
            "Anglais",
            "Arabe",
            "Espagnol",
            "Mandarin",
            "Autres"
        ],
        //  VALEURS EN POURCENTAGES
        datasets: [
            {
                data: [48, 22, 9, 8, 6, 7],

                backgroundColor: [
                    // FRANÇAIS
                    "rgba(80,200,255,0.55)", 
                    // ANGLAIS   
                    "rgba(120,160,255,0.55)", 
                    // ARABE 
                    "rgba(255,170,70,0.55)", 
                    // ESPAGNOL  
                    "rgba(255,90,90,0.55)",  
                    // MANDARIN  
                    "rgba(190,100,255,0.55)", 
                    // AUTRES 
                    "rgba(140,255,180,0.55)"   
                ],

                borderWidth: 0
            }
        ]
    },
    // OPTIONS DE STYLISATION
    options: {
        responsive: true,
        maintainAspectRatio: false,

        layout: {
            padding: 2          
        },

        elements: {
            arc: {
                borderWidth: 0
            }
        },

        plugins: {

            // TITRE DE LA GRAPHIQUE POLAIRE 
            title: {
                display: true,
                text: "Répartition linguistique en % — Montréal",
                color: "#8df7ff",

                font: {
                    family: "Eurostile",
                    size: 13,     
                    weight: "500"
                },
                
                padding: {
                    bottom: 2    
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
                beginAtZero: true,

                grid: {
                    color: "rgba(37,231,255,0.14)"
                },

                angleLines: {
                    color: "rgba(37,231,255,0.2)"
                },

                ticks: {
                    stepSize: 10,
                    backdropColor: "transparent",

                    
                    callback: function(value) {
                        return value + " %";
                    },

                    color: "#bff6ff",
                    font: {
                        family: "Eurostile",
                        size: 8        
                    }
                },

                pointLabels: {
                    display: false
                }
            }
        }
    }
});


// ==================== ANIMATION DE MISES À JOUR DES DONNÉES TOUTES LES 1.3s ====================

// DONNÉES DE BASE
const baseData = [48, 22, 9, 8, 6, 7];

setInterval(() => {

    graphique.data.datasets.forEach(dataset => {

        dataset.data = baseData.map((value) => {

            // FACTEUR DE VARIATION ALÉATOIRE ENTRE -4 ET +4 
            const variationFactor = 1 + (Math.random() * 0.08 - 0.04);

            // NOUVELLE VALEUR ARRONDIE
            const newValue = Math.round(value * variationFactor);

            return newValue;
        });
    });

    graphique.update();

}, 1000);

