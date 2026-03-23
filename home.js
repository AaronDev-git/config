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

    let vcooldown = false; 
    let hcooldown = false; 

    document.getElementById('vyshaft')?.addEventListener('click', function() {
        if (vyshaftCooldown) return;

        changeBackground('https://aarondev-git.github.io/config/background.png');
        if (window.javaApp) window.javaApp.setVyshaft();

        vcooldown = true;
        
        setTimeout(() => {
            vcooldown = false;
        }, 500);
    });

    document.getElementById('hardcored')?.addEventListener('click', function() {
        if (hcooldown) return;
        
        changeBackground('https://aarondev-git.github.io/config/background2.png');
        if (window.javaApp) window.javaApp.setHardcored();

        hcooldown = true;

        setTimeout(() => {
            hcooldown = false;
        }, 500);
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

    document.getElementById('minestrator')?.addEventListener('click', function() {
            if (window.javaApp) window.javaApp.openMineStrator();
        });

}

function setAvatar() {
    const avatarImg = document.getElementById('userAvatar');
    if (!avatarImg) return;

    if (window.javaApp && window.javaApp.getAvatarUrl) {
        avatarImg.src = window.javaApp.getAvatarUrl();
    } else {
        setTimeout(setAvatar, 100);
    }
}

const progressBar = document.getElementById('progressBar');


window.onload = () => {
    init();
    setAvatar();
}
