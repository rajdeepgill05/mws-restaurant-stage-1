self.addEventListener('install', function(event){
    console.log("Installing Servicw Worker and Chaching Data");
    event.waitUntil(
        caches.open('stuff-1').then(function(cache){
            return cache.addAll(
                [
                    '/',
                    '/css/styles.css',
                    '/data/restaurants.json',
                    '/index.html',
                    '/restaurant.html',
                    '/js/dbhelper.js',
                    '/js/main.js',
                    '/img/1.jpg',
                    '/img/2.jpg',
                    '/img/3.jpg',
                    '/img/4.jpg',
                    '/img/5.jpg',
                    '/img/6.jpg',
                    '/img/7.jpg',
                    '/img/8.jpg',
                    '/img/9.jpg',
                    '/img/10.jpg',
                    
                ]
            )
        })
    )
})
self.addEventListener('fetch', function(event){
    event.respondWith(
        caches.match(event.request).then(function(response){
            if (response) return response;
            return fetch(event.request).then(function(response) {

                // TODO 5 - Respond with custom 404 page
              
                return caches.open(staticCacheName).then(function(cache) {
                  if (event.request.url.indexOf('test') < 0) {
                    cache.put(event.request.url, response.clone());
                  }
                  return response;
                });
              });
        }).catch(function(error) {
            console.log('Error, ', error);
            return caches.match('./raj.html');
          })
    )
})