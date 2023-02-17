const onWorkerReady = () => {
    console.log('Service Worker is ready')
}

navigator.serviceWorker.register('/sailor-welder/assets/js/serviceWorker.js')

navigator.serviceWorker.ready.then(onWorkerReady())


// from MDN tutorial
// if ('serviceWorker' in navigator) {
//     navigator.serviceWorker
//         .register('/sailor-welder/assets/js/serviceWorker.js')
//         .then(() => { console.log('Service Worker Registered'); })
// }
