
function homeContent() {
    const renderHomeContent =
        `
    <section id="home">
        <div class="home__wrapper">
            <div class="textBlock">
                <h1 class="headline__h1">Vyacheslav Plekhanov Sailor-Welder Resume 😎</h1>
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
