// Bouton "Oui"
const boutonOui = document.getElementById("oui");

// Bouton "Non"
const boutonNon = document.getElementById("non");

// Message qui apparaît après avoir cliqué sur "Oui"
const message = document.getElementById("message");

// Le bouton "Non" bouge quand on essaie de passer dessus
boutonNon.addEventListener("mouseover", function () {

    // Taille de la fenêtre
    const largeur = window.innerWidth;
    const hauteur = window.innerHeight;

    // Position aléatoire
    const nouvellePositionX = Math.random() * (largeur - boutonNon.offsetWidth - 40) + 20;
    const nouvellePositionY = Math.random() * (hauteur - boutonNon.offsetHeight - 40) + 20;

    // Déplacement du bouton
    boutonNon.style.position = "fixed";
    boutonNon.style.left = nouvellePositionX + "px";
    boutonNon.style.top = nouvellePositionY + "px";
});

// Sur téléphone : le bouton bouge lorsqu'elle essaie de le toucher
boutonNon.addEventListener("touchstart", function (event) {

    event.preventDefault();

    const largeur = window.innerWidth;
    const hauteur = window.innerHeight;

    const nouvellePositionX = Math.random() * (largeur - boutonNon.offsetWidth - 40) + 20;
    const nouvellePositionY = Math.random() * (hauteur - boutonNon.offsetHeight - 40) + 20;

    boutonNon.style.position = "fixed";
    boutonNon.style.left = nouvellePositionX + "px";
    boutonNon.style.top = nouvellePositionY + "px";
});

// Quand elle clique sur "Oui"
boutonOui.addEventListener("click", function () {

    message.innerHTML = "🥰 Je savais que tu dirais oui ! ❤️<br><br>Prépare-toi pour notre date... ✨";

    message.style.display = "block";

    // Cache les boutons
    boutonOui.style.display = "none";
    boutonNon.style.display = "none";

    // Petits cœurs qui tombent
    creerCoeurs();
});


// Fonction pour créer les petits cœurs
function creerCoeurs() {

    for (let i = 0; i < 30; i++) {

        const coeur = document.createElement("div");

        coeur.innerHTML = "❤️";
        coeur.classList.add("coeur");

        coeur.style.left = Math.random() * 100 + "vw";
        coeur.style.animationDelay = Math.random() * 2 + "s";

        document.body.appendChild(coeur);

        // Supprime le cœur après l'animation
        setTimeout(function () {
            coeur.remove();
        }, 5000);
    }
}
