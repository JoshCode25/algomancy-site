<script>
	import { onMount } from 'svelte';
	import { searchFilterStore } from '$lib/stores/searchFilterStore.js';

	export let factionName;

	let buttonActive = true;
	let button;

	onMount(() => {
		button.style.backgroundColor = `var(--faction-color-${factionName})`;
		button.style.color = 'var(--light-text-color)';
	});

	const toggleFactionFilter = () => {
		if (buttonActive) {
			button.style.backgroundColor = 'var(--faction-color-inactive)';
			button.style.color = 'var(--faded-text-color)';
		} else if (!buttonActive) {
			button.style.backgroundColor = `var(--faction-color-${factionName})`;
			button.style.color = 'var(--light-text-color)';
		}
		buttonActive = !buttonActive;
		$searchFilterStore.factionFilter[factionName] = buttonActive;
	};
</script>

<button type="button" bind:this={button} on:click={toggleFactionFilter}
	>{factionName}</button
>

<style>
	button {
		color: var(--light-text-color);
		background-color: var(--faction-color-inactive);
		font-size: 16px;
		margin: 5px 5px;
		min-width: 80px;
		min-height: 40px;
		border: 2px solid var(--logo-black);
		border-radius: 8px;
	}

	button:hover {
		cursor: pointer;
		opacity: 0.8;
	}
</style>
