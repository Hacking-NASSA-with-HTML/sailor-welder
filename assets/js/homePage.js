
function homeContent() {
    const renderHomeContent =
        `
    <div class="home__wrapper">
        <div class="textBlock">
            <p>Lorem5</p>
            <p>Lorem5</p>
            <p>Lorem5</p>
            <p>Lorem5</p>
            <p>Lorem5</p>
        </div>
    </div>
        `
    return renderHomeContent
}

root.insertAdjacentHTML("beforeend", homeContent())
