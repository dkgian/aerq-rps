import { useState } from 'react'
import { Grid, Button } from '@mui/material'
import { styled } from '@mui/system'
import Layout from '../components/Layout'
import SelectedItems from '../components/SelectedItems'
import ScoreBoard from '../components/ScoreBoard'
import {
	getRandomItem,
	getWinner,
} from '../utils/helpers'
import { items } from '../config/items'

export type Item = {
	label: string
	win: string[]
}

const PlayerComputer = () => {
	const [userScore, setUserScore] =
		useState<number>(0)
	const [computerScore, setComputeScore] =
		useState<number>(0)
	const [comItem, setComItem] = useState<Item>({
		label: '?',
		win: [],
	})
	const [userItem, setUserItem] = useState<Item>({
		label: '?',
		win: [],
	})

	const updateScore = (winner: number) => {
		if (winner === 0) {
			return
		}
		if (winner === 1) {
			setUserScore(userScore + 1)
		}
		if (winner === 2) {
			setComputeScore(computerScore + 1)
		}
	}

	const chooseItem = (userItem: Item) => {
		const computerItem = getRandomItem(items)
		setUserItem(userItem)
		setComItem(computerItem)
		const winner = getWinner(
			userItem,
			computerItem
		)
		updateScore(winner)
	}

	return (
		<Layout>
			<Grid
				sx={{
					display: 'flex',
					flexDirection: 'column',
					width: '100vw',
					height: '50vh',
				}}
			>
				<ScoreBoard
					p1={{
						label: 'You',
						score: userScore,
					}}
					p2={{
						label: 'Com',
						score: computerScore,
					}}
				/>

				<SelectedItems
					item1={userItem.label}
					item2={comItem.label}
				/>

				<Grid
					sx={{
						display: 'flex',
						justifyContent: 'space-evenly',
					}}
				>
					{items &&
						items.map((item: Item) => {
							return (
								<ItemButton
									key={item.label}
									variant="outlined"
									onClick={() => chooseItem(item)}
								>
									{item.label}
								</ItemButton>
							)
						})}
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

export default PlayerComputer
