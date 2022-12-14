import { listen } from 'svelte/internal';

export function readyDownload(
	el: HTMLImageElement | HTMLIFrameElement,
	url: string,
	timeout = 20000
): Promise<Event> {
	return new Promise((ok, ng) => {
		const byes = [
			listen(el, '--abort', fail),
			listen(el, 'error', fail),
			listen(el, 'load', success)
		];
		el.src = url;

		function bye() {
			byes.forEach((fn) => fn());
		}

		function fail(e: Event = new Event(`timeout ${timeout / 1000}sec`)) {
			el.src = '';
			bye();
			ng(e);
		}

		function success(e: Event) {
			bye();
			ok(e);
		}
	});
}
