/* English Quest PWA — cache versioned and safe offline fallback. */
const CACHE_NAME = 'english-quest-shell-v12';
const SHELL = ['./', './index.html', './styles.css', './app.js', './manifest.webmanifest', './icon.svg', './icons/icon-192.png', './icons/icon-512.png', './icons/icon-maskable-512.png', './icons/apple-touch-icon.png'];
const STATIC_ASSETS = new Set(['styles.css', 'app.js', 'manifest.webmanifest', 'icon.svg']);

self.addEventListener('install', event => {
  event.waitUntil((async () => {
    const cache = await caches.open(CACHE_NAME);
    await Promise.all(SHELL.map(async asset => {
      try {
        const response = await fetch(asset, { cache: 'reload' });
        if (response.ok) await cache.put(asset, response);
      } catch (_) { /* A failed optional asset must not break installation. */ }
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

async function staleWhileRevalidate(request) {
  const cache = await caches.open(CACHE_NAME);
  const cached = await cache.match(request);
  const refresh = fetch(request).then(async response => {
    if (response && response.ok) await cache.put(request, response.clone());
    return response;
  }).catch(() => null);
  if (cached) { refresh.catch(() => {}); return cached; }
  const fresh = await refresh;
  return fresh || Response.error();
}

self.addEventListener('fetch', event => {
  const request = event.request;
  if (request.method !== 'GET') return;
  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return;

  if (request.mode === 'navigate') {
    event.respondWith((async () => {
      try {
        const fresh = await fetch(request);
        if (fresh && fresh.ok) {
          const cache = await caches.open(CACHE_NAME);
          await cache.put('./index.html', fresh.clone());
        }
        return fresh;
      } catch (_) {
        return (await caches.match(request)) || (await caches.match('./index.html')) || Response.error();
      }
    })());
    return;
  }

  const path = url.pathname.split('/').pop() || '';
  if (STATIC_ASSETS.has(path) || /\.(?:png|svg|webmanifest)$/.test(path)) {
    event.respondWith(staleWhileRevalidate(request));
    return;
  }

  event.respondWith((async () => {
    const cached = await caches.match(request);
    if (cached) return cached;
    try {
      const response = await fetch(request);
      if (response && response.ok) {
        const cache = await caches.open(CACHE_NAME);
        await cache.put(request, response.clone());
      }
      return response;
    } catch (_) { return Response.error(); }
  })());
});
