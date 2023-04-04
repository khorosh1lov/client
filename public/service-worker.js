
self.addEventListener('install', (event) => {
	event.waitUntil(
		caches.open('app-cache').then((cache) => {
			return cache.addAll([
				'/', 
				'/index.html', 
				'/static/js/bundle.js', 
				'/static/js/0.chunk.js', 
				'/static/js/main.chunk.js', 
				'/manifest.json', 
				'/favicon.ico',
				'/favicon-16x16.png',
				'/favicon-32x32.png',
				'/android-chrome-192x192.png', 
				'/android-chrome-512x512.png', 
				'/apple-touch-icon.png'
			]);
		}),
	);
});

self.addEventListener('fetch', (event) => {
	event.respondWith(
		caches.match(event.request).then((response) => {
			return response || fetch(event.request);
		}),
	);
});
