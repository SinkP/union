let options = [
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
        open: document.querySelector('.header__burger'),
        target: document.querySelector('.menu__list-bg'),
        close: document.querySelector('.header__close'),
        state: false,
        class: 'text-show--big',
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


for (const item of document.getElementsByClassName('menu__list-item-link')) {
    options.push(
        {
            open: document.querySelector('.header__burger'),
            target: item,
            close: document.querySelector('.header__close'),
            state: false,
            class: 'text-show',
        }
    )
}
for (const item of document.getElementsByClassName('menu__list-bg')) {
    options.push(
        {
            open: document.querySelector('.header__burger'),
            target: item,
            close: document.querySelector('.header__close'),
            state: false,
            class: 'text-show--big',
        }
    )
}

for (const item of document.getElementsByClassName('menu__list-img')) {
    options.push(
        {
            open: document.querySelector('.header__burger'),
            target: item,
            close: document.querySelector('.header__close'),
            state: false,
            class: 'text-show--img',
        }
    )
}

for (const option of options) {
    toggle(option)
}

function toggle(options) {
    options.open.addEventListener('click', function () {
        options.state = true
        options.target.classList.add(options.class)
    })
    options.close.addEventListener('click', function () {
        options.state = false
        options.target.classList.remove(options.class)
    })
}
