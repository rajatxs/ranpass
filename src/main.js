// @ts-ignore
import App from './App.svelte';

window.addEventListener('load', function () {

	// register service worker
	if ('serviceWorker' in navigator) {
		navigator.serviceWorker.register('/sw.js');
	}
});

const app = new App({
	target: document.body
});

export default app;