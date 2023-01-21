
function aboutContent() {
    const renderAboutContent =
        `
    <section id="about">
        <div class="about__wrapper">
            <div class="textBlock">
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
