<script>
	import { onMount } from 'svelte';
	import { searchFilterStore } from '$lib/stores/searchFilterStore.js';

	export let factionName;

	let buttonActive = true;
	let button;

	//set default button styling to active
	onMount(() => {
		button.style.backgroundColor = `var(--faction-color-${factionName})`;
		button.style.color = 'var(--light-text-color)';
	});

	//update button styling based on active status
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
	}
</style>
