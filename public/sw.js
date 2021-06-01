const storageId = "shell-v1";
const assets = [
   "/",
   "/index.html",
   "/css/global.css",
   "/css/utils.css",
   "/build/bundle.css",
   "/build/bundle.js",
   "/manifest.webmanifest",
   "/images/auth.svg",
   "/favicon.ico",
   "/favicon-16x16.png",
   "/favicon-32x32.png",
   "/favicon-96x96.png",
   "/android-icon-36x36.png",
   "/android-icon-48x48.png",
   "/android-icon-72x72.png",
   "/android-icon-96x96.png",
   "/android-icon-144x144.png",
   "/android-icon-192x192.png",
   "https://fonts.gstatic.com/s/poppins/v15/pxiByp8kv8JHgFVrLEj6Z1xlFQ.woff2",
   "https://fonts.gstatic.com/s/poppins/v15/pxiEyp8kv8JHgFVrJJfecg.woff2",
   "https://fonts.gstatic.com/s/inter/v3/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa1ZL7.woff2",
   "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Poppins:wght@400;500;600&display=swap"
];

self.addEventListener("install", (event) => {
   event.waitUntil(
      caches.open(storageId).then((cache) => {
         cache.addAll(assets);
      })
   );
});

self.addEventListener("activate", (event) => {
   event.waitUntil(
      caches.keys().then((keys) => {
         return Promise.all(
            keys.filter((key) => key !== storageId)
               .map((key) => caches.delete(key))
         )
      })
   );
});

self.addEventListener("fetch", (event) => {
   event.respondWith(
      caches.match(event.request).then((res) => {
         return res || fetch(event.request);
      })
   );
});