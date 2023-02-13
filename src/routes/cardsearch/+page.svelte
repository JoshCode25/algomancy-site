<script>
	import SearchButton from '$lib/components/SearchButton.svelte';
	import { searchFilterStore } from '$lib/stores/searchFilterStore.js';

	export let data;
	let totalDisplayed = 120;

	function toggleFactionEquals() {
		$searchFilterStore.factionEquals = !$searchFilterStore.factionEquals;
		console.log($searchFilterStore);
	}

	$: console.log(data);
</script>

<h1>Search all available Algomancy cards</h1>

<div class="searchWrapper">
	<input
		type="search"
		placeholder="Search Cards (Regex or Text)"
		bind:value={$searchFilterStore.searchField}
	/>
	{#if $searchFilterStore.isRegex}
		<p class="modifierMessage">
			Regex Search: modifiers must be in alphabetical order
		</p>
	{/if}
	<div class="buttonWrapper">
		{#each $searchFilterStore.factionList as faction}
			<SearchButton factionName={faction[0]} />
		{/each}
	</div>
	<div class="flex-wrapper">
		<p>{`Total Results: ${totalDisplayed}`}</p>
		<button class="factionButton" type="button" on:click={toggleFactionEquals}
			>Faction Filter: {$searchFilterStore.factionEquals}</button
		>
	</div>
</div>

<style lang="postcss">
	p {
		margin: 10px 5px 5px 5px;
		font-size: 20px;
	}

	.flex-wrapper {
		display: flex;
		justify-content: space-around;
		align-items: center;
		margin: 0px auto;
		min-width: 300px;
		max-width: 400px;
	}

	input {
		margin: 10px;
		padding: 0 5px;
		height: 35px;
		width: 300px;
		font-size: 18px;
		border: 2px solid var(--logo-black);
		border-radius: 8px;
	}

	@media screen and (min-width: 450px) {
		input {
			width: 450px;
		}
	}

	.modifierMessage {
		margin: 0px 0px 4px 0px;
		font-size: 14px;
		font-weight: bold;
	}
</style>
