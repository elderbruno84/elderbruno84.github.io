// Service Worker mínimo para PWA do jogo da memória
const CACHE = "familia-pwa-v1";
const OFFLINE_URL = "offline.html";

self.addEventListener("install", (event) => {
  event.waitUntil((async () => {
    const cache = await caches.open(CACHE);
    // Pré-cache apenas o básico do mesmo domínio
    await cache.addAll([
      "./",
      "./index.html",
      OFFLINE_URL
    ]);
    await self.skipWaiting();
  })());
});

self.addEventListener("activate", (event) => {
  event.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys.map(k => (k !== CACHE ? caches.delete(k) : null)));
    await self.clients.claim();
  })());
});

self.addEventListener("fetch", (event) => {
  const req = event.request;
  if (req.method !== "GET") return;

  // Estratégia: rede primeiro; se falhar, usa cache; se ainda falhar, mostra offline.html
  event.respondWith((async () => {
    try {
      const fresh = await fetch(req);
      // Cacheia em background
      const cache = await caches.open(CACHE);
      cache.put(req, fresh.clone()).catch(() => {});
      return fresh;
    } catch (err) {
      const cache = await caches.open(CACHE);
      const cached = await cache.match(req);
      return cached || cache.match(OFFLINE_URL);
    }
  })());
});
