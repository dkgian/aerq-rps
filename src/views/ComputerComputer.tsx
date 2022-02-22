import { useState } from 'react'
import { Grid, Button } from '@mui/material'
import { styled } from '@mui/system'
import Layout from '../components/Layout'
import ScoreBoard from '../components/ScoreBoard'
import SelectedItems from '../components/SelectedItems'
import {
	getRandomItem,
	getWinner,
} from '../utils/helpers'
import { items } from '../config/items'

export type Item = {
	label: string
	win: string[]
}

const ComputerComputer = () => {
	const [c1Score, setC1Score] =
		useState<number>(0)
	const [c2Score, setC2Score] =
		useState<number>(0)
	const [c1Item, setC1Item] = useState<Item>({
		label: '?',
		win: [],
	})
	const [c2Item, setC2Item] = useState<Item>({
		label: '?',
		win: [],
	})

	const updateScore = (winner: number) => {
		if (winner === 0) {
			return
		}
		if (winner === 1) {
			setC1Score(c1Score + 1)
		}
		if (winner === 2) {
			setC2Score(c2Score + 1)
		}
	}

	const updatePlayerItems = (
		p1: Item,
		p2: Item
	) => {
		setC1Item(p1)
		setC2Item(p2)
	}

	const clickComCom = () => {
		const p1 = getRandomItem(items)
		const p2 = getRandomItem(items)
		const winner = getWinner(p1, p2)

		updatePlayerItems(p1, p2)
		updateScore(winner)
	}

	return (
		<Layout>
			<Grid
				sx={{
					display: 'flex',
					flexDirection: 'column',
				}}
			>
				<ScoreBoard
					p1={{
						label: 'Com 1',
						score: c1Score,
					}}
					p2={{
						label: 'Com 2',
						score: c2Score,
					}}
				/>

				<SelectedItems
					item1={c1Item.label}
					item2={c2Item.label}
				/>

				<Grid
					sx={{
						display: 'flex',
						justifyContent: 'space-evenly',
					}}
				>
					<ItemButton
						key={'cc'}
						variant="outlined"
						onClick={() => clickComCom()}
					>
						Click
					</ItemButton>
				</Grid>
			</Grid>
		</Layout>
	)
}

const ItemButton = styled(Button)({
	height: '5rem',
	width: '5rem',
	borderRadius: '50%',
	alignSelf: 'flex-end',
})

export default ComputerComputer
