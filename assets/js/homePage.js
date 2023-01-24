
function homeContent() {
    const renderHomeContent =
        `
    <section id="home">
        <div class="home__wrapper">
            <div class="home_text_block">
                <p class="welcome_home_module_paragraph">Welcome 👋</p>
                <p class="home_module_paragraph">You are on the page of</p>
                <h1 class="headline_h1">
                    Vyacheslav Plekhanov ⛵ Sailor-Welder 🎇 Resume 😎
                </h1>
                <p class="home_module_paragraph">and you can learn here</p>
                <p class="home_module_paragraph">how we can earn money</p>
                <p class="home_module_paragraph">with good ship's welding maintenance</p>
            </div>
        </div>
    </section>
        `
    return renderHomeContent
}

root.insertAdjacentHTML("beforeend", homeContent())
