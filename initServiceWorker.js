const onWorkerReady = () => {
    console.log('Service Worker is ready')
}

// navigator.serviceWorker.register('/sailor-welder/assets/js/serviceWorker.js')
// navigator.serviceWorker.register('/sailor-welder/serviceWorker.js')
navigator.serviceWorker.register('/sailor-welder/serviceWorker.js')
//     .then(() => { console.log('Service Worker Finally Registered') })

navigator.serviceWorker.ready.then(onWorkerReady)
// navigator.serviceWorker.ready.then(onWorkerReady())
// navigator.serviceWorker.ready.then(() => { console.log('Service Worker Finally Registered'); })



// from MDN tutorial
// if ('serviceWorker' in navigator) {
//     navigator.serviceWorker
//         .register('/sailor-welder/assets/js/serviceWorker.js')
//         .then(() => { console.log('Service Worker Registered'); })
// }
