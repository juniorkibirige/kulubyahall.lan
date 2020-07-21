// importScripts('/cache-polyfill.js')
// importScripts('/resources/static/js/jquery-3.4.1.min.js')
const v = "1.1.2"
const n = "Kulubya Hall - " + v
const CACHE_NAME = n
const DATA_CACHE_NAME = "DataCache - Kulubya Hall - " + v

self.addEventListener('install', e => {
    e.waitUntil(
        caches.open(CACHE_NAME)
            .then(c => {
                return c.addAll([
                    '.',
                    '/?_rdr&utm_source=pwa',
                    'index.html',
                    'favicon.png',
                    'offline.html',
                    'Service_Worker.js',
                    'manifest.json',
                    '/resources/static/js/popper.min.js',
                    '/resources/static/js/bootstrap.min.js',
                    '/resources/static/js/jquery-3.4.1.min.js',
                    '/resources/static/js/stopper.js',
                    '/resources/static/styles/style.css',
                    '/resources/includes/header.inc.php',
                    '/resources/static/js/lazysizes.min.js',
                    '/resources/folklore/index.html',
                    '/resources/events/index.html',
                    '/resources/icons/webapp-icon-192.png',
                    '/resources/includes/generate_calendar.js'
                ])
                    .then(() => self.skipWaiting())
            })
    )
})
self.addEventListener('activate', e => {
    e.waitUntil(
        caches.keys()
            .then((keyList) => {
                return Promise.all(keyList.map((key) => {
                    if (key !== CACHE_NAME && key !== DATA_CACHE_NAME) {
                        console.log('[Offline Server] Removing old cache ', key)
                        return caches.delete(key)
                    }
                }))
            })
    )
    self.clients.claim()
})
// self.addEventListener('fetch', evt => {

//     if (evt.request.url.includes('/images/')) {
//         console.log('[Offline Server] Fetch (DataCache)', evt.request.url);
//         evt.respondWith(
//             caches.open(DATA_CACHE_NAME).then((cache) => {
//               return fetch(evt.request)
//                   .then((response) => {
//                     // If the response was good, clone it and store it in the cache.
//                     if (response.status === 200) {
//                       cache.put(evt.request.url, response.clone());
//                     }
//                     return response;
//                   }).catch((err) => {
//                     // Network request failed, try to get it from the cache.
//                     return cache.match(evt.request);
//                   });
//             }));
//         return;
//     }
//     if (evt.request.url.includes('/icons/')) {
//         console.log('[Offline Server] Fetch (DataCache)', evt.request.url);
//         evt.respondWith(
//             caches.open(DATA_CACHE_NAME).then((cache) => {
//               return fetch(evt.request)
//                   .then((response) => {
//                     // If the response was good, clone it and store it in the cache.
//                     if (response.status === 200) {
//                       cache.put(evt.request.url, response.clone());
//                     }
//                     return response;
//                   }).catch((err) => {
//                     // Network request failed, try to get it from the cache.
//                     return cache.match(evt.request);
//                   });
//             }));
//         return;
//     }
//     evt.respondWith(
//         caches.open(CACHE_NAME).then((cache) => {
//             return cache.match(evt.request)
//                 .then((response) => {
//                     if(response) {
//                         return response
//                     } else {
//                         return fetch(evt.request)
//                         .then((r)=>{
//                             if(r.status === 200){
//                                 cache.put(evt.request.url, r.clone())
//                             }
//                             return r
//                         })
//                         .catch(e=>{
//                             return cache.match(evt.request)
//                         })
//                     }
//                 }
//             );
//         })
//     );
// })

self.addEventListener('fetch', event => {
    evt = event
    if (evt.request.url.includes('googletag')) {
        console.log('[Google Analytics] Fetch (DataCache)', evt.request.url);
        evt.respondWith(
            caches.open(DATA_CACHE_NAME).then((cache) => {
                return fetch(evt.request)
                    .then((response) => {
                        return response;
                    }).catch((err) => {
                        return caches.match('/offline.html')
                    });
            }));
        return;
    }
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                return response || fetchAndCache(event.request)
            })
    )
})

fetchAndCache = (url) => {
    return fetch(url)
        .then(response => {
            if (!response.ok) {
                throw Error(response.statusText)
            }
            return caches.open(CACHE_NAME)
                .then(cache => {
                    console.log("[Offline Server] Fetch (DataCache) ", url.url)
                    cache.put(url, response.clone())
                    return response
                })
        })
        .catch(err => {
            console.log("[Offline Server] Fetch Error (DataCache) ", url.url)
            return caches.match('/offline.html')
        })
}
