```javascript
document.addEventListener("DOMContentLoaded", function () {

    /* =========================
       RÉCUPÉRATION DES ÉLÉMENTS
    ========================= */

    const page1 = document.getElementById("page1");
    const page2 = document.getElementById("page2");

    const boutonOui = document.getElementById("oui");
    const boutonNon = document.getElementById("non");

    const message = document.getElementById("message");
    const boutonSuite = document.getElementById("suite");

    const confirmation = document.getElementById("confirmation");
    const selectedChoice = document.getElementById("selected-choice");

    const confirmChoice = document.getElementById("confirm-choice");
    const cancelChoice = document.getElementById("cancel-choice");

    const finalMessage = document.getElementById("final-message");
    const finalChoice = document.getElementById("final-choice");


    /* =========================
       VÉRIFICATION
    ========================== */

    console.log("Site chargé ❤️");


    /* =========================
       BOUTON NON
    ========================== */

    function bougerNon() {

        const maxX = window.innerWidth - boutonNon.offsetWidth - 20;
        const maxY = window.innerHeight - boutonNon.offsetHeight - 20;

        const x = Math.random() * Math.max(maxX, 20);
        const y = Math.random() * Math.max(maxY, 20);

        boutonNon.style.position = "fixed";
        boutonNon.style.left = x + "px";
        boutonNon.style.top = y + "px";
        boutonNon.style.zIndex = "9999";
    }


    /* Sur ordinateur */

    boutonNon.addEventListener("mouseenter", function () {
        bougerNon();
    });


    /* Sur téléphone */

    boutonNon.addEventListener("touchstart", function (event) {

        event.preventDefault();

        bougerNon();

    });


    /* =========================
       BOUTON OUI
    ========================== */

    boutonOui.addEventListener("click", function () {

        console.log("Bouton OUI cliqué ❤️");


        /* Cache Oui et Non */

        boutonOui.style.display = "none";
        boutonNon.style.display = "none";


        /* Affiche le message */

        message.style.display = "block";


        /* Cœurs */

        creerCoeurs();

    });


    /* =========================
       DÉCOUVRIR LA SUITE
    ========================== */

    boutonSuite.addEventListener("click", function () {

        console.log("Page 2 ❤️");


        /* Page 1 disparaît */

        page1.classList.remove("active");


        /* Page 2 apparaît */

        page2.classList.add("active");


        /* Retour en haut */

        window.scrollTo(0, 0);

    });


    /* =========================
       CHOIX DES DATES
    ========================== */

    const dateCards =
        document.querySelectorAll(".date-card");


    dateCards.forEach(function (card) {

        card.addEventListener("click", function () {

            choixDate =
                card.getAttribute("data-choice");

            selectedChoice.textContent =
                choixDate;

            confirmation.classList.add("show");

        });

    });


    let choixDate = "";


    /* =========================
       ANNULER LE CHOIX
    ========================== */

    cancelChoice.addEventListener("click", function () {

        confirmation.classList.remove("show");

    });


    /* =========================
       CONFIRMER
    ========================== */

    confirmChoice.addEventListener("click", function () {

        confirmation.classList.remove("show");

        finalChoice.textContent =
            choixDate;

        setTimeout(function () {

            finalMessage.classList.add("show");

            creerCoeurs();

        }, 300);

    });


    /* =========================
       CŒURS
    ========================== */

    function creerCoeurs() {

        for (let i = 0; i < 35; i++) {

            const coeur =
                document.createElement("div");

            coeur.textContent = "❤️";

            coeur.classList.add("coeur");

            coeur.style.left =
                Math.random() * 100 + "vw";

            coeur.style.animationDelay =
                Math.random() * 2 + "s";

            coeur.style.fontSize =
                (15 + Math.random() * 20) + "px";

            document.body.appendChild(coeur);


            setTimeout(function () {

                coeur.remove();

            }, 5500);

        }

    }

});
```
