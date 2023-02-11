import { writable } from 'svelte/store';

const factionList = [
	['earth', 'e'],
	['wood', 'g'],
	['fire', 'r'],
	['water', 'b'],
	['metal', 'm'],
	['colorless', 'c'],
];

let defaultFactionFilter = {};
factionList.forEach((faction) => {
	let factionName = faction[0];
	defaultFactionFilter[factionName] = true;
});

export const searchFilterStore = writable({
	factionList: factionList,
	factionFilter: defaultFactionFilter,
	searchField: '',
});
