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
        changeBackground('https://aarondev-git.github.io/config/servers.png');
        if (window.javaApp) window.javaApp.setMineloot();
    });
    
    document.getElementById('bloodloot')?.addEventListener('click', function() {
        changeBackground('https://aarondev-git.github.io/config/background2.png');
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
    
    // Bouton low performance
    const lowPerfButton = document.getElementById('lowPerfButton');
    if (lowPerfButton) {
        lowPerfButton.addEventListener('click', function() {
        
            this.classList.toggle('active');
            const icon = this.querySelector('.checkbox-icon');
            if (this.classList.contains('active')) {
                icon.textContent = '☑'; // 
            } else {
                icon.textContent = '☐';
            }
            
            if (window.javaApp) window.javaApp.setLow();
        });
    }
}
window.onload = init;