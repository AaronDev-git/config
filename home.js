function init() {
    const current = document.querySelector('.bg.current');
    const next = document.querySelector('.bg.next');

    function changeBackground(url) {
        // définit la nouvelle image sur le div "next"
        next.style.backgroundImage = `url("${url}")`;
        next.style.opacity = 1; // fondu

        // après le fondu, swap les divs
        setTimeout(() => {
            current.style.backgroundImage = `url("${url}")`;
            next.style.opacity = 0; // cache next
        }, 500); // 500ms = durée du transition
    }

    document.getElementById('mineloot').addEventListener('click', function() {
        changeBackground('../images/background.png');
    });

    document.getElementById('bloodloot').addEventListener('click', function() {
        changeBackground('../images/background2.png');
    });

    document.getElementById('play').addEventListener('click', function() {
        if (window.javaApp) window.javaApp.startGame();
    });
}

window.onload = init;
