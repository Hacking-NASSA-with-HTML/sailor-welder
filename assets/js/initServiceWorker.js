const onWorkerReady = () => {
    console.log('Service Worker is ready')
}

navigator.serviceWorker.register('serviceWorker.js')

navigator.serviceWorker.ready.then(onWorkerReady)
