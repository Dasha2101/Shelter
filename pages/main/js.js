let boxBurger,
    slideMenu,
    burgerButton,
    overlay,
    links,
    petsContain,
    rightButton,
    leftButton

function init() {
    //Burger
    boxBurger = document.getElementById('burger-menu');
    slideMenu = document.getElementById('burmenu');
    burgerButton = document.getElementById('burger-button');
    overlay = document.createElement("section");
    document.body.append(overlay);

    links = Array.from(document.querySelectorAll("#burmenu a"));
    links.forEach((link) => { link.addEventListener("click", (e) => { overlay.classList.remove("overlay"); burgerButton.classList.remove("button-rotate"); slideMenu.classList.remove("nav-menu-show"); }) });


    //Carusel
    petsContain = document.getElementById('Slider');
    rightButton = document.getElementById('button-arrow-right');
    leftButton = document.getElementById('button-arrow');

    rightButton.onclick = Slideright;
    leftButton.onclick = Sliderleft;

    //Burger
    overlay.addEventListener("click", showWork);
    burgerButton.addEventListener("click", showWork);
    // burgerButton.onclick = showWork;
    // boxBurger.onclick = showWork;
}



function showWork() {
    //Burger
    slideMenu.classList.toggle("nav-menu-show");
    overlay.classList.toggle("overlay");
    burgerButton.classList.toggle("button-rotate");
}


function Slideright() {


}

function Sliderleft() {

}

window.onload = init;