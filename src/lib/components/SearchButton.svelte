<script>
	export let factionName;

	let buttonActive = true;
	$: buttonClass = buttonActive ? `button-active-${factionName}` : '';

	const toggleFactionFilter = () => {
		buttonActive = !buttonActive;
		console.log(buttonActive, buttonClass);
	};
</script>

<button type="button" class={buttonClass} on:click={toggleFactionFilter}
	>{factionName}</button
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

	.button-active-earth {
		color: white;
		background-color: var(--faction-color-earth);
	}
	.button-active-wood {
		color: white;
		background-color: var(--faction-color-wood);
	}
	.button-active-fire {
		color: white;
		background-color: var(--faction-color-fire);
	}
	.button-active-water {
		color: white;
		background-color: var(--faction-color-water);
	}
	.button-active-metal {
		color: white;
		background-color: var(--faction-color-metal);
	}
	.button-active-colorless {
		color: white;
		background-color: var(--faction-color-colorless);
	}
</style>
