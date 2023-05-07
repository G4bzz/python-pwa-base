const staticPyPWA = "dev-pypwa-v4"
const assets = [
    // "",
    // "/",
    //"/static/css/site.css",
    "/static/js/pwa-scaffold.js",

    "/static/python/main.py",

    "/static/images/icons/android-chrome-512x512.png",
    "/static/images/icons/apple-touch-icon.png",
    "/static/images/icons/browserconfig.xml",
    "/static/images/icons/favicon.ico",
    "/static/images/icons/favicon-16x16.png",
    "/static/images/icons/favicon-32x32.png",
    "/static/images/icons/mstile-150x150.png",
    "/static/images/icons/safari-pinned-tab.svg",
    "/static/images/icons/site.webmanifest",
]

self.addEventListener("install", installEvent => {
    installEvent.waitUntil(
        caches.open(staticPyPWA).then(cache => {
            cache.addAll(assets).then(r => {
                console.log("Cache assets downloaded");
            }).catch(err => console.log("Error caching item", err))
            console.log(`Cache ${staticPyPWA} opened.`);
        }).catch(err => console.log("Error opening cache", err))
    )
})

self.addEventListener("fetch", fetchEvent => {
    fetchEvent.respondWith(
        caches.match(fetchEvent.request).then(res => {
            return res || fetch(fetchEvent.request)
        }).catch(err => console.log("Cache fetch error: ", err))
    )
})