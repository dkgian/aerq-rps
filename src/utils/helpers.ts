import { Item } from '../views/PlayerComputer'

export function getRandomItem(items: Item[]) {
	return items[
		Math.floor(Math.random() * items.length)
	]
}

export const getWinner = (p1: Item, p2: Item) => {
	let winner
	if (p1.label === p2.label) {
		winner = 'tie'
	} else {
		if (p1.win.includes(p2.label)) {
			winner = p1
		} else {
			winner = p2
		}
	}
	return winner
}
