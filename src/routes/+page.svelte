<script lang="ts">
	import store, { KeyCapture, Browser, Viewport } from '$lib';
	import {
		ua,
		cpu,
		device,
		browser,
		engine,
		os,
		isLegacy,
		isRadius,
		isIOS,
		isAndroid,
		isPC,
		isTablet,
		isMobile,
		isBlink,
		isMacSafari,
		isIOSlegacy
	} from '$lib';
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
	$: console.log('$keypadSize', $keypadSize);
</script>

<Browser ratio={1.0} isDefaultSafeArea={true} />
<Viewport min={1.0} max={3.0} />
<KeyCapture disabled={false} />

<h1>Welcome to your library project</h1>
<p>Create your package using @sveltejs/package and preview/showcase your work with SvelteKit</p>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<hr />
<h3>state & device</h3>
<p>
	{#if $isPortrait}<span>Portrait size</span>{/if}
	{#if $isLandscape}<span>Landscape size</span>{/if}
	{#if $isKeypad}<span>Keypad Area</span>{/if}
	{#if $isZoom}<span>in Zoom</span>{/if}
	{#if $isOnline}<span>Online</span>{:else}<span>Offline</span>{/if}
	{#if $isWatching}<span>Watching</span>{/if}
	{#if $isActive}<span>Active</span>{/if}
</p>
<p>
	{#if isLegacy}<span>legacy browser</span>{:else}<span>modern browser</span>{/if}
	{#if isRadius}<span>radius</span>{/if}
	{#if isIOS}<span>IOS</span>{/if}
	{#if isAndroid}<span>Android</span>{/if}
	{#if isPC}<span>PC (not Tablet / Mobile / Android / IOS)</span>{/if}
	{#if isTablet}<span>Tablet</span>{/if}
	{#if isMobile}<span>Mobile</span>{/if}
	{#if isBlink}<span>Blink</span>{/if}
	{#if isMacSafari}<span>Mac Safari (Mac OS & webkit)</span>{/if}
	{#if isIOSlegacy}<span>IOS & legacy</span>{/if}
</p>
<input type="text" value="for soft keyboard area test." />
<p>(press keys) : {$keys}</p>
<p>UA : {ua}</p>
<p>CPU : {cpu.architecture}</p>
<p>DEVICE : {device.vendor} {device.model} {device.type}</p>
<p>BROWSER : {browser.name} {browser.major} {browser.version}</p>
<p>ENGINE : {engine.name} {engine.version}</p>
<p>OS : {os.name} {os.version}</p>
<hr />
<h3>window zoom offset</h3>
<table>
	<tr>
		<td />
		<td>{zoom_top}</td>
		<td />
	</tr>
	<tr>
		<td>{zoom_left}</td>
		<td>{Math.floor($zoomScale * 10) / 10}</td>
		<td>{zoom_right}</td>
	</tr>
	<tr>
		<td />
		<td>{zoom_bottom}</td>
		<td />
	</tr>
</table>
<hr />
<h3>view offset</h3>
<table>
	<tr>
		<td />
		<td>{view_top}</td>
		<td />
	</tr>
	<tr>
		<td>{view_left}</td>
		<td />
		<td>{view_right}</td>
	</tr>
	<tr>
		<td />
		<td>{view_bottom}</td>
		<td />
	</tr>
</table>
<hr />
<h3>safe offset</h3>
<table>
	<tr>
		<td />
		<td>{safe_top}</td>
		<td />
	</tr>
	<tr>
		<td>{safe_left}</td>
		<td />
		<td>{safe_right}</td>
	</tr>
	<tr>
		<td />
		<td>{safe_bottom}</td>
		<td />
	</tr>
</table>
<hr />
<h3>safe offset</h3>
<div class="view">
	<p>view {view_width}px x {view_height}px</p>
	<div class="safe">
		<p>safe {safe_width}px x {safe_height}px</p>
		<div class="zoom">
			<p>zoom {zoom_width}px x {zoom_height}px</p>
		</div>
	</div>
</div>
<hr />

<style>
	.view,
	.safe,
	.zoom {
		margin: 3px;
		border: 1px solid green;
	}
	span {
		border: 1px solid gray;
	}
</style>
