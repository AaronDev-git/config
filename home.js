function init() {
    const current = document.querySelector('.bg.current');
    const next = document.querySelector('.bg.next');
    
    function changeBackground(url) {
        next.style.backgroundImage = `url("${url}")`;
        next.style.opacity = 1;
        setTimeout(() => {
            current.style.backgroundImage = `url("${url}")`;
            next.style.opacity = 0;
        }, 500);
    }
    
    // Boutons de navigation
    document.getElementById('mineloot')?.addEventListener('click', function() {
        changeBackground('../images/background.png');
        if (window.javaApp) window.javaApp.setMineloot();
    });
    
    document.getElementById('bloodloot')?.addEventListener('click', function() {
        changeBackground('../images/background2.png');
        if (window.javaApp) window.javaApp.setBloodloot();
    });
    
    document.getElementById('play')?.addEventListener('click', function() {
        if (window.javaApp) window.javaApp.startGame();
    });
    
    document.getElementById('settings')?.addEventListener('click', function() {
        if (window.javaApp) window.javaApp.setSettings();
    });
    
    document.getElementById('shop')?.addEventListener('click', function() {
        if (window.javaApp) window.javaApp.openShop();
    });
    
    document.getElementById('logout')?.addEventListener('click', function() {
        if (window.javaApp) window.javaApp.logOut();
    });
    
    // AJOUT : Checkbox pour les performances
    const lowPerfCheckbox = document.getElementById('lowPerfCheckbox');
    if (lowPerfCheckbox) {
        lowPerfCheckbox.addEventListener('change', function() {
            console.log('Checkbox changed:', this.checked);
            if (window.javaApp) window.javaApp.setLow();
        });
    }
}

window.onload = init;
