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

        const playBtn = document.getElementById('play');
        const log = document.getElementById('downloadLog');
        if (url.includes('background2')) {
            playBtn.disabled = true;
            playBtn.style.opacity = '0.4';
            playBtn.style.cursor = 'not-allowed';
            log.textContent = "Prochainement ...";
        } else {
            playBtn.disabled = false;
            playBtn.style.opacity = '1';
            playBtn.style.cursor = 'pointer';
            log.textContent = "";
        }
    }

    let navbarLocked = false;

    window.setNavbarLocked = function(locked) {
        navbarLocked = locked;
    };

    let cooldown = false; 

    document.getElementById('vyshaft')?.addEventListener('click', function() {
        if (cooldown || navbarLocked) return;

        changeBackground('https://aarondev-git.github.io/config/background.png');
        if (window.javaApp) window.javaApp.setVyshaft();

        cooldown = true;
        
        setTimeout(() => {
            cooldown = false;
        }, 500);
    });

    document.getElementById('hardcored')?.addEventListener('click', function() {
        if (cooldown || navbarLocked) return;
        
        changeBackground('https://aarondev-git.github.io/config/background2.png');
        if (window.javaApp) window.javaApp.setHardcored();

        cooldown = true;

        setTimeout(() => {
            cooldown = false;
        }, 500);
    });

    document.getElementById('play')?.addEventListener('click', function() {
        if (navbarLocked) return;
        if (window.javaApp) window.javaApp.startGame();
    });

    document.getElementById('settings')?.addEventListener('click', function() {
        if (navbarLocked) return;
        if (window.javaApp) window.javaApp.setSettings();
    });

    document.getElementById('shop')?.addEventListener('click', function() {
        if (navbarLocked) return;
        if (window.javaApp) window.javaApp.openShop();
    });

    document.getElementById('minestrator')?.addEventListener('click', function() {
        if (navbarLocked) return;
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
