// Coffee Ghor offline support. Network first, so an online phone always gets the latest app;
// the cached copy is only used when there's no connection (a kitchen with bad Wi-Fi).
const CACHE = "coffee-ghor-v2";
const CORE = ["/", "/app.js", "/manifest.json", "/icon.svg", "/apple-touch-icon.png", "/icon-192.png", "/icon-512.png",
  "/fonts/young-serif-400.woff2", "/fonts/atkinson-hyperlegible-400.woff2", "/fonts/atkinson-hyperlegible-700.woff2"];
self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(CORE)).then(() => self.skipWaiting()));
});
self.addEventListener("activate", e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener("fetch", e => {
  const req = e.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return;
  const font = url.pathname.startsWith("/fonts/");
  const keep = res => { if (res && (res.ok || res.type === "opaque")){ const copy = res.clone(); caches.open(CACHE).then(c => c.put(req, copy)); } return res; };
  if (font){ // fonts never change: cache first
    e.respondWith(caches.match(req).then(hit => hit || fetch(req).then(keep)));
    return;
  }
  e.respondWith(fetch(req).then(keep).catch(() => caches.match(req, { ignoreSearch:true })
    .then(hit => hit || (req.mode === "navigate" ? caches.match("/") : Response.error()))));
});
