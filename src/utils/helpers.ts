import { Item } from '../views/PlayerComputer'

export function getRandomItem(items: Item[]) {
	return items[
		Math.floor(Math.random() * items.length)
	]
}

export const getWinner = (p1: Item, p2: Item) => {
	let winner = 0 //tie
	if (p1.win.includes(p2.label)) {
		winner = 1 // player 1 wins
	}
	if (p2.win.includes(p1.label)) {
		winner = 2 // player 2 wins
	}

	return winner
}
