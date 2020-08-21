const ipad = window.matchMedia('screen and (max-width: 768px)');
const noIpad = window.matchMedia('screen and (min-width: 576px)');
const allScreens = window.matchMedia('screen and (min-width: 300px)');

const menuMb = document.querySelector('.m-itemContent');
const arrowButton = document.querySelector('#arrowNav');
const burgerButton = document.querySelector('#burger');
const burgerOut = document.querySelector('#burgerOut');
const boxShadow = document.querySelector('.o-navFixedContainer');
const bookmark = document.querySelector('#upBookmark');

const itemNav = document.querySelector('.m-menuCourse__folded');
const shadowNavPlace = document.querySelector('.m-menuCourse__unfolded');
const shadowNav = document.querySelector('.-shadow');

const contactButton = document.querySelector('#contact');
const contactButton1 = document.querySelector('#contact1');
const contactButton2 = document.querySelector('#contact2');
const contactButton3 = document.querySelector('#contact3');
const contactButton4 = document.querySelector('#contact4');
const contactButton5 = document.querySelector('#contact5');
const modalDialog = document.querySelector('.o-contactModal');
const blurDialog = document.querySelector('.-blur');

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

// Class modal
function modalHideShow() {
    if (modalDialog.classList.contains('-isActive')) {
        modalDialog.classList.remove('-isActive');
        modalDialog.classList.remove('o-modal');
        modalDialog.classList.remove('-open');
        blurDialog.classList.remove('-isActive');
    } else {
        modalDialog.classList.add('-isActive');
        modalDialog.classList.add('o-modal');
        modalDialog.classList.add('-open');
        blurDialog.classList.add('-isActive');
    }
}
allScreens.addListener(validationScreens)

function validationScreens(event) {
      if (event.matches) {
          contactButton.addEventListener('click', modalHideShow)
          contactButton1.addEventListener('click', modalHideShow)
          contactButton2.addEventListener('click', modalHideShow)
          contactButton3.addEventListener('click', modalHideShow)
          contactButton4.addEventListener('click', modalHideShow)
          contactButton5.addEventListener('click', modalHideShow)
          burgerOutModal.addEventListener('click', modalHideShow)
        }
      else {
          contactButton.removeEventListener('click', modalHideShow)
          contactButton1.removeEventListener('click', modalHideShow)
          contactButton2.removeEventListener('click', modalHideShow)
          contactButton3.removeEventListener('click', modalHideShow)
          contactButton4.removeEventListener('click', modalHideShow)
          contactButton5.removeEventListener('click', modalHideShow)
          burgerOutModal.addEventListener('click', modalHideShow)
      }
}
validationScreens(allScreens);

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