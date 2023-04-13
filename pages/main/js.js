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
    modalWin,
    modalButton,
    modals = [],
    showenMD

function init() {
    changeValue();

    //Burger
    boxBurger = document.getElementById('burger-menu');
    slideMenu = document.getElementById('burmenu');
    burgerButton = document.getElementById('burger-button');
    overlay = document.createElement("section");
    document.body.append(overlay);

    //Burger links
    links = document.querySelectorAll(".nav-container a");
    for (let i = 0; i < links.length; i++){
        links[i].addEventListener("click", showClick)
    }

    //Burger overlay
    overlay.addEventListener("click", showWork);
    burgerButton.addEventListener("click", showWork);

    //Carusel
    petsContain = document.getElementById('Slider');
    rightButton = document.getElementById('button-arrow-right');
    leftButton = document.getElementById('button-arrow');

    outputCard();

    cards = document.getElementsByClassName('Card-1')

    rightButton.addEventListener("click", slideRight);
    leftButton.addEventListener("click", sliderLeft);

    //Popup
    popup()
    outputModalWin();
}

//Burger
function showWork() {
    //Burger
    slideMenu.classList.toggle("nav-menu-show");
    overlay.classList.toggle("overlay");
    burgerButton.classList.toggle("button-rotate");
}

//Burger links
function showClick(){
    overlay.classList.remove("overlay");
    burgerButton.classList.remove("button-rotate")
    slideMenu.classList.remove("nav-menu-show")
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
    if (action!=prevAction){
        let num = prev
        prev = current
        current = num
    }else{
        prev = current
        current = []
        while (current.length < mediaQuery){
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
    outputModalWin();
}

function outputCard(){
    while (current.length < mediaQuery){
        let index = Math.floor(Math.random()*pets.length)
        let found = current.find(elem => elem === index)
        if (found === undefined){
            current.push(index);
        }
    }
    for (let i = 0; i < mediaQuery; i++){
        rightButton.before(cardFiller(current[i]))
    }
}

function changeValue(){
    if (window.screen.width > 1280) {
        mediaQuery = 3;
    } else if ((window.screen.width >= 768) && (window.screen.width < 1280)) {
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


function popup(){
    //create
    for (let i = 0; i < pets.length; i++){
        // console.log("123456")
        modalWin = document.createElement("section");
        modalWin.classList.add('modal-window');
        let contentMdWin = document.createElement("section");
        contentMdWin.classList.add("content-md-win");

        showenMD = document.createElement("section")
        showenMD.classList.add("showen-mod-window")
        showenMD.append(modalWin);

        let mdWithoutButton = document.createElement("section")
        mdWithoutButton.classList.add("content-without-button")

        //add name pet
        let petsName = document.createElement("h3");
        petsName.classList.add('md-pets-name');
        petsName.innerHTML =pets[i].name;

        //add breed pet
        let petBreed = document.createElement("h4");
        petBreed.classList.add("pet-breed");
        petBreed.innerHTML = (pets[i].type + " - " +pets[i].breed);

        //add description
        let petDescribe = document.createElement("h5");
        petDescribe.classList.add("pet-describe");
        petDescribe.innerHTML = pets[i].description;

        //add block for list and info
        let listData = document.createElement("section");
        listData.classList.add("data-list");

        let agePet = document.createElement("h5");
        agePet.classList.add("pet-info")
        agePet.innerHTML = ('<li>' + "<b>Age:</b>" + " " + pets[i].age);

        let graft = document.createElement("h5");
        graft.classList.add("pet-info");
        graft.innerHTML = ('<li>' + "<b>Inoculations:</b>" + " " + pets[i].inoculations);

        let diseases = document.createElement("h5");
        diseases.classList.add("pet-info");
        diseases.innerHTML = ('<li>' + "<b>Diseases:</b>" + " " + pets[i].diseases);

        let parasit = document.createElement("h5");
        parasit.classList.add("pet-info");
        parasit.innerHTML = ('<li>' + "<b>Parasites:</b>" + " " + pets[i].diseases);

        let photoPet = document.createElement("img");
        photoPet.classList.add("photo-pet");
        photoPet.setAttribute('src', pets[i].img);
        photoPet.setAttribute('alt', pets[i].type + ' ' + pets[i].name);

        modalButton = document.createElement("button")
        modalButton.classList.add("modal-button");
        let buttonMdText = document.createElement('p')
        buttonMdText.classList.add("title-vector")
        buttonMdText.textContent = "X";
        modalButton.append(buttonMdText)

        modalButton.addEventListener("click", removeModal);
        overlay.addEventListener("click", removeOverlay);

        listData.append(agePet)
        listData.append(graft)
        listData.append(diseases)
        listData.append(parasit)

        contentMdWin.append(petsName)
        contentMdWin.append(petBreed)
        contentMdWin.append(petDescribe)
        contentMdWin.append(listData)

        mdWithoutButton.append(contentMdWin)
        mdWithoutButton.append(photoPet)
        modalWin.append(modalButton)
        modalWin.append(mdWithoutButton)
        petsContain.append(modalWin)

        console.log(modalWin[i])
        modals.push(modalWin)

    }
}

function removeOverlay(){
    document.querySelector(".showen-mod-window").classList.remove("showen-mod-window");
    overlay.classList.remove("overlay")
    document.getElementsByTagName("body")[0].style.overflow = 'scroll';
}

function removeModal(e){
    e.target.closest(".showen-mod-window").classList.remove("showen-mod-window");
    overlay.classList.remove("overlay")
    document.getElementsByTagName("body")[0].style.overflow = 'scroll';
}

function outputModalWin(){
    for (let i = 0; i < current.length; i++){
        cards.item(i).addEventListener("click", showModals(current[i]))

    }
}

function showModals(i){
    return function(){
    //show modal windows
        modals[i].classList.add("showen-mod-window")
        overlay.classList.add("overlay");
        document.getElementsByTagName("body")[0].style.overflow = 'hidden';
            return modals[i]

    }

}

window.onload = init;