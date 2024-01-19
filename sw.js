// install event
self.addEventListener('install', evt => {
    // console.log('service worker installed');
});

// activate event
self.addEventListener('activate', evt => {
    // console.log('service worker activated');
    evt.waitUntil(
        caches.keys().then(keys => {
            return Promise.all(keys.map(key => caches.delete(key)));
        })
    );
});

// fetch event
self.addEventListener('fetch', evt => {
    // console.log('fetch event', evt);
});