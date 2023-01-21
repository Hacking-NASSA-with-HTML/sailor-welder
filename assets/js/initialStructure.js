const root = document.getElementById('root')

function mainPageContent() {
    const renderMainPageContent =
        `
        <div class="initialStructureContainerWrapper">
            <div class="container">
                <h1>Sailor-Welder resume 😎</h1>
                <h2>Lorem5</h2>
                <p>Lorem8</p>
            </div>
            <div class="buttonWrapperDiv">
                <button type="button" class="button" id="button2">Click To Open Modal Window</button>
            </div>
            <div class="backgroundMusicDiv">No Background Music</div>
        </div>
    `
    return renderMainPageContent
}

root.insertAdjacentHTML("beforeend", mainPageContent())
