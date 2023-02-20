const staticCache = "App-v1"
const assets = [
    "./",
    "/index.html",
    "/manifest.json",
    "/sw.js",
    "/src/style.css",
    "/src/script.js",
    "/images/icon-192.png",
    "/images/icon-512.png",
    "/pages/author.html",
    "/pages/about.html",
    "/pages/hebrew.html",
    "/pages/kabbalah.html",
    "/pages/solarcross.html",
    "/pages/tarot.html",
    "/pages/zodiac.html"
]
self.addEventListener("install", evt => {
    self.skipWaiting();
    evt.waitUntil(
      caches.open(staticCache)
      .then(cache => cache.addAll(assets))
      .catch(err => console.error(err))
    );
  });

  self.addEventListener("activate", evt => self.clients.claim());

self.addEventListener("fetch", evt => evt.respondWith(
    fetch(evt.request).catch(() => caches.match(evt.request))
  ));
// https://www.freecodecamp.org/news/build-a-pwa-from-scratch-with-html-css-and-javascript/
// https://code-boxx.com/simple-pwa-example/