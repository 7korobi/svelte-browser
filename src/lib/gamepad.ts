import { __BROWSER__ } from 'svelte-petit-utils';
import { listen } from 'svelte/internal';
import { readable } from 'svelte/store';
import { state } from './store';

export const gamepads = readable(state.gamepads, (set) => {
	if (!(__BROWSER__ && window?.ongamepadconnected)) return;

	let polling = true;
	requestAnimationFrame(poll);
	const byes = [] as (() => void)[];
	byes[0] = listen(window, 'gamepadconnected', (({ gamepad }: GamepadEvent) => {
		state.gamepads[gamepad.index] = gamepad;
		set(state.gamepads);
	}) as any);
	byes[1] = listen(window, 'gamepaddisconnected', (({ gamepad }: GamepadEvent) => {
		delete state.gamepads[gamepad.index];
		set(state.gamepads);
	}) as any);

	return () => {
		polling = false;
		byes[0]();
		byes[1]();
	};

	function poll() {
		for (const gamepad of window.navigator.getGamepads()) {
			if (!gamepad) continue;
			state.gamepads[gamepad.index] = gamepad;
			set(state.gamepads);
		}
		if (polling) requestAnimationFrame(poll);
	}
});
