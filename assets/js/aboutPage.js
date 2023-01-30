
function aboutContent() {
    const renderAboutContent =
        `
    <section id="about">
        <div class="about__wrapper">
            <div class="section_text_block">
                <p class="darkblue_module_paragraph">I have worked in the welding </p>
                <p class="darkblue_module_paragraph">and maritime industry </p>
                <p class="darkblue_module_paragraph">for several years.</p>
                <p class="darkblue_module_paragraph">I am experienced in welding, </p>
                <p class="darkblue_module_paragraph">fabricating, and repairing </p>
                <p class="darkblue_module_paragraph">metal structures.</p>
                <p class="darkblue_module_paragraph">I am also proficient in </p>
                <p class="darkblue_module_paragraph">using computers and hand tools.</p>
                <p class="darkblue_module_paragraph">A hard worker who is </p>
                <p class="darkblue_module_paragraph">reliable and detail oriented.</p>
                <p class="darkblue_module_paragraph">Interested in any opportunities </p>
                <p class="darkblue_module_paragraph">that are available in </p>
                <p class="darkblue_module_paragraph">the maritime industry.</p>
                <div class="about_img_wrapper">
                    <img data-src="./assets/img/anime_welder_106_132.webp" width="106" height="132" srcset="./assets/img/anime_welder_106_132.webp 1x, ./assets/img/anime_welder_212_264.webp 2x" class="about_img lazyload" alt="Anime sailor-welder">
                </div>
                <p class="darkblue_module_paragraph">About Page Content</p>
                <div class="about_img_wrapper">
                    <img data-src="./assets/img/anime_welder2_106_132.webp" width="106" height="132" srcset="./assets/img/anime_welder2_106_132.webp 1x, ./assets/img/anime_welder2_212_264.webp 2x" class="about_img lazyload" alt="One more anime sailor-welder">
                </div>
                <p class="darkblue_module_paragraph">About Page Content</p>
                <div class="about_img_wrapper">
                    <img data-src="./assets/img/me_in_the_cabin_424_565.webp" width="106" height="132" srcset="./assets/img/me_in_the_cabin_424_565.webp 1x, ./assets/img/me_in_the_cabin_raw_848_1130.webp 2x" class="about_img lazyload" alt="Me in the cabin">
                </div>
                <p class="darkblue_module_paragraph">Me in the cabin</p>
                <p class="darkblue_module_paragraph">About Page Content</p>
                <p class="darkblue_module_paragraph">About Page Content</p>
                <p class="darkblue_module_paragraph">About Page Content</p>
                <p class="darkblue_module_paragraph">About Page Content</p>
            </div>
        </div>
    </section>
        `
    return renderAboutContent
}

root.insertAdjacentHTML("beforeend", aboutContent())
