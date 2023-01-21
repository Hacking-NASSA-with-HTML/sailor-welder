
function headerContent() {
    const renderHeaderContent =
        `
<div class="header__wrapper">
    <header class="header">
        <div class="header__container holder">
            <div class="hamburger-box hamburgerForMobile" id="hamburgerBox">
                <div class="line l1"></div>
                <div class="line l2"></div>
                <div class="line l3"></div>
            </div>
            <div class="logo__container">
                <div class="logo">
                    <a class="logo__description" href="#home">Sailor-Welder</a>
                </div>
            </div>
            <div class="navigation__container">
                <nav class="navigation__section" id="navigationSection">
                    <ul class="header__menu__wrapper" id="navigation">
                        <li class="header__menu__item"><a class="header__menu__a focused" href="#home">Home</a></li>
                        <li class="header__menu__item"><a class="header__menu__a" href="#about">About</a></li>
                        <li class="header__menu__item"><a class="header__menu__a" href="#contact">Contact</a></li>
                        <li class="header__menu__item"><a class="header__menu__a" href="#backMusic">Play Background Music</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    </header>
  </div>
    `
    return renderHeaderContent
}

root.insertAdjacentHTML("beforeend", headerContent())


/***************************************************** Mobile menu *****************/

const HAMBURGER = document.getElementById('hamburgerBox');
const BODY = document.getElementById('body');
const CLOSE_MOBILE_MENU = document.getElementById('navigationSection');


HAMBURGER.addEventListener('click', () => {
    BODY.classList.toggle('active_menu');
});

CLOSE_MOBILE_MENU.addEventListener('click', () => {
    BODY.classList.toggle('active_menu');
});

CLOSE_MOBILE_MENU.addEventListener('touchmove', () => {
    BODY.classList.toggle('active_menu');
});


/***************************************** Animation for hamburger *****************/

const EL = document.getElementById('hamburgerBox');

EL.addEventListener('click', () => {
    EL.classList.toggle('activeForHumburger');
});
