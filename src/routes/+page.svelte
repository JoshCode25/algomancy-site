<script>
	import { beforeUpdate } from 'svelte';
	import './homestyle.css';

	export let data;

	let cardNumber = data.totalCardNames.length;
	let randomName = data.totalCardNames[Math.floor(Math.random() * cardNumber)];
	let randomNameDash;
	beforeUpdate(() => {
		randomNameDash = randomName
			.replace(/[.,/#!$%^&*;:{}=_`'~()]/g, '')
			.split(' ')
			.join('-');
	});
</script>

<div class="displayContainer">
	<div class="queryWrapper">
		{#if randomNameDash}
			<img
				src={`https://calebgannon.com/wp-content/uploads/cardsearch-images/${randomNameDash}.jpg`}
				alt={`${randomName}`}
			/>
		{/if}
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

	img {
		border: none;
		margin: 10px;
		padding: 0;
		width: 300px;
		height: 417px;
		border-radius: 16px;
		position: relative;
	}
	.displayContainer {
		container: homeDisplay / inline-size;
	}
	.queryWrapper {
		margin: 0 10px;
	}
</style>
