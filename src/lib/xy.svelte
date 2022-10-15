<script lang="ts">
	import type { POINT } from 'svelte-petit-utils';

	const by_deg = (Math.PI * 2) / 360;

	export let data: POINT[] = [];
	export let view = 100;
	export let vw = view;
	export let vh = view;
	export let size = '10em';
	export let width = size;
	export let height = size;
	export let style = 'solid' as 'hide' | 'wide' | 'solid' | 'dotted';
</script>

<svg viewBox="-{vw} -{vh} {vw * 2} {vh * 2}" {width} {height}>
	<g class="edgePath">
		<path class="base dotted" d="M{-vw},0L{vw},0M0,{-vh}L0,{vh}" />
		{#each data as [x, y], idx}
			{#if y}
				<path class="path{idx} {style}" d="M{x},{-y}L0,0" />
				<text class="path{idx}" text-anchor="middle" {x} y={-y}>{parseInt(x)} x {parseInt(y)}</text>
			{:else}
				{@const rx = 0.9 * view * Math.sin(x * by_deg)}
				{@const ry = 0.9 * view * Math.cos(x * by_deg)}
				<path class="path{idx} {style}" d="M{rx},{-ry}L0,0" />
				<text class="path{idx}" text-anchor="middle" x={rx} y={-ry}>{parseInt(x)}</text>
			{/if}
		{/each}
	</g>
</svg>

<style>
	svg g path {
		fill: none;
		stroke-linecap: round;
		stroke-linejoin: round;
	}

	path.hide {
		stroke: none;
		stroke-width: 0;
	}
	path.wide {
		stroke-width: 6px;
	}
	path.solid {
		stroke-width: 3px;
	}
	path.dotted {
		stroke-width: 6px;
		stroke-dasharray: 0, 12px;
	}
</style>
