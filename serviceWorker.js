// const CacheKey = "cache-v1"
const CacheKey = "cache-v10"

const initCache = () => {
    return caches.open(CacheKey).then((cache) => {
        return cache.addAll([
            "/sailor-welder/",
            "/sailor-welder/index.html",
            "/sailor-welder/assets/css/mycss.css",
            "/sailor-welder/assets/js/headerScript.js",
            "/sailor-welder/assets/js/homePage.js",
            "/sailor-welder/assets/js/aboutPage.js",
            "/sailor-welder/assets/js/contactPage.js",
            "/sailor-welder/assets/js/playBackGrMusic.js",
            "/sailor-welder/assets/js/hideNavbarOnScroll.js",
            "/sailor-welder/assets/img/favicons/favicon-32x32.png",
            "/sailor-welder/assets/img/favicons/apple-touch-icon-180x180.png",
            "/sailor-welder/assets/img/anime_welder2_106_132.webp",
            "/sailor-welder/assets/img/me_in_the_cabin_424_565.webp",
            "/sailor-welder/assets/img/work-examples/work_example_1_424_565.webp",
            "/sailor-welder/assets/img/work-examples/work_example_2_424_565.webp",
            "/sailor-welder/assets/img/anime_welder2_212_264.webp",
            "/sailor-welder/assets/img/me_in_the_cabin_raw_848_1130.webp",
            "/sailor-welder/assets/img/work-examples/work_example_1_848_1130.webp",
            "/sailor-welder/assets/img/work-examples/work_example_2_848_1130.webp",
            "/sailor-welder/assets/media/My-Jolly-Sailor-Bold.mp3",
            "/sailor-welder/assets/media/What-Do-We-Do.mp3",
            "/sailor-welder/site.webmanifest"
        ])
    }, (error) => {
        console.log(error)
    })
}

const tryNetwork = (req, timeout) => {
    console.log(req)
    return new Promise((resolve, reject) => {
        const timeoutId = setTimeout(reject, timeout);
        fetch(req).then((res) => {
            clearTimeout(timeoutId);
            const responseClone = res.clone()
            caches.open(CacheKey).then((cache) => {
                cache.put(req, responseClone)
            })
            resolve(res)
            // Reject also if network fetch rejects.
        }, reject)
    })
}

const getFromCache = (req) => {
    console.log('network is off so getting from cache...')
    return caches.open(CacheKey).then((cache) => {
        return cache.match(req).then((result) => {
            return result || Promise.reject("no-match")
        })
    })
}

self.addEventListener("install", (e) => {
    console.log("Installed")
    e.waitUntil(initCache())
})

self.addEventListener('activate', (e) => {
    e.waitUntil(
        caches.keys().then((keyList) => {
            return Promise.all(keyList.map((key) => {
                if (key !== CacheKey) {
                    return caches.delete(key)
                }
            }))
        })
    )
})

self.addEventListener("fetch", (e) => {
    console.log("Try network and store result or get data from cache")
    // Try network and if it fails, go for the cached copy.
    e.respondWith(tryNetwork(e.request, 400).catch(() => getFromCache(e.request)))
})
