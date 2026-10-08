const CACHE="sa1nt-shell-v1";
const APP=["/","/index.html","/css/style.css","/js/main.js","/js/intro.js","/js/ui.js","/assets/sa1nt-logo.png","/assets/sa1nt-opening-reference.png","/assets/logout-quote-reference.png"];
self.addEventListener("install",event=>event.waitUntil(caches.open(CACHE).then(c=>c.addAll(APP)).then(()=>self.skipWaiting())));
self.addEventListener("activate",event=>event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener("fetch",event=>{
  if(event.request.method!=="GET")return;
  const url=new URL(event.request.url);
  if(url.pathname.startsWith("/api/"))return;
  event.respondWith(fetch(event.request).then(response=>{
    const copy=response.clone(); caches.open(CACHE).then(c=>c.put(event.request,copy)); return response;
  }).catch(()=>caches.match(event.request).then(r=>r||caches.match("/index.html"))));
});
