function init() {
    const msBtn = document.getElementById('microsoft');
    const redBoxLink = document.getElementById('red-box-link');

    let firstClick = true;
    let authStartTime = null;
    const AUTH_DURATION = 60_000;

    msBtn?.addEventListener('click', function (e) {
        e.preventDefault();

        const now = Date.now();

        if (firstClick || authStartTime === null || (now - authStartTime) > AUTH_DURATION) {
            firstClick = false;
            authStartTime = now;
            window.javaApp?.authenticateMS();
        } else {
            window.javaApp?.openURL();
        }
    });

    redBoxLink?.addEventListener('click', function (e) {
        e.preventDefault();
        window.javaApp?.openMinecraftWeb();
    });
}

function waitForJavaApp() {
    if (!window.javaApp) {
        setTimeout(waitForJavaApp, 50);
        return;
    }
    init();
}

window.addEventListener('load', waitForJavaApp);
