

console.log("[SW] Entrou no ServiceWorker!");


const cacheName = "firstVersion";


self.addEventListener("install", event => {

    console.log("[SW] install");
    event.waitUntil(
        caches.open(cacheName).then(cache => cache.addAll(["/dog.jpg"]))
    );

});


self.addEventListener('activate', event => {

    console.log("[SW] activate");
});


self.addEventListener("fetch", function (event) {

    console.log("[SW] fetch");
    event.respondWith(
        caches.match(event.request).then(function (response) {
            if (response) {
                return response;
            }
            return fetch(event.request);
        })
    );
});


console.log("[SW] Fim do ServiceWorker!");