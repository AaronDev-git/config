
function init() {
    if (window.javaApp) {

        document.getElementById('microsoft').addEventListener('click', function() {
            window.javaApp.authenticateMS();

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
