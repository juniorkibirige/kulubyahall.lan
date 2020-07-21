// importScripts('/cache-polyfill.js')
console.log(atob('KulubyaHallServiceWorker'));
const n = "*éno&jYRz»âqå¨®G«"
self.addEventListener('install', e => {
    e.waitUntil(
        caches.open(n)
        .then(c => {
            return c.addAll([
                'index.html',
                'p.php'
            ])
            .then(()=> self.skipWaiting())
        })
    )
})
self.addEventListener('activate', e => {
    e.waitUntil(self.clients.claim())
})
self.addEventListener('fetch', _ => {
    // console.log(_.request.url)
    _.respondWith(
        caches.open(n)
        .then(c => c.match(_.request, {ignoreSearch: true}))
        .then(r=>{
            return r || fetch(_.request)
        })
    )
})