<script>
	import SearchButton from '$lib/components/SearchButton.svelte';
	import { searchFilterStore } from '$lib/stores/searchFilterStore.js';

	let totalDisplayed = 120;
</script>

<h1>Search all available Algomancy cards</h1>

<div class="searchWrapper">
	<input
		type="search"
		placeholder="Search Cards (Regex or Text)"
		bind:value={$searchFilterStore.searchField}
	/>
	<div class="buttonWrapper">
		{#each $searchFilterStore.factionList as faction}
			<SearchButton factionName={faction[0]} />
		{/each}
	</div>
	<div class="flex-wrapper">
		<p>{`Total Results: ${totalDisplayed}`}</p>
		<!-- <button  
            type="button"
            onClick={toggleFactionEquals}
        >Faction Filter Setting: {factionToggleButtonDisplay}</button> -->
	</div>
</div>

<!-- <div id="algomancySearchWrapper">
            {isRegex ? <p id="modifierMessage">Regex Search: modifiers must be in alphabetical order</p>: null}


        </div> -->
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

	/* div#algomancySearchWrapper > div.flex-wrapper > button#factionEqualToggleButton {
    color: black;
    background-color: whitesmoke;
    font-size: 16px;
    font-weight: bold;
    margin: 5px 5px;
    padding: 0px 10px;
    min-width: 80px;
    min-height: 40px;
    border: 2px solid black;
    border-radius: 8px;
}

div#algomancySearchWrapper > div.flex-wrapper > button#factionEqualToggleButton:hover {
    cursor: pointer;
    opacity: 0.8;
}

p#modifierMessage {
    margin: 0px 0px 4px 0px;
    font-size: 14px;
    font-weight: bold;
} */
</style>
