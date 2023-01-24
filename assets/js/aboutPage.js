
function aboutContent() {
    const renderAboutContent =
        `
    <section id="about">
        <div class="about__wrapper">
            <div class="about_text_block">
                <p>About Page Content</p>
                <p>About Page Content</p>
                <p>About Page Content</p>
                <p>About Page Content</p>
                <p>About Page Content</p>
                <div class="about_img_wrapper">
                    <img data-src="./assets/img/anime_welder_106_132.webp" width="106" height="132" srcset="./assets/img/anime_welder_106_132.webp 1x, ./assets/img/anime_welder_212_264.webp 2x" class="about_img lazyload" alt="anime sailor-welder">
                </div>
                <p>About Page Content</p>
                <p>About Page Content</p>
                <p>About Page Content</p>
                <p>About Page Content</p>
                <p>About Page Content</p>
            </div>
        </div>
    </section>
        `
    return renderAboutContent
}

root.insertAdjacentHTML("beforeend", aboutContent())
