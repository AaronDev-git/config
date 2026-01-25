
function init() {
    if (window.javaApp) {

        const msBtn = document.getElementById('microsoft');
        let authStartTime = null;
        const AUTH_DURATION = 60000; 

        msBtn.addEventListener('click', function () {
            const now = Date.now();

            if (authStartTime === null || (now - authStartTime) > AUTH_DURATION) {
                authStartTime = now;
                window.javaApp.authenticateMS();
            } 
            else {
                window.javaApp.example();
            }
        });

    } else {
        console.error("L'objet Java n'est pas disponible.");
    }

     const emailInput = document.getElementById('email');
     emailInput.addEventListener('input', function() {
         emailInput.value = "Non disponible pour le moment";
     });
}

window.onload = init;


