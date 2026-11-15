/**
 * ============================================================================
 * SERVICE WORKER: KUNSAMU · ALUNA IA (Offline-First para la Sierra Nevada)
 * ============================================================================
 * Version: kunsamu-v6
 * Estrategia: Cache-First con fallback a red y actualizacion automatica limpia.
 *
 * Garantiza navegacion autonoma en zonas rurales de la Sierra Nevada sin conexion.
 * ============================================================================
 */

const CACHE_NAME = 'kunsamu-v6';

const STATIC_ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './assets/semillita.svg',
  './icon.svg',
  './css/styles.css',
  './js/icons.js',
  './js/data-iku.js',
  './js/db.js',
  './js/app.js'
];

// Evento de Instalacion: Precacheo de todos los activos estaticos
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        return cache.addAll(STATIC_ASSETS);
      })
      .then(() => self.skipWaiting())
  );
});

// Evento de Activacion: Purga de versiones previas de cache
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((name) => {
          if (name !== CACHE_NAME) {
            return caches.delete(name);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Evento Fetch: Intercepta solicitudes con estrategia Cache-First
self.addEventListener('fetch', (event) => {
  // Ignorar peticiones que no sean GET
  if (event.request.method !== 'GET') return;

  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) {
        // En segundo plano busca si hay version fresca en la red si hay conexion
        fetch(event.request).then((networkResponse) => {
          if (networkResponse && networkResponse.status === 200) {
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(event.request, networkResponse);
            });
          }
        }).catch(() => {
          // Sin conexion: sigue sirviendo la copia de cache sin errores
        });
        return cachedResponse;
      }

      return fetch(event.request).then((networkResponse) => {
        if (!networkResponse || networkResponse.status !== 200 || networkResponse.type !== 'basic') {
          return networkResponse;
        }
        const responseToCache = networkResponse.clone();
        caches.open(CACHE_NAME).then((cache) => {
          cache.put(event.request, responseToCache);
        });
        return networkResponse;
      }).catch(() => {
        // Fallback offline para navegacion
        if (event.request.mode === 'navigate') {
          return caches.match('./index.html');
        }
      });
    })
  );
});
