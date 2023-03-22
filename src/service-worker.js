// This code listens for the user's confirmation to update the app.

self.addEventListener('message', (event) => {
    if (event.data && event.data.type === 'SKIP_WAITING') {
        self.skipWaiting();
    }
});

workbox.routing.registerRoute(
    new RegExp("http://fonts.(?:googleapis|gstatis).com/(.*)"),
    new workbox.strategies.CacheFirst({
        cacheName: "googleapis",
        plugins: [
        new workbox.expiration.Plugin({
            maxEntries: 30
        })
        ],
        method: "GET",
        cacheableResponse: { status: [0, 200] }
    })
);
workbox.core.setCacheNameDetails({ prefix: "demo" });
workbox.core.clientsClaim();

// The precaching code provided by Workbox.
self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
  