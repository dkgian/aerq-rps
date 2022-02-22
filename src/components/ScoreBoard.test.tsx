import {
	render,
	screen,
} from '@testing-library/react'
import ScoreBoard from './ScoreBoard'

test('renders score board', () => {
	render(
		<ScoreBoard
			p1={{ label: 'player 1', score: 1 }}
			p2={{ label: 'player 2', score: 2 }}
		/>
	)
	const p1Text = screen.getByText(/player 1/)
	const p2Text = screen.getByText(/player 2/)
	const score = screen.getByText(/1 : 2/)

	expect(p1Text).toBeInTheDocument()
	expect(p2Text).toBeInTheDocument()
	expect(score).toBeInTheDocument()
})
