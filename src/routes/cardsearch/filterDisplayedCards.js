export default function filterDisplayedCards(
	searchInput,
	totalCardData,
	totalCardNames,
	factionFilter,
	factionEquals
) {
	let containsModifiers = false,
		splitSearch = [];
	let searchRegex = '',
		modifiers = '',
		regex = '',
		isValidRegex = false;
	let filteredCardNames = [];

	//check if the search input starts with / and contains a non escaped / to see if it's a regex
	//https://regex101.com/r/Z8KOLp/2 helpful regex testing website
	let searchFieldWords = searchInput.split(' ');
	const regexCheck = /(^\/).*([^\\]\/g?i?m?)$/g;
	let isRegex = regexCheck.test(searchInput);

	if (isRegex) {
		containsModifiers = searchInput.at(-1) === '/' ? false : true;
		//remove empty spaces caused by / removal
		splitSearch = searchInput.split('/').filter((item) => item !== '');

		if (!containsModifiers) {
			searchRegex = splitSearch.join('/');
		} else if (containsModifiers) {
			//if there are modifiers, pop them out and remove non-modifier characters, then sort modifiers alphabetically
			modifiers = splitSearch.pop().replace(/[^gim]/g, '');
			searchRegex = splitSearch.join('/');
		}

		try {
			regex = new RegExp(searchRegex, modifiers);
			isValidRegex = true;
		} catch (error) {
			console.error(error);
		}
	}

	//search through all card names/data and return those that pass search tests
	filteredCardNames = totalCardNames.filter((cardName) => {
		let includeCard = false;
		let containsSearch = false;
		let cardInfo = totalCardData[cardName][0];
		let cardText = cardInfo.text;
		let cardType = cardInfo.type;

		//compile searchable data together to search through
		let compiledString = cardName.concat(' ', cardText, ' ', cardType);
		let cardFactions = cardInfo.factions;
		let filteredFactions = [];
		for (let faction in factionFilter) {
			if (factionFilter[faction]) {
				filteredFactions.push(faction);
			}
		}

		let passesFactionFilter = false;

		if (factionEquals) {
			//requires a card to include all active factions
			let sameLength = filteredFactions.length === cardFactions.length;
			if (sameLength) {
				for (let i = 0; i < filteredFactions.length; i++) {
					let matchesFaction = filteredFactions.includes(cardFactions[i]);
					if (!matchesFaction) break;
					if (i === filteredFactions.length - 1) passesFactionFilter = true;
				}
			}
		} else if (!factionEquals) {
			//if at least one match between active factions and card's faction(s), show the card
			passesFactionFilter = filteredFactions.some((faction) =>
				cardFactions.includes(faction)
			);
		}

		if (!isValidRegex) {
			//if search input isn't Regex or isn't valid Regex, use 'bag of words' search style
			//check for individual words from search input instead of a whole phrase
			for (let i = 0; i < searchFieldWords.length; i++) {
				let doesContain = compiledString
					.toLowerCase()
					.includes(searchFieldWords[i].toLowerCase());
				if (!doesContain) break;
				if (i === searchFieldWords.length - 1) containsSearch = true;
			}
		} else if (isValidRegex) {
			//if it's valid Regex, do the Regex search
			try {
				containsSearch = regex.test(compiledString);
			} catch (error) {
				console.error(error);
			}
		}

		if (containsSearch && passesFactionFilter) {
			includeCard = true;
		}

		return includeCard;
	});

	return filteredCardNames;
}
