<script>
	import CardContainer from '../lib/components/CardContainer.svelte';
	import './homestyle.css';

	export let data;

	let cardNumber = data.cardNames.length;
	let randomName = data.cardNames[Math.floor(Math.random() * cardNumber)];
	let displayCardInfo = data.cardInfo[randomName];
</script>

<div class="displayContainer">
	<div class="queryWrapper">
		<div class="imgWrapper">
			<CardContainer cardInfo={displayCardInfo} />
		</div>
		<div class="summaryContainer">
			<h2>Game Summary</h2>
			<p>
				Algomancy is a complete card game, meaning you will get every card
				needed to play the game all at once. No expensive singles, no problems
				with scarcity, just excellent gameplay at an affordable price.
			</p>
			<p>
				The game is both a fully balanced and ready to play 8 player game as
				well as a card pool for a variety of constructed formats. So you can use
				it as a board game to play with your friends and a source of cards to
				battle it out in customizable constructed decks.
			</p>
		</div>
	</div>
</div>

<style lang="postcss">
	p {
		text-align: left;
		margin: 10px 20px;
	}
	.displayContainer {
		container: homeDisplay / inline-size;
	}
</style>
