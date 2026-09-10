```javascript
/* =========================
   ÉLÉMENTS DU SITE
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


/* Choix de date */

let choixDate = "";


/* =========================
   BOUTON NON
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
   BOUTON OUI
========================= */

boutonOui.addEventListener("click", function () {

    /*
       On cache les deux premiers boutons.
    */

    boutonOui.style.display = "none";

    boutonNon.style.display = "none";


    /*
       On affiche le message.
    */

    message.style.display = "block";


    /*
       Petite pluie de cœurs.
    */

    creerCoeurs();

});


/* =========================
   DÉCOUVRIR LA SUITE
========================= */

boutonSuite.addEventListener("click", function () {

    /*
       On fait disparaître la page 1.
    */

    page1.classList.remove("active");


    /*
       On affiche la page 2.
    */

    page2.classList.add("active");


    /*
       On remonte en haut de la page.
    */

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


/* =========================
   CHOIX DU DATE
========================= */

const dateCards =
    document.querySelectorAll(".date-card");


dateCards.forEach(function (card) {

    card.addEventListener("click", function () {

        /*
           On récupère le choix.
        */

        choixDate =
            card.getAttribute("data-choice");


        /*
           On affiche le choix dans
           la fenêtre de confirmation.
        */

        selectedChoice.textContent =
            choixDate;


        /*
           On ouvre la fenêtre.
        */

        confirmation.classList.add("show");

    });

});


/* =========================
   BOUTON "JE CHANGE"
========================= */

cancelChoice.addEventListener("click", function () {

    confirmation.classList.remove("show");

});


/* =========================
   CONFIRMER LE CHOIX
========================= */

confirmChoice.addEventListener("click", function () {

    /*
       Ferme la confirmation.
    */

    confirmation.classList.remove("show");


    /*
       Met le choix dans le message final.
    */

    finalChoice.textContent =
        choixDate;


    /*
       Petit délai avant l'affichage.
    */

    setTimeout(function () {

        finalMessage.classList.add("show");

        creerCoeurs();

    }, 300);

});


/* =========================
   CRÉER DES CŒURS
========================= */

function creerCoeurs() {

    for (let i = 0; i < 35; i++) {

        const coeur =
            document.createElement("div");

        coeur.innerHTML = "❤️";

        coeur.classList.add("coeur");


        /*
           Position horizontale aléatoire.
        */

        coeur.style.left =
            Math.random() * 100 + "vw";


        /*
           Délai aléatoire.
        */

        coeur.style.animationDelay =
            Math.random() * 2 + "s";


        /*
           Taille aléatoire.
        */

        coeur.style.fontSize =
            (15 + Math.random() * 20) + "px";


        document.body.appendChild(coeur);


        /*
           Supprime le cœur après
           l'animation.
        */

        setTimeout(function () {

            coeur.remove();

        }, 5500);

    }

}
```
