<script>
	export let cardInfo;
	// export let displayRulings = false;
	let cardName = cardInfo ? cardInfo[0].name : 'default';
	const cardNameDash = cardName
		.replace(/[.,/#!$%^&*;:{}=_`'~()]/g, '')
		.split(' ')
		.join('-');

	const defaultRuling = [
		'No rulings for this card have been made yet. You can request a ruling or ask a question in the Algomancy Discord - ',
	];
	const rulings =
		!!cardInfo[0]?.rulings.length > 0 ? cardInfo[0].rulings : defaultRuling;
	const useDefaultRuling = !!cardInfo[0]?.rulings.length > 0 ? false : true;

	let displayRulings = false;
	function toggleRullingDisplay() {
		displayRulings = !displayRulings;
	}
</script>

<button on:click={toggleRullingDisplay} class="cardWrapper">
	{#if !displayRulings}
		<img
			src={`https://calebgannon.com/wp-content/uploads/cardsearch-images/${cardNameDash}.jpg`}
			alt={`${cardName}`}
		/>
	{:else}
		<div class="rulingsDisplayWrapper">
			<h3>{cardName} Ruling Clarifications</h3>
			{#if useDefaultRuling}
				<div>
					{rulings}
					<a
						target="_blank"
						rel="noreferrer"
						href="https://discord.gg/VWwdWheXbQ">Click Here</a
					>
				</div>
			{:else}
				<ul>
					{#each rulings as ruling}
						<li>{ruling}</li>
					{/each}
				</ul>
			{/if}
		</div>
	{/if}
</button>

<style>
	img {
		width: 100%;
		height: 100%;
		border-radius: 16px;
	}

	.rulingsDisplayWrapper {
		width: 100%;
		height: 100%;
		border: 2px solid black;
		border-radius: 16px;
		position: absolute;
		top: 0;
		left: 0;
		z-index: 10;
		background-color: rgba(255, 255, 255, 1);
	}

	ul {
		max-height: 300px;
		overflow: auto;
		list-style: circle inside;
	}

	li {
		font-size: 14px;
		padding: 0 20px;
		text-align: left;
	}

	a {
		font-size: 14px;
		padding: 0 20px;
		text-align: left;
	}

	h3 {
		margin: 8px;
		font-size: 16px;
		padding: 10px;
	}

	.cardWrapper {
		border: none;
		margin: 10px;
		padding: 0;
		width: 300px;
		height: 417px;
		position: relative;
	}

	.rulingsDisplayWrapper {
		width: 100%;
		height: 100%;
		border: 2px solid var(--logo-black);
		border-radius: 16px;
		position: absolute;
		top: 0;
		left: 0;
		z-index: 10;
		background-color: var(--faction-color-inactive);
	}

	.rulingsDisplayWrapper:hover {
		cursor: default;
	}
</style>
