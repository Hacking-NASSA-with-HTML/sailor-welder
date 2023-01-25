const headerWrapper = document.getElementById('headerWrapper')

let lastScrollTop = 0


window.addEventListener('scroll', () => {
    let scrollTop = window.pageYOffset
    if (scrollTop > lastScrollTop) {
        headerWrapper.style.transform = "translate3d(0, -100%, 0)"
    } else {
        headerWrapper.style.transform = "translate3d(0, 0, 0)"
    }
    lastScrollTop = scrollTop
})
