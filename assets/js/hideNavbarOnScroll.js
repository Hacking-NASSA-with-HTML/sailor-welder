const headerWrapper = document.getElementById('headerWrapper')
const sections = document.querySelectorAll('#navigation a')

let lastScrollTop = 0


function hideNavbar() {
    let scrollTop = window.pageYOffset
    if (scrollTop > lastScrollTop) {
        headerWrapper.style.top = "-80px"
    } else {
        headerWrapper.style.top = "0"
    }
    lastScrollTop = scrollTop
}

function onScroll(event) {
    let sections = document.querySelectorAll('#navigation a')
    let scrollPos = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop

    for (let i = 0; i < sections.length; i++) {
        let currLink = sections[i]
        let val = currLink.getAttribute('href')
        let refElement = document.querySelector(val)
        if (refElement.offsetTop - 400 <= scrollPos && (refElement.offsetTop - 400 + refElement.offsetHeight > scrollPos)) {
            document.querySelector('#navigation a').classList.remove('focused')
            currLink.classList.add('focused')
        } else {
            currLink.classList.remove('focused')
        }
    }
}

window.document.addEventListener('scroll', hideNavbar)
window.document.addEventListener('scroll', onScroll)
