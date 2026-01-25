
function init() {
    if (window.javaApp) {

         let firstClick = true;
        const msBtn = document.getElementById('microsoft');

        msBtn.addEventListener('click', function () {
            if (firstClick) {
                firstClick = false;
                window.javaApp.authenticateMS();
            } else {
                window.javaApp.openURL();
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

