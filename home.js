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

    document.getElementById('vyshaft')?.addEventListener('click', function() {
        changeBackground('https://aarondev-git.github.io/config/background.png');
        if (window.javaApp) window.javaApp.setVyshaft();
    });

    document.getElementById('hardcored')?.addEventListener('click', function() {
        changeBackground('https://aarondev-git.github.io/config/background2.png');
        if (window.javaApp) window.javaApp.setHardcored();
    });

    document.getElementById('play')?.addEventListener('click', function() {
        document.getElementById('progressBarContainer').style.display = 'block';
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

function updateProgressBar() {
    if (!window.javaApp) return;

    const a = window.javaApp.getA();
    const b = window.javaApp.getB();

    if (b > 0) {
        const percent = (a / b) * 100;
        progressBar.style.width = percent + '%';
    }
}

window.onload = () => {
    init();
    setAvatar();
}
