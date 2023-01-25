
const root = document.getElementById('root')

function headerContent() {
    const renderHeaderContent =
        `
<div class="header__wrapper" id="headerWrapper">
    <header class="header">
        <div class="header__container">
            <div class="hamburger-box" id="hamburgerBox">
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
                        <li class="header__menu__item"><a class="header__menu__a home focused" href="#home">Home</a></li>
                        <li class="header__menu__item"><a class="header__menu__a" href="#about">About</a></li>
                        <li class="header__menu__item"><a class="header__menu__a" href="#contact">Contact</a></li>
                        <li class="header__menu__item"><span class="header__menu__a" id="play">Play Background Music</span></li>
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


const PLAY = document.getElementById('play')
const NAVIGATION = document.getElementById('navigation')
const LOGO = document.querySelector('.logo__description')
const HOME = document.querySelector('.home')


NAVIGATION.addEventListener('click', (event) => {
    if (event.target !== PLAY) {
        NAVIGATION.querySelectorAll('a').forEach(el => el.classList.remove('focused'))
        event.target.classList.add('focused')
    }
});

LOGO.addEventListener('click', (event) => {
    NAVIGATION.querySelectorAll('a').forEach(el => el.classList.remove('focused'))
    HOME.classList.add('focused')
});


/***************************************************** Mobile menu *****************/

const HAMBURGER = document.getElementById('hamburgerBox')
const ROOT = document.getElementById('root')
const CLOSE_MOBILE_MENU = document.getElementById('navigationSection')


HAMBURGER.addEventListener('click', () => {
    ROOT.classList.toggle('active_menu')
    HAMBURGER.classList.toggle('activeForHamburger')
})

CLOSE_MOBILE_MENU.addEventListener('click', () => {
    ROOT.classList.toggle('active_menu')
    HAMBURGER.classList.toggle('activeForHamburger');
})

CLOSE_MOBILE_MENU.addEventListener('touchmove', () => {
    ROOT.classList.toggle('active_menu')
    HAMBURGER.classList.toggle('activeForHamburger')
}, { passive: true })


/***************************************** Animation for hamburger *****************/

// const EL = document.getElementById('hamburgerBox');

// EL.addEventListener('click', () => {
//     EL.classList.toggle('activeForHamburger');
// });
