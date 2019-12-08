let menuButton = document.getElementById('js-header__burger');
let menu = document.getElementById('js-menu');
let header = document.getElementById('js-header');

header.style.background = "background: url('../../assets/img/header/bg-menu.png')";

console.log(header);

menuButton.addEventListener('click', navigation);

function navigation(){
    if(menu.style.display === 'none'){
        menu.style.display = 'block';
    }else{
        menu.style.display = 'none'
    }
}