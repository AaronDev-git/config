const ramSelect = document.getElementById("ram-select");
const selected = ramSelect.querySelector(".selected");
const optionsContainer = ramSelect.querySelector(".options");

// On simule la propriété `value` sur le div custom
ramSelect.value = "";

// Ouvrir/fermer le menu
selected.addEventListener("click", () => {
    optionsContainer.style.display = optionsContainer.style.display === "block" ? "none" : "block";
});

// Fermer si clic en dehors
document.addEventListener("click", (e) => {
    if (!ramSelect.contains(e.target)) {
        optionsContainer.style.display = "none";
    }
});

// --- Fonction appelée par Java ---
function initRamSelect(currentRam, maxRam) {
    // Nettoyer l’ancienne liste
    optionsContainer.innerHTML = "";

    // Ajouter dynamiquement les options jusqu'à maxRam
    for (let i = 1; i <= maxRam; i++) {
        const li = document.createElement("li");
        li.setAttribute("data-value", i);
        li.textContent = i + " Go";

        li.addEventListener("click", () => {
            selected.textContent = li.textContent;
            ramSelect.value = i;
            optionsContainer.style.display = "none";
        });

        optionsContainer.appendChild(li);
    }

    // Définir la valeur sélectionnée actuelle
    selected.textContent = currentRam + " Go";
    ramSelect.value = currentRam;
}

// --- Fonction sauvegarde RAM ---
function saveRam() {
    const val = document.getElementById("ram-select").value;
    if (window.javaApp) {
        window.javaApp.setRam(parseInt(val) * 1024);
    }
}

// --- Attacher le bouton ---
document.addEventListener("DOMContentLoaded", () => {
    const saveBtn = document.getElementById("save-btn");
    if (saveBtn) {
        saveBtn.addEventListener("click", () => {
            saveRam();
            if (window.javaApp) {
                window.javaApp.setApp();
            }
        });
    }
});
