window.onload = function () {

    // =========================
    // PAGE 1
    // =========================

    const oui = document.getElementById("oui");
    const non = document.getElementById("non");
    const message = document.getElementById("message");
    const suite = document.getElementById("suite");

    const page1 = document.getElementById("page1");
    const page2 = document.getElementById("page2");


    // =========================
    // PAGE 2 / POPUP
    // =========================

    const dateCards = document.querySelectorAll(".date-card");

    const confirmation = document.getElementById("confirmation");
    const selectedChoice = document.getElementById("selected-choice");

    const confirmChoice = document.getElementById("confirm-choice");
    const cancelChoice = document.getElementById("cancel-choice");

    const finalMessage = document.getElementById("final-message");
    const finalChoice = document.getElementById("final-choice");


    let chosenDate = "";


    console.log("JS CHARGÉ ❤️");


    // =========================
    // BOUTON OUI
    // =========================

    oui.onclick = function () {

        console.log("OUI CLIQUÉ ❤️");

        oui.style.display = "none";
        non.style.display = "none";

        message.style.display = "block";
    };


    // =========================
    // BOUTON NON
    // =========================

    non.onmouseenter = function () {

        const x = Math.random() * (window.innerWidth - non.offsetWidth - 20);
        const y = Math.random() * (window.innerHeight - non.offsetHeight - 20);

        non.style.position = "fixed";
        non.style.left = Math.max(10, x) + "px";
        non.style.top = Math.max(10, y) + "px";
        non.style.zIndex = "9999";
    };


    // =========================
    // BOUTON SUITE
    // =========================

    suite.onclick = function () {

        console.log("SUITE CLIQUÉE ❤️");

        page1.classList.remove("active");
        page2.classList.add("active");

        window.scrollTo(0, 0);
    };


    // =========================
    // CHOIX D'UNE DATE
    // =========================

    dateCards.forEach(function (card) {

        card.onclick = function () {

            chosenDate = card.dataset.choice;

            console.log("DATE CHOISIE :", chosenDate);

            selectedChoice.textContent = chosenDate;

            confirmation.classList.add("show");
        };

    });


    // =========================
    // ANNULER LE CHOIX
    // =========================

    cancelChoice.onclick = function () {

        console.log("CHOIX ANNULÉ");

        confirmation.classList.remove("show");

        chosenDate = "";
    };


    // =========================
    // CONFIRMER LE CHOIX
    // =========================

    confirmChoice.onclick = function () {

        console.log("DATE CONFIRMÉE ❤️ :", chosenDate);

        confirmation.classList.remove("show");

        finalChoice.textContent = chosenDate;

        finalMessage.classList.add("show");

        lancerCoeurs();
    };


    // =========================
    // CŒURS QUI TOMBENT
    // =========================

    function lancerCoeurs() {

        for (let i = 0; i < 25; i++) {

            setTimeout(function () {

                const coeur = document.createElement("div");

                coeur.classList.add("coeur");

                coeur.textContent = "❤️";

                coeur.style.left = Math.random() * 100 + "vw";

                coeur.style.animationDuration =
                    (3 + Math.random() * 3) + "s";

                coeur.style.fontSize =
                    (15 + Math.random() * 20) + "px";

                document.body.appendChild(coeur);


                setTimeout(function () {
                    coeur.remove();
                }, 6000);

            }, i * 120);
        }
    }

};
