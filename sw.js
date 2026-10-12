/* English Quest PWA shell — stale-while-revalidate for same-origin GET assets. */
const CACHE_NAME = 'english-quest-shell-v6';
const SHELL = ['./', './index.html', './manifest.webmanifest', './icon.svg', './icon-192.png', './icon-512.png', './apple-touch-icon.png'];
self.addEventListener('install', event => {
  event.waitUntil((async () => {
    const cache = await caches.open(CACHE_NAME);
    await Promise.all(SHELL.map(async path => {
      try { const response = await fetch(path, {cache:'reload'}); if (response.ok) await cache.put(path, response); } catch (_) {}
    }));
    await self.skipWaiting();
  })());
});
self.addEventListener('activate', event => {
  event.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys.filter(key => key.startsWith('english-quest-') && key !== CACHE_NAME).map(key => caches.delete(key)));
    await self.clients.claim();
  })());
});
self.addEventListener('fetch', event => {
  const request = event.request;
  if (request.method !== 'GET') return;
  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return;
  const key = request.mode === 'navigate' ? './index.html' : request;
  const networkUpdate = fetch(request).then(async response => {
    if (response && response.ok) {
      try { const cache = await caches.open(CACHE_NAME); await cache.put(key, response.clone()); } catch (_) {}
    }
    return response;
  }).catch(() => null);
  // Extend the fetch event immediately; cached content is returned while the cache refreshes.
  event.waitUntil(networkUpdate.then(() => undefined));
  event.respondWith((async () => {
    const cache = await caches.open(CACHE_NAME);
    const cached = await cache.match(key) || (request.mode === 'navigate' ? await cache.match('./') : null);
    if (cached) return cached;
    const fresh = await networkUpdate;
    if (fresh) return fresh;
    if (request.mode === 'navigate') return (await cache.match('./index.html')) || Response.error();
    return Response.error();
  })());
});
