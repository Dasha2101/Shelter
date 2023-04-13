let boxBurger,
    slideMenu,
    burgerButton,
    overlay,
    links,
    petsContain,
    paginator,
    firstPageBtn,
    lastPageBtn,
    beforeCurPageBtn,
    afterCurPageBtn,
    currentPageElem,
    currentPage = 0,
    countPet,
    petsOur = [],
    current = [],
    page = 1,
    cards,
    modalWin,
    modalButton,
    modals = [],
    showenMD


function init(){
    //Burger
    boxBurger = document.getElementById('burger-menu');
    slideMenu = document.getElementById('burmenu');
    burgerButton  = document.getElementById('burger-button');
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


    //Pagination
    paginator = document.getElementById("")
    petsContain = document.getElementById('card-container');
    firstPageBtn = document.getElementById('first-page-btn');
    lastPageBtn = document.getElementById('last-page-btn');
    beforeCurPageBtn = document.getElementById('prev-page-btn');
    afterCurPageBtn = document.getElementById('next-page-btn');
    cards = document.getElementsByClassName('card');

    currentPageElem = document.querySelector(".navigation.number")

    firstPageBtn.addEventListener("click", firstClick)
    beforeCurPageBtn.addEventListener("click", leftClick)
    lastPageBtn.addEventListener("click", lastClick)
    afterCurPageBtn.addEventListener("click", rightClick)

    changeValue();
    randomCard();
    showFirstCards();

    popup()
    outputModalWin();

}


function firstClick(e){
    if (!e.target.classList.contains('innective')){
        page = 1;
        paginationMain();
        paginationBtnReset();

    }
 }

function leftClick(e){
    if (!e.target.classList.contains('innective')){
        page --;
        paginationMain();
        paginationBtnReset();
    }
}

function rightClick(e){
    if (!e.target.classList.contains('innective')){
        page ++;
        paginationMain();
        paginationBtnReset();
    }
}

function lastClick(e){
    if (!e.target.classList.contains('innective')){
        page = 48 / countPet;
        paginationMain();
        paginationBtnReset();
    }
}


function paginationBtnReset() {

    let inectiveElems = document.querySelectorAll('.innective');
    for (let elem of inectiveElems) {
        elem.classList.remove('innective');
    }
    if (page === 1) {
        firstPageBtn.classList.add('innective');
        beforeCurPageBtn.classList.add('innective');
    }
    if (page === (petsOur.length / countPet)) {
        lastPageBtn.classList.add('innective');
        afterCurPageBtn.classList.add('innective');
    }
    currentPageElem.textContent = String(page)
}



function showClick(){
    overlay.classList.remove("overlay");
    burgerButton.classList.remove("button-rotate")
    slideMenu.classList.remove("nav-menu-show")
}

function showWork(){
    //Burger
    slideMenu.classList.toggle("nav-menu-show")
    burgerButton.classList.toggle("button-rotate")
    overlay.classList.toggle("overlay");


}

//card add
function cardFiller(i){
    console.log(i);
    let petName = document.createElement("h4");
    petName.classList.add("pet-name");
    petName.innerHTML = pets[i].name;

    let petImg = document.createElement("img");
    petImg.setAttribute('src', pets[i].img);
    petImg.setAttribute('alt', pets[i].type + ' ' + pets[i].name);

    let buttonLM = document.createElement("button");
    buttonLM.classList.add("learn-more");
    buttonLM.textContent = 'Learn more';

    let card = document.createElement("section");
    card.classList.add("card");

    card.id = "card-" + i
    card.append(petImg);
    card.append(petName);
    card.append(buttonLM);

    return card;

}

function randomCard(){
    while (petsOur.length < 48){
        while (current.length < countPet){
            let index = Math.floor(Math.random() * pets.length)
            let currentIndex = current.find(elem => elem === index)
            if (currentIndex === undefined){
                current.push(index)
            }
        }
        petsOur = petsOur.concat(current);
        current = [];
    }

}

function changeValue(){
    if (window.screen.width > 1280) {
        countPet = 8;
    } else if ((window.screen.width >= 768) && (window.screen.width < 1280)) {
        countPet = 6;
    } else {
        countPet = 3;
    }
}

function paginationMain(){
    let start = countPet * (page - 1);
    let end = countPet * page;
    let ind = 0
    for (let i = start; i < end; i++) {
        console.log(i);
        cards.item(ind).replaceWith(cardFiller(petsOur[i]));
        ind ++
    }
    cards = document.querySelectorAll('.card')
    outputModalWin()
}

function showFirstCards(){
    for (let i = 0; i < countPet; i++){
        petsContain.append(cardFiller(petsOur[i]));
    }
    cards = document.querySelectorAll('.card')
    outputModalWin();
}


function popup(){
    //create
    for (let i = 0; i < pets.length; i++){
        console.log("123456")
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
        petsName.innerHTML = pets[i].name;

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

        modalWin.id = "popup-" + i
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


function removeOverlay(e){
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
    for (let i = 0; i < countPet; i++) {
        cards.item(i).addEventListener("click", showModals(cards.item(i).id.replace("card-", "")))
    }

}


function showModals(i){
    return function(){
    //show modal windows
        document.getElementById("popup-" + i).classList.add("showen-mod-window")
        overlay.classList.add("overlay");
        document.getElementsByTagName("body")[0].style.overflow = 'hidden';

            return modals[i]

    }

}

window.onload = init;