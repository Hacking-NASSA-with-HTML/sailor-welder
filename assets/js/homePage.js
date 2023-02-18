
function homeContent() {
    const renderHomeContent =
        `
    <section id="home">
        <div class="home__wrapper">
            <div class="section_text_block">
                <p class="welcome_home_module_paragraph">Welcome 👋</p>
                <p class="darkblue_module_paragraph">You are on the page of</p>
                <h1 class="headline_h1">
                    Vyacheslav Plekhanov ⛵ Sailor-Welder 🎇 Navy Fitter Resume 😎
                </h1>
                <p class="darkblue_module_paragraph">and you can learn here</p>
                <p class="darkblue_module_paragraph">how we can earn money</p>
                <p class="darkblue_module_paragraph">with good ship's welding maintenance</p>
                <p class="darkblue_module_paragraph">or building the app of Your Dream 🙂</p>
                <p class="darkblue_module_paragraph">Yeah, web development is my hobby 🛠️ </p>
            </div>
        </div>
    </section>
        `
    return renderHomeContent
}

root.insertAdjacentHTML("beforeend", homeContent())
