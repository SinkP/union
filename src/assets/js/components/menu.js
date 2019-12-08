let menuButton = document.getElementById('js-header__burger');
let menu = document.getElementById('js-menu');
let header = document.getElementById('js-header');
let headerIntro = document.getElementById("js-header__intro");




menuButton.addEventListener('click', function(){
    if(menu.style.display === "none") {

        menu.style.display = 'block';
        headerIntro.style.display = "none";

        header.style.background = "url('assets/img/header/bg-menu.png')";
        header.style.backgroundPosition =  "center";
        header.style.backgroundRepeat =  "no-repeat";
        header.style.backgroundSize =  "cover";
    }else{

        menu.style.display = 'none';
        headerIntro.style.display = "flex";

        header.style.background = "url('assets/img/header/header-bg.jpg')";
        header.style.backgroundPosition =  "center";
        header.style.backgroundRepeat =  "no-repeat";
        header.style.backgroundSize =  "cover";
    }
})
