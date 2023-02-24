<script>
	import { fly } from 'svelte/transition';
	import { expoInOut } from 'svelte/easing';

	export let text = 'this is some sample text for show.';
	export let transitionDuration = 1000;
	export let transitionDelay = 50;
	export let maxFlyDistance = 100;

	function returnRandomFlyDistance() {
		let xSign = Math.random() - 0.5 <= 0 ? 1 : -1;
		let xMagnitude = Math.random() * maxFlyDistance;
		let ySign = Math.random() - 0.5 <= 0 ? 1 : -1;
		let yMagnitude = Math.random() * maxFlyDistance;

		let flyDistanceObject = {
			x: xSign * xMagnitude,
			y: ySign * yMagnitude,
		};

		return flyDistanceObject;
	}

	let wordArray = text.split(' ');

	let wordAnimators = wordArray.map((word, index) => {
		let xYDistances = returnRandomFlyDistance();

		let animatorObject = {
			word: word,
			animationDelay: index * transitionDelay,
			x: xYDistances.x,
			y: xYDistances.y,
			easing: expoInOut,
		};

		return animatorObject;
	});
</script>

<div>
	{#each wordAnimators as animator}
		<span
			in:fly={{
				delay: animator.animationDelay,
				duration: transitionDuration,
				x: animator.x,
				y: animator.y,
			}}
			>{`${animator.word} `}
		</span>
	{/each}
</div>

<style>
	span {
		display: block;
		padding-right: 5px;
	}
	div {
		display: flex;
		flex-flow: row wrap;
	}
</style>
