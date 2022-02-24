import { useState } from 'react'
import { Grid } from '@mui/material'
import { styled } from '@mui/system'
import Layout from '../components/Layout'
import SelectedItems from '../components/SelectedItems'
import ScoreBoard from '../components/ScoreBoard'
import ItemButton from '../components/ItemButton'
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
	const [lastWinner, setLastWinner] =
		useState<number>(0)

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
		setLastWinner(winner)
		updateScore(winner)
	}

	return (
		<Layout>
			<FlexColumn>
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
					winner={lastWinner}
				/>

				<FlexRowWrap>
					{items &&
						items.map((item: Item) => {
							return (
								<ItemButton
									key={item.label}
									label={item.label}
									onClick={() => chooseItem(item)}
								/>
							)
						})}
				</FlexRowWrap>
			</FlexColumn>
		</Layout>
	)
}

const FlexRowWrap = styled(Grid)({
	display: 'flex',
	flexWrap: 'wrap',
	justifyContent: 'center',
})

const FlexColumn = styled(Grid)({
	display: 'flex',
	flexDirection: 'column',
	width: '100vw',
})

export default PlayerComputer
