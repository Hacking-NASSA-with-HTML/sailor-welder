
function contactContent() {
    const renderContactContent =
        `
    <section id="contact">
        <div class="contact__wrapper">
            <div class="textBlock">
                <p>Contact Page Content</p>
                <p>Contact Page Content</p>
                <p>Contact Page Content</p>
                <p>Contact Page Content</p>
                <p>Contact Page Content</p>
            </div>
        </div>
    </section>
        `
    return renderContactContent
}

root.insertAdjacentHTML("beforeend", contactContent())
