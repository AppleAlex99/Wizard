/*
const CACHE_NAME = "offline-v2";
const ASSETS = [
    "/",
    "/Datenbank.html",
    "/Fallbackpage.html",
    "/Funktionsweise.html",
    "/index.html",
    "/Lighthouse.html",
    "/Manifest.html",
    "/pwa0.html",
    "/pwa1.html",
    "/pwa2.html",
    "/pwa3.html",
    "/ServiceWorker.html",
    "/WebAPI.html",
    "/manifest.webmanifest",
    "/app.js",
    "/styles.css",
    "/Cache-Strategie.html",
    "/Dynamisches-Cachen.html",
    "/IndexedDB.html",
    "/img/icon192.png",
    "/img/icon512.png",
    "/img/PWA_Logo.png",
    //Alle anderen Bilder
];

self.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then(cache => {
            cache.addAll(ASSETS);
        })
    );
    self.skipWaiting();
});

self.addEventListener("activate", (event) => {
    event.waitUntil(
        caches.keys().then(keys => {
            return Promise.all(keys
                .filter(key => key !== CACHE_NAME)
                .map(key => caches.delete(key))
            )
        })
    );
});

self.addEventListener("fetch", event => {
    event.respondWith(
        caches.match(event.request).then(response => {
            return response || fetch(event.request);
        })
    )
});
*/

