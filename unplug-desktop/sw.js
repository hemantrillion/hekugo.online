const CACHE_NAME = 'unplug-studio-v1';
const ASSETS = [
  '/unplug-desktop/studio.html',
  '/unplug-desktop/studio.js',
  '/unplug-desktop/studio.css',
  '/unplug-desktop/games/bounce.html',
  '/unplug-desktop/games/snake.html',
  '/unplug-desktop/games/memory.html',
  '/unplug-desktop/games/space_dodge.html'
];

self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS)));
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});