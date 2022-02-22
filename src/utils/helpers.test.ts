import { getWinner } from './helpers'

const rock = {
	label: 'rock',
	win: ['scissors'],
}
const paper = {
	label: 'paper',
	win: ['rock'],
}

const scissors = {
	label: 'scissors',
	win: ['paper'],
}

test('Rock > Scissors', () => {
	expect(getWinner(rock, scissors)).toBe(1)
})

test('Rock < Paper', () => {
	expect(getWinner(rock, paper)).toBe(2)
})

test('Same items: tie', () => {
	expect(getWinner(scissors, scissors)).toBe(0)
})
