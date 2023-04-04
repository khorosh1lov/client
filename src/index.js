import "bootstrap/dist/css/bootstrap.css";

import App from "./App";
import React from "react";
import ReactDOM from "react-dom/client";

if ('serviceWorker' in navigator) {
	window.addEventListener('load', () => {
		navigator.serviceWorker
			.register('service-worker.js')
			.then((registration) => {
				console.log('Service Worker registered: ', registration);
			})
			.catch((error) => {
				console.error('Service Worker registration failed: ', error);
			});
	});
}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
