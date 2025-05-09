
self.addEventListener('install', function(e) {
  console.log('[ServiceWorker] Installed');
});

self.addEventListener('fetch', function(e) {
  // Può essere esteso per caching in futuro
});
