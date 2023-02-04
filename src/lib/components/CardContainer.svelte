<script>
	export let cardInfo;
	// export let displayRulings = false;
	$: console.log(cardInfo);
	let cardName = cardInfo ? cardInfo[0].name : 'default';
	const cardNameDash = cardName
		.replace(/[.,/#!$%^&*;:{}=_`'~()]/g, '')
		.split(' ')
		.join('-');

	// const defaultRuling = [
	// 	'No rulings for this card have been made yet. You can request a ruling or ask a question in the Algomancy Discord - ',
	// ];
	// const rulings =
	// 	!!cardInfo[0]?.rulings.length > 0 ? cardInfo[0].rulings : defaultRuling;
	// const useDefaultRuling = !!cardInfo[0]?.rulings.length > 0 ? false : true;
</script>

<div>
	<img
		src={`https://calebgannon.com/wp-content/uploads/cardsearch-images/${cardNameDash}.jpg`}
		alt={`${cardName}`}
	/>
</div>

<style>
	img {
		width: 300px;
		height: 417px;
		border-radius: 16px;
		position: relative;
	}
</style>
