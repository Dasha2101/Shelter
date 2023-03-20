let boxBurger,
    slideMenu,
    burgerButton,
    overlay,
    links,
    petsContain,
    rightButton,
    leftButton,
    card,
    current = [],
    prev = [],
    mediaQuery,
    action,
    prevAction,
    cards,
    modalWin

function init() {
    changeValue();
    
    //Burger
    boxBurger = document.getElementById('burger-menu');
    slideMenu = document.getElementById('burmenu');
    burgerButton = document.getElementById('burger-button');
    overlay = document.createElement("section");
    document.body.append(overlay);

    links = Array.from(document.querySelectorAll("#burmenu a"));
    links.forEach((link) => { link.addEventListener("click", (e) => { overlay.classList.remove("overlay"); burgerButton.classList.remove("button-rotate"); slideMenu.classList.remove("nav-menu-show"); }) });

    //Burger overlay
     overlay.addEventListener("click", showWork);
     burgerButton.addEventListener("click", showWork);
     // burgerButton.onclick = showWork;
     // boxBurger.onclick = showWork;

    //Carusel
    petsContain = document.getElementById('Slider');
    rightButton = document.getElementById('button-arrow-right');
    leftButton = document.getElementById('button-arrow');

    outputCard();

    cards = document.getElementsByClassName('Card-1')

    rightButton.addEventListener("click", slideRight);
    leftButton.addEventListener("click", sliderLeft);


    // //Popup
    // modalWin = document.getElementsByClassName("Learn-more")

}

//Burger
function showWork() {
    //Burger
    slideMenu.classList.toggle("nav-menu-show");
    overlay.classList.toggle("overlay");
    burgerButton.classList.toggle("button-rotate");
}

// Card Add
function cardFiller(i){
    let petName = document.createElement("h4");
    petName.classList.add("Title-pets-name")
    petName.innerHTML = pets[i].name;

    let petImg = document.createElement("img");
    petImg.classList.add("img-content");
    petImg.setAttribute('src', pets[i].img);
    petImg.setAttribute('alt', pets[i].type + ' ' + pets[i].name);

    let buttonLM = document.createElement("button");
    buttonLM.classList.add("Learn-more");
    let buttonText = document.createElement('p')
    buttonText.classList.add('title-button')
    buttonText.textContent = 'Learn more';
    buttonLM.append(buttonText)

    card = document.createElement("section");
    card.classList.add("Card-1");
    card.append(petImg);
    card.append(petName);
    card.append(buttonLM);

    return card;
}

function slider(){
    if (action != prevAction){
        let side = prev;
        prev = current;
        current = side;
    }else{
        prev = current;
        current = [];
        while ( current.length < mediaQuery){
            let index = Math.floor(Math.random()*pets.length)
            let requireIndex = prev.find(elem => elem == index)
            let comparableIndex = current.find(elem => elem == index)
            if (comparableIndex === undefined && requireIndex === undefined){
                current.push(index);
            }
            requireIndex = comparableIndex = ''
        }
    }
    console.log(action, prev, current)
    //show cards
    for (let i = 0; i < current.length; i++){
        cards.item(i).replaceWith(cardFiller(current[i]))
    }
    cards = document.getElementsByClassName('Card-1')
    prevAction = action
}

function outputCard(){
    while (current.length < mediaQuery){
        let index = Math.floor(Math.random()*pets.length)
        let found = current.find(elem => elem == index)
        if (found === undefined){
            current.push(index);
        }
    }
    for (let i = 0; i < mediaQuery; i++){
        leftButton.after(cardFiller(current[i]))
    }
}

function changeValue(){
    if (window.screen.width >= 1280) {
        mediaQuery = 3;
    } else if (window.screen.width >= 768 && window.screen.width < 1280) {
        mediaQuery = 2;
    } else {
        mediaQuery = 1;
    }
}

function slideRight() {
    action = 'right'
    slider()
}

function sliderLeft() {
    action = 'left'
    slider();
}

// function Popup(){
//     modalWin = document.createElement("section");
//     modalWin.classList.add('modal-window')


// }




window.onload = init;