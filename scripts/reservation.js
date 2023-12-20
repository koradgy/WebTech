document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("urlapForm");
    const nev = document.getElementById("nev");
    const marg = document.getElementById("margID");
    const pep = document.getElementById("pepID");
    const nevError = document.createElement("span");
    const radioError = document.createElement("span");

    nevError.id = "nev-error";
    nevError.className = "error-message";
    nev.insertAdjacentElement("afterend", nevError);

    radioError.id = "radio-error";
    radioError.className = "error-message";
    marg.insertAdjacentElement("afterend", radioError);
    pep.insertAdjacentElement("afterend", radioError);

    const pizza = document.getElementsByName("pizza");
    const datum = document.getElementById("datum");

    function showError(elem, message) {
        elem.textContent = message;
        elem.style.opacity = "0";
        elem.style.transition = "opacity 0.3s";
        setTimeout(() => {
            elem.style.opacity = "1";
        }, 10);
    }

    form.addEventListener("submit", function (event) {
        let valid = true;

        if (!nev.value.trim()) {
            valid = false;
            showError(nevError, "  Kérjük, adja meg a nevét!");
            nev.style.border = "2px solid red";
        } else {
            nevError.textContent = "";
            nev.style.border = "1px solid black";
        }

        let selectedpizza = false;
        for (let i = 0; i < pizza.length; i++) {
            if (pizza[i].checked) {
                selectedpizza = true;
                break;
            }
        }
        if (!selectedpizza) {
            valid = false;
            showError(radioError, "Kérjük válasszon az alábbi opciók közül!");
        }

        // Dátum ellenőrzése
        if (!datum.value) {
            valid = false;
            datum.style.border = "2px solid red";
        } else {
            datum.style.border = "1px solid black";
        }

        if (!valid) {
            event.preventDefault();
        }
    });


    let allInputs = document.getElementsByTagName("input"); 
    let errorMessages = document.getElementsByClassName("error-message"); 
    let specificElem = document.getElementById("nev"); 
});