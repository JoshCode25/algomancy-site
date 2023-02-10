<script>
	export let factionName;

	let buttonActive = true;
	let button;
	let activeButtonColor = `var(--faction-color-${factionName})`;

	// $: if (buttonActive && button) {
	// 	button.style.backgroundColor = `var(--faction-color-${factionName})`;
	// }
	const toggleFactionFilter = () => {
		buttonActive = !buttonActive;
		console.log(buttonActive, button);
	};
</script>

<button
	type="button"
	bind:this={button}
	onClick={toggleFactionFilter}
	class:buttonActive>{factionName}</button
>

<style>
	button {
		color: gray;
		background-color: var(--faction-color-inactive);
		font-size: 16px;
		margin: 5px 5px;
		min-width: 80px;
		min-height: 40px;
		border: 2px solid black;
		border-radius: 8px;
	}

	button:hover {
		cursor: pointer;
		opacity: 0.8;
	}

	.buttonActive {
		color: white;
		/* background-color: ; */
	}
</style>
