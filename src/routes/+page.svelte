<script>
	import CardContainer from '../lib/components/CardContainer.svelte';

	export let data;

	let cardNumber = data.cardNames.length;
	let randomName = data.cardNames[Math.floor(Math.random() * cardNumber)];
	let displayCardInfo = data.cardInfo[randomName];
</script>

<h1>Algomancy</h1>

<div class="flexContainer">
	<CardContainer cardInfo={displayCardInfo} />
	<div class="summaryContainer">
		<h2>Game Summary</h2>
		<p>
			This is a longer section with some descriptions about the game and what to
			expect from it. There's likely two or three sentences here to really get
			the point across, but not in a long wordy sort of way.
		</p>
	</div>
</div>

<style>
	.flexContainer {
		display: flex;
		justify-content: space-around;
		flex-wrap: wrap;
		gap: 20px;
	}

	.summaryContainer {
		max-width: 300px;
	}
</style>
