const ramSelect = document.getElementById("ram-select");
const selected = ramSelect.querySelector(".selected");
const optionsContainer = ramSelect.querySelector(".options");

ramSelect.value = "";

selected.addEventListener("click", () => {
    optionsContainer.style.display = optionsContainer.style.display === "block" ? "none" : "block";
});

document.addEventListener("click", (e) => {
    if (!ramSelect.contains(e.target)) {
        optionsContainer.style.display = "none";
    }
});

function initRamSelect(currentRam, maxRam) {
    optionsContainer.innerHTML = "";

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

    selected.textContent = currentRam + " Go";
    ramSelect.value = currentRam;
}

function saveRam() {
    const val = document.getElementById("ram-select").value;
    if (window.javaApp) {
        window.javaApp.setRam(parseInt(val) * 1024);
    }
}

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

