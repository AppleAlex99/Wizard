/*
const CACHE_NAME = "offline-v3";
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
    "/Cache-Strategie.html",
    "/Dynamisches-Cachen.html",
    "/manifest.webmanifest",
    "/app.js",
    "/styles.css",
    "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css",
    "https://code.jquery.com/jquery-3.3.1.slim.min.js",
    "https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js",
    "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js",
    "/IndexedDB.html",
    "/img/icon192.png",
    "/img/icon512.png",
    "/img/PWA_Logo.png",
    "/img/AddPerson.png",
    "/img/Cache-Fallbackpage.png",
    "/img/Cache-web-dev-strategie.png",
    "/img/Cache_Fallback.png",
    "/img/Cache_on_Interaction.png",
    "/img/Cache_on_PushMessage.png",
    "/img/Cache_only.png",
    "/img/Cache_then_Network.png",
    "/img/Chrome.JPG",
    "/img/Database_PWA_0.png",
    "/img/Database_PWA_1.png",
    "/img/Installieren.png",
    "/img/Installieren_Smartphone.JPG",
    "/img/Installiert.JPG",
    "/img/Installiert_vs_Chrome.JPG",
    "/img/Lighthouse.png",
    "/img/PC_Vergleich_PWA_Chrome.png",
    "/img/Personentabelle.png",
    "/img/PWA1-Bild.png",
    "/img/PWA2_DynamicCache.png",
    "/img/PWA2_StaticCache.png",
    "/img/PWA_Uebersicht.png",
    "/img/Read-Only_PWA_Bild.png",
    "/img/service-worker-infografik.jpg",
    "/img/SW.jpeg",
    "/img/SWPruefen.png",
    "/img/WAM_Chrome.png",
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

