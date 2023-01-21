
function homeContent() {
    const renderHomeContent =
        `
    <section id="home">
        <div class="home__wrapper">
            <div class="textBlock">
                <h1>Sailor-Welder resume 😎</h1>
                <p>Home Page Content</p>
                <p>Home Page Content</p>
                <p>Home Page Content</p>
                <p>Home Page Content</p>
            </div>
        </div>
    </section>
        `
    return renderHomeContent
}

root.insertAdjacentHTML("beforeend", homeContent())
