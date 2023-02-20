<script>
	import { fly } from 'svelte/transition';

	export let text = 'this is some sample text for show.';
	export let transitionDuration = 300;
	export let transitionDelay = 10;
	export let flyDistance = 100;

	function returnRandomFlyDistance() {
		let flyDistanceObject = {
			x: 0,
			y: 0,
		};
		let xOrY = Math.random() - 0.5 <= 0 ? 'x' : 'y';
		let posOrNeg = Math.random() - 0.5 <= 0 ? 1 : -1;

		if (xOrY === 'x') {
			flyDistanceObject.x = flyDistance * posOrNeg;
		} else {
			flyDistanceObject.y = flyDistance * posOrNeg;
		}

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
		};

		return animatorObject;
	});
</script>

{#each wordAnimators as animator}
	<span
		in:fly={{
			delay: animator.animationDelay,
			duration: transitionDuration,
			x: animator.x,
			y: animator.y,
		}}>{animator.word}</span
	>
{/each}
