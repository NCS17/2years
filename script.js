```javascript
window.onload = function () {

    const oui = document.getElementById("oui");
    const non = document.getElementById("non");
    const message = document.getElementById("message");
    const suite = document.getElementById("suite");

    const page1 = document.getElementById("page1");
    const page2 = document.getElementById("page2");

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

};

