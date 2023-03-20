let boxBurger,
    slideMenu,
    burgerButton,
    overlay,
    links
    // logoPets

function init(){
    //Burger
    boxBurger = document.getElementById('burger-menu');
    slideMenu = document.getElementById('burmenu');
    burgerButton  = document.getElementById('burger-button');
    overlay = document.createElement("section");
    document.body.append(overlay);
    // logoPets = document.createElement("logo-pets");
    // document.body.append(logoPets);

    links = Array.from(document.querySelectorAll("#burmenu a"));
    links.forEach((link) => {link.addEventListener("click", (e) => {overlay.classList.remove("overlay"); burgerButton.classList.remove("button-rotate"); slideMenu.classList.remove("nav-menu-show"); })})

    overlay.addEventListener("click", showWork);
    burgerButton.addEventListener("click", showWork);
    //overlay.onclick = showWork;
    //burgerButton.onclick = showWork;
}

function showWork(){
    //Burger
    slideMenu.classList.toggle("nav-menu-show")
    burgerButton.classList.toggle("button-rotate")
    overlay.classList.toggle("overlay");
    logoPets.classList.toggle("logoPets");

}

window.onload = init;