importScripts('serviceworker-cache-polyfill.js');
var CACHE_NAME = 'YWC15';
var urlsToCache = [
  '/',
  '/index.html',
  '/manifest.json',
  '/service-worker.js',
  '/serviceworker-cache-polyfill.js',
  '/assets/css/bulma.css',
  '/assets/css/materialdesignicons.min.css',
  '/assets/css/style.css',
  '/assets/css/loading.css',
  '/assets/fonts/materialdesignicons-webfont.eot',
  '/assets/fonts/materialdesignicons-webfont.svg',
  '/assets/fonts/materialdesignicons-webfont.ttf',
  '/assets/fonts/materialdesignicons-webfont.woff',
  '/assets/fonts/materialdesignicons-webfont.woff2',
  '/assets/js/jquery-3.2.1.min.js',
  '/assets/js/jquery-3.2.1.min.js',
  '/assets/js/jquery-3.2.1.min.js',
  '/assets/js/jquery-3.2.1.min.js',
  '/assets/js/jquery-3.2.1.min.js',
  '/assets/image/95846.jpg',
  '/assets/image/facebook.png',
  '/assets/image/home.jpg',
  '/assets/image/icon_localtion.png',
  '/assets/image/icon_orther.png',
  '/assets/image/line.jpg',
  '/assets/image/linkedin.png',
  '/assets/image/qrcode.png',
  '/assets/image/emotion/icon_anger.png',
  '/assets/image/emotion/icon_contempt.png',
  '/assets/image/emotion/icon_disgust.png',
  '/assets/image/emotion/icon_fear.png',
  '/assets/image/emotion/icon_happiness.png',
  '/assets/image/emotion/icon_neutral.png',
  '/assets/image/emotion/icon_robot.png',
  '/assets/image/emotion/icon_sadness.png',
  '/assets/image/emotion/icon_surprise.png',
  '/assets/image/logo/logo.png',
  '/assets/image/logo/logo-click.png',
  '/assets/image/logo/logo-mobile.png',
  '/assets/image/logo/logo-ywc15-120.png',
  '/assets/image/logo/logo-ywc15-128.png',
  '/assets/image/logo/logo-ywc15-144.png',
  '/assets/image/logo/logo-ywc15-152.png',
  '/assets/image/logo/logo-ywc15-192.png',
  '/assets/image/logo/logo-ywc15-256.png',
  '/assets/image/logo/logo-ywc15-384.png',
  '/assets/image/logo/logo-ywc15-512.png'
];
self.addEventListener('install', function(event){
  // Perform install steps
  console.log('OK');  
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        return cache.addAll(urlsToCache);
      })
  );  
});
self.addEventListener('activate', function(event) {
  console.log('Finally active. Ready to start serving content!');  
});
self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      }
    )
  );
});
