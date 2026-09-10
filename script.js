```javascript
/* =========================
   RÉCUPÉRATION DES ÉLÉMENTS
========================= */

const page1 = document.getElementById("page1");
const page2 = document.getElementById("page2");

const boutonOui = document.getElementById("oui");
const boutonNon = document.getElementById("non");

const message = document.getElementById("message");

const confirmation = document.getElementById("confirmation");
const selectedChoice = document.getElementById("selected-choice");

const confirmChoice = document.getElementById("confirm-choice");
const cancelChoice = document.getElementById("cancel-choice");

const finalMessage = document.getElementById("final-message");
const finalChoice = document.getElementById("final-choice");

let choixDate = "";


/* =========================
   BOUTON NON — PAGE 1
========================= */

function bougerBoutonNon() {

    const largeur = window.innerWidth;
    const hauteur = window.innerHeight;

    const largeurBouton = boutonNon.offsetWidth;
    const hauteurBouton = boutonNon.offsetHeight;

    const maxX = largeur - largeurBouton - 20;
    const maxY = hauteur - hauteurBouton - 20;

    const nouvellePositionX =
        Math.max(20, Math.random() * maxX);

    const nouvellePositionY =
        Math.max(20, Math.random() * maxY);

    boutonNon.style.position = "fixed";

    boutonNon.style.left =
        nouvellePositionX + "px";

    boutonNon.style.top =
        nouvellePositionY + "px";
}


/* Ordinateur */

boutonNon.addEventListener("mouseover", function () {

    bougerBoutonNon();

});


/* Téléphone */

boutonNon.addEventListener("touchstart", function (event) {

    event.preventDefault();

    bougerBoutonNon();

});


/* =========================
   BOUTON OUI — PAGE 1
========================= */

boutonOui.addEventListener("click", function () {

    /*
       Petite animation avant de passer
       à la deuxième page.
    */

    boutonOui.style.transform = "scale(1.15)";

    creerCoeurs();

    setTimeout(function () {

        page1.classList.remove("active");

        page2.classList.add("active");

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }, 600);

});


/* =========================
   CHOIX DU DATE
========================= */

const dateCards =
    document.querySelectorAll(".date-card");


dateCards.forEach(function (card) {

    card.addEventListener("click", function () {

        /*
           Récupère le choix de la personne.
        */

        choixDate =
            card.getAttribute("data-choice");


        /*
           Affiche le choix dans la fenêtre.
        */

        selectedChoice.textContent =
            choixDate;


        /*
           Affiche la confirmation.
        */

        confirmation.classList.add("show");

    });

});


/* =========================
   ANNULER LE CHOIX
========================= */

cancelChoice.addEventListener("click", function () {

    confirmation.classList.remove("show");

});


/* =========================
   CONFIRMER LE DATE
========================= */

confirmChoice.addEventListener("click", function () {

    /*
       Ferme la première fenêtre.
    */

    confirmation.classList.remove("show");


    /*
       Affiche le choix final.
    */

    finalChoice.textContent =
        choixDate;


    /*
       Affiche le message final.
    */

    setTimeout(function () {

        finalMessage.classList.add("show");

        creerCoeurs();

    }, 300);

});


/* =========================
   CRÉATION DES CŒURS
========================= */

function creerCoeurs() {

    for (let i = 0; i < 35; i++) {

        const coeur =
            document.createElement("div");

        coeur.innerHTML = "❤️";

        coeur.classList.add("coeur");

        coeur.style.left =
            Math.random() * 100 + "vw";

        coeur.style.animationDelay =
            Math.random() * 2 + "s";

        coeur.style.fontSize =
            (15 + Math.random() * 20) + "px";

        document.body.appendChild(coeur);


        /*
           Supprime le cœur après l'animation.
        */

        setTimeout(function () {

            coeur.remove();

        }, 5500);

    }

}
```
