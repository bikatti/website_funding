const ipad = window.matchMedia('screen and (max-width: 768px)');
const menuMb = document.querySelector('.m-itemContent');
const burgerButton = document.querySelector('#burger');
const burgerOut = document.querySelector('#burgerOut');

ipad.addListener(validation)

function validation(event) {
    if (event.matches) {
        burgerButton.addEventListener('click', hideShow)
        burgerOut.addEventListener('click', hideShow)
    }
    else {
        burgerButton.removeEventListener('click', hideShow)
        burgerOut.addEventListener('click', hideShow)
    }
}

validation(ipad);

function hideShow() {
    if (menuMb.classList.contains('-isActive')) {
        menuMb.classList.remove('-isActive');
    } else {
        menuMb.classList.add('-isActive');
    }
}
