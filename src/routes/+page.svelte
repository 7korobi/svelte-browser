<script lang="ts">
	import store, { KeyCapture, Browser, Viewport } from '$lib';
	import { isPC, isTablet, isMobile, isBlink, isMacSafari, isIOSlegacy, isLegacy } from '$lib';
	const {
		isActive,
		isOnline,
		isWatching,
		isKeypad,
		isPortrait,
		isLandscape,
		isZoom,
		keys,
		zoomScale,
		zoomPoint,
		viewPoint,
		safePoint,
		zoomOffset,
		viewOffset,
		safeOffset,
		keypadSize,
		zoomSize,
		viewSize,
		safeSize
	} = store;

	if (isTablet) console.log('device is Tablet'); // device type Tablet
	if (isMobile) console.log('device is Mobile'); // device type Mobile
	if (isPC) console.log('device is PC'); // not Tablet / Mobile / Android / IOS
	if (isBlink) console.log('device is Blink'); // blink browser
	if (isMacSafari) console.log('device is Mac Safari'); // webkit browser && Mac OS
	if (isIOSlegacy) console.log('device is IOS legacy'); // IOS && legacy
	if (isLegacy) console.log('device is Legacy'); // not support VisualViewport / ResizeObaserver / IntersectionObserver

	$: if ($isActive) console.log('device is Active');
	else console.log('device is not Active'); // isOnline && isWatching
	$: if ($isOnline) console.log('device is Online');
	else console.log('device is not Online'); // detect online
	$: if ($isWatching) console.log('device is Watching');
	else console.log('device is not Watching'); // visible visibilityState
	$: if ($isKeypad) console.log('device has software Keypad Area');
	else console.log('device has not software Keypad Area'); // soft keypad detect
	$: if ($isPortrait) console.log('device is Portrait'); // width < height
	$: if ($isLandscape) console.log('device is Landscape'); // height < width
	$: if ($isZoom) console.log('device is Zoom');
	else console.log('device is not Zoom'); // 1.0 < zoomScale

	$: console.log('device zoom scale', $zoomScale);
	$: console.log($keys);
	$: [zoom_top, zoom_right, zoom_bottom, zoom_left] = $zoomOffset;
	$: [view_top, view_right, view_bottom, view_left] = $viewOffset;
	$: [safe_top, safe_right, safe_bottom, safe_left] = $safeOffset;
	$: [zoom_point_left, zoom_point_top] = $zoomPoint;
	$: [view_point_left, view_point_top] = $viewPoint;
	$: [safe_point_left, safe_point_top] = $safePoint;
	$: [zoom_width, zoom_height] = $zoomSize;
	$: [view_width, view_height] = $viewSize;
	$: [safe_width, safe_height] = $safeSize;
	$: [keypad_width, keypad_height] = $keypadSize;
	$: console.log('$zoomPoint', $zoomPoint);
	$: console.log('$viewPoint', $viewPoint);
	$: console.log('$safePoint', $safePoint);
	$: console.log('$zoomSize', $zoomSize);
	$: console.log('$viewSize', $viewSize);
	$: console.log('$safeSize', $safeSize);
	$: console.log('$keypadSize', $keypadSize);
</script>

<Browser ratio={1.0} isDefaultSafeArea={true} />
<Viewport min={1.0} max={3.0} />
<KeyCapture disabled={false} />

<h1>Welcome to your library project</h1>
<p>Create your package using @sveltejs/package and preview/showcase your work with SvelteKit</p>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<hr />
<h3>window zoom offset</h3>
<table>
	<tr>
		<td />
		<td>{$zoomOffset[0]}</td>
		<td />
	</tr>
	<tr>
		<td>{$zoomOffset[3]}</td>
		<td>{Math.floor($zoomScale * 10) / 10}</td>
		<td>{$zoomOffset[1]}</td>
	</tr>
	<tr>
		<td />
		<td>{$zoomOffset[2]}</td>
		<td />
	</tr>
</table>
<hr />
<h3>view offset</h3>
<table>
	<tr>
		<td />
		<td>{$viewOffset[0]}</td>
		<td />
	</tr>
	<tr>
		<td>{$viewOffset[3]}</td>
		<td />
		<td>{$viewOffset[1]}</td>
	</tr>
	<tr>
		<td />
		<td>{$viewOffset[2]}</td>
		<td />
	</tr>
</table>
<hr />
<h3>safe offset</h3>
<table>
	<tr>
		<td />
		<td>{$safeOffset[0]}</td>
		<td />
	</tr>
	<tr>
		<td>{$safeOffset[3]}</td>
		<td />
		<td>{$safeOffset[1]}</td>
	</tr>
	<tr>
		<td />
		<td>{$safeOffset[2]}</td>
		<td />
	</tr>
</table>
<hr />
