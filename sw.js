// Svar: copia local de la app para abrirla sin conexion. No guarda respuestas ni llama al almacenamiento.
const C = "svar-v13";
const SHELL = ["./", "manifest.webmanifest", "icon-192.png", "icon-512.png", "https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js"];
self.addEventListener("install", e => {
  e.waitUntil(caches.open(C).then(c => Promise.all(SHELL.map(u => c.add(u).catch(() => null)))).then(() => self.skipWaiting()));
});
self.addEventListener("activate", e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== C).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener("fetch", e => {
  const r = e.request;
  if (r.method !== "GET") return;
  const u = new URL(r.url);
  if (u.hostname === "api.fuge1618.com") return;
  if (r.mode === "navigate") {
    e.respondWith(fetch(r).then(x => { const cp = x.clone(); caches.open(C).then(c => c.put("./", cp)); return x; }).catch(() => caches.match("./")));
    return;
  }
  if (u.origin === location.origin || /(^|\.)cdnjs\.cloudflare\.com$|(^|\.)fonts\.(googleapis|gstatic)\.com$/.test(u.hostname)) {
    e.respondWith(caches.match(r).then(hit => {
      const net = fetch(r).then(x => { if (x && (x.ok || x.type === "opaque")) { const cp = x.clone(); caches.open(C).then(c => c.put(r, cp)); } return x; }).catch(() => hit);
      return hit || net;
    }));
  }
});
