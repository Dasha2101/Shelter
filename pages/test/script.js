let button,
    box

function init(){
    button = document.getElementById('but');
    box = document.getElementById('hide');

    button.onclick = showBox;
}

function showBox(){
    console.log('fg');
    box.classList.toggle("show");
    box.classList.toggle("hide");

};

window.onload = init;