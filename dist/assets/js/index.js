const ipad = window.matchMedia('screen and (max-width: 768px)');
const noIpad = window.matchMedia('screen and (min-width: 576px)');
const menuMb = document.querySelector('.m-itemContent');
const arrowButton = document.querySelector('#arrowNav');
const burgerButton = document.querySelector('#burger');
const burgerOut = document.querySelector('#burgerOut');
const boxShadow = document.querySelector('.o-navFixedContainer');
const bookmark = document.querySelector('#upBookmark');

const itemNav = document.querySelector('.m-menuCourse__folded');
const shadowNavPlace = document.querySelector('.m-menuCourse__unfolded');
const shadowNav = document.querySelector('.-shadow');

ipad.addListener(validationMd)

function validationMd(event) {
    if (event.matches) {
        burgerButton.addEventListener('click', hideShow)
        burgerOut.addEventListener('click', hideShow)
    }
    else {
        burgerButton.removeEventListener('click', hideShow)
        burgerOut.addEventListener('click', hideShow)
    }
}

validationMd(ipad);

function hideShow() {
    if (menuMb.classList.contains('-isActive')) {
        menuMb.classList.remove('-isActive');
    } else {
        menuMb.classList.add('-isActive');
    }
}

$(window).scroll(() => {
    if ($(".o-nav").offset().top < 30) {
      $(".o-navFixedContainer").removeClass(`a-boxShadowMenu`);
    }
  });

  $(window).scroll(function() {
    if ($(".o-nav").offset().top >= 30) {
        $(".o-navFixedContainer").addClass(`a-boxShadowMenu`);
    }
  });

// Class menu
function navHideShow() {
    if (itemNav.classList.contains('-isActive')) {
        itemNav.classList.remove('-isActive');
        shadowNavPlace.classList.remove('-shadow');
    } else {
        itemNav.classList.add('-isActive');
        shadowNavPlace.classList.add('-shadow');
    }
}
  noIpad.addListener(validationnoMd)

function validationnoMd(event) {
      if (event.matches) {
          arrowButton.addEventListener('click', navHideShow)
      }
      else {
          arrowButton.removeEventListener('click', navHideShow)
      }
  }
  
  validationnoMd(noIpad);