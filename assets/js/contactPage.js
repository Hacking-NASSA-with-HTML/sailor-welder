
function contactContent() {
    const renderContactContent =
        `
    <section id="contact">
        <div class="contact__wrapper">
            <div class="section_text_block">
                <p>My new project, guys 😊</p>
                <p>FULLY RESPONSIVE</p>
                <p>AND BLAZING FAST. Enjoy.</p>
                <p>Customize and Sell It to Your customers!💲💸💰</p>
                <p>Earn💲money for Yourself!</p>
                <p>Like it? Give that repo a Star⭐</p>
                <p class="contact_section_app_link">
                    <a href="https://github.com/Hacking-NASSA-with-HTML/sailor-welder/" target="_blank" rel="noopener noreferrer">Give it a Star on github</a>
                </p>
                <p>Know how to improve it?</p>
                <p>Send a pull request to the GitHub!</p>
                <p>I would be happy to merge it🙂</p>
                <p>And Add You as a Collaborator😎</p>
                <p>Let's Learn and Earn💲💰 Together!</p>
                <div class="about_img_wrapper">
                    <img data-src="./assets/img/work-examples/work_example_1_424_565.webp" width="106" height="132" srcset="./assets/img/work-examples/work_example_1_424_565.webp 1x, ./assets/img/work-examples/work_example_1_848_1130.webp 2x" class="about_img lazyload" alt="Work example 1">
                </div>
                <p>Work example 1</p>
                <div class="about_img_wrapper">
                    <img data-src="./assets/img/work-examples/work_example_2_424_565.webp" width="106" height="132" srcset="./assets/img/work-examples/work_example_2_424_565.webp 1x, ./assets/img/work-examples/work_example_2_848_1130.webp 2x" class="about_img lazyload" alt="Work example 2">
                </div>
                <p>Work example 2</p>
                <p class="contact_section_app_link">
                    <a href="https://www.linkedin.com/in/vyacheslav-plekhanov/" target="_blank" rel="noopener noreferrer">Write me a letter or just say "Hi👋"</a>
                </p>
                <p>Have a Blessed Time!</p>
                <p>And May Your Code Always Works Too 🎉🎂🍾🥂🎊😎</p>
            </div>
        </div>
    </section>
        `
    return renderContactContent
}

root.insertAdjacentHTML("beforeend", contactContent())
