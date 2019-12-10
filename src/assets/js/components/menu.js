<<<<<<< HEAD
=======
// Так делать НЕ НУЖНО
>>>>>>> d7e8b16565f556ba924da8a4406f236b5a0b6f01
// let menuButton = document.getElementById('js-header__burger');
// let menu = document.getElementById('js-menu');
// let header = document.getElementById('js-header');
// let headerIntro = document.getElementById("js-header__intro");
<<<<<<< HEAD
//
=======
>>>>>>> d7e8b16565f556ba924da8a4406f236b5a0b6f01


//
// menuButton.addEventListener('click', function(){
//     if(menu.style.display === "none") {
//
//         menu.style.display = 'block';
//         headerIntro.style.display = "none";
//
//         header.style.background = "url('assets/img/header/bg-menu.png')";
//         header.style.backgroundPosition =  "center";
//         header.style.backgroundRepeat =  "no-repeat";
//         header.style.backgroundSize =  "cover";
//     }else{
//
//         menu.style.display = 'none';
//         headerIntro.style.display = "flex";
//
//         header.style.background = "url('assets/img/header/header-bg.jpg')";
//         header.style.backgroundPosition =  "center";
//         header.style.backgroundRepeat =  "no-repeat";
//         header.style.backgroundSize =  "cover";
//     }
// })

// menuButton.addEventListener('click', function(){
//     if(menu.style.display === "none") {

<<<<<<< HEAD
const options = [
    {
        open: document.querySelector('.header__burger'),
        target: document.querySelector('.menu'),
        close: document.querySelector('.header__close'),
        state: false,
        class: 'menu--opened',
    },
    {
        open: document.querySelector('.header__burger'),
        target: document.querySelector('.menu__list-item-link'),
        close: document.querySelector('.header__close'),
        state: false,
        class: 'text-show',
    },
    {
        open: document.querySelector('.header__close'),
        target: document.querySelector('.header__close'),
        close: document.querySelector('.header__burger'),
        class: 'hidden',
        state: true,
    },
    {
        open: document.querySelector('.header__burger'),
        target: document.querySelector('.header__burger'),
        close: document.querySelector('.header__close'),
        class: 'hidden',
        state: false,
    }
];

for (const option of options) {
    toggle(option)
}

=======
//         menu.style.display = 'block';
//         headerIntro.style.display = "none";

//         header.style.background = "url('assets/img/header/bg-menu.png')";
//         header.style.backgroundPosition =  "center";
//         header.style.backgroundRepeat =  "no-repeat";
//         header.style.backgroundSize =  "cover";
//     }else{

//         menu.style.display = 'none';
//         headerIntro.style.display = "flex";

//         header.style.background = "url('assets/img/header/header-bg.jpg')";
//         header.style.backgroundPosition =  "center";
//         header.style.backgroundRepeat =  "no-repeat";
//         header.style.backgroundSize =  "cover";
//     }
// })
// Так делать НУЖНО
const options = [
    {
        open: document.querySelector('.header__burger'),
        target: document.querySelector('.menu'),
        close: document.querySelector('.header__close'),
        state: false,
        class: 'menu--opened',
    },
    {
        open: document.querySelector('.header__close'),
        target: document.querySelector('.header__close'),
        close: document.querySelector('.header__burger'),
        class: 'hidden',
        state: true,
    },
    {
        open: document.querySelector('.header__burger'),
        target: document.querySelector('.header__burger'),
        close: document.querySelector('.header__close'),
        class: 'hidden',
        state: false,
    }
]
for (const option of options) {
    toggle(option)
}



>>>>>>> d7e8b16565f556ba924da8a4406f236b5a0b6f01

function toggle(options) {
    options.open.addEventListener('click', function () {
        options.state = true
        options.target.classList.add(options.class)
<<<<<<< HEAD
    });
=======
    })
>>>>>>> d7e8b16565f556ba924da8a4406f236b5a0b6f01
    options.close.addEventListener('click', function () {
        options.state = false
        options.target.classList.remove(options.class)
    })
<<<<<<< HEAD
}
=======
}
>>>>>>> d7e8b16565f556ba924da8a4406f236b5a0b6f01
