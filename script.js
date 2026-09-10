```javascript
document.addEventListener("DOMContentLoaded", () => {

    const oui = document.getElementById("oui");
    const non = document.getElementById("non");
    const message = document.getElementById("message");
    const suite = document.getElementById("suite");

    const page1 = document.getElementById("page1");
    const page2 = document.getElementById("page2");

    // TEST
    console.log("SCRIPT JS FONCTIONNE ❤️");

    // BOUTON OUI
    oui.onclick = () => {

        console.log("OUI CLIQUÉ ❤️");

        oui.style.display = "none";
        non.style.display = "none";

        message.style.display = "block";
    };

    // BOUTON NON
    non.onmouseenter = () => {

        const x = Math.random() * (window.innerWidth - non.offsetWidth);
        const y = Math.random() * (window.innerHeight - non.offsetHeight);

        non.style.position = "fixed";
        non.style.left = x + "px";
        non.style.top = y + "px";
    };

    // BOUTON SUITE
    suite.onclick = () => {

        page1.classList.remove("active");
        page2.classList.add("active");

        window.scrollTo(0, 0);
    };

});
```
