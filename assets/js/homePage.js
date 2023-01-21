
function homeContent() {
    const renderHomeContent =
        `
    <section id="home">
        <div class="home__wrapper">
            <div class="textBlock">
                <p>Lorem5</p>
                <p>Lorem5</p>
                <p>Lorem5</p>
                <p>Lorem5</p>
                <p>Lorem5</p>
            </div>
        </div>
    </section>
        `
    return renderHomeContent
}

root.insertAdjacentHTML("beforeend", homeContent())
