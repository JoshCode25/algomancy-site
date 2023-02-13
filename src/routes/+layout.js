export async function load({ fetch }) {
	const response = await fetch(
		'https://calebgannon.com/wp-content/uploads/algomancy-extras/AlgomancyCards.json'
	);
	const data = await response.json();

	return {
		totalCardInfo: data,
		totalCardNames: Object.keys(data),
	};
}
