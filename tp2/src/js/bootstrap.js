// ===== GESTION DES CLICS SUR LES ICÔNES HUD =====

const buttons = document.querySelectorAll('.hud-btn');

buttons.forEach(btn => {

    btn.addEventListener('click', () => {
        const label = btn.dataset.label;
        console.log("HUD ACTION:", label);
    });

});
