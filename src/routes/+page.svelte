<script>
	import CardContainer from '../lib/components/CardContainer.svelte';

	export let data;

	let cardNumber = data.cardNames.length;
	let randomName = data.cardNames[Math.floor(Math.random() * cardNumber)];
	let displayCardInfo = data.cardInfo[randomName];
</script>

<h1>Algomancy Home Page!</h1>

<CardContainer cardInfo={displayCardInfo} />

<h2>Exciting Algomancy updates:</h2>
<ul>
	<li>New Ruling Feature</li>
	<li>Mechanic Clarification</li>
	<li>Artwork revisions</li>
</ul>
