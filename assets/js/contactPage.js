
function contactContent() {
    const renderContactContent =
        `
    <section id="contact">
        <div class="contact__wrapper">
            <div class="about_text_block">
                <p>My new project, guys 😊</p>
                <p>FULLY RESPONSIVE</p>
                <p>AND BLAZINGLY FAST. Enjoy.</p>
                <p>Customize and Sell It to Your customers!💲💸💰</p>
                <p>Earn💲money for Yourself!</p>
                <p>Like it? Give that repo a Star⭐</p>
                <p>Know how to improve it?</p>
                <p>Send a pull request to the GitHub!</p>
                <p>I would be happy to merge it🙂</p>
                <p>Let's Learn and Earn💲💰 Together!</p>
            </div>
        </div>
    </section>
        `
    return renderContactContent
}

root.insertAdjacentHTML("beforeend", contactContent())
