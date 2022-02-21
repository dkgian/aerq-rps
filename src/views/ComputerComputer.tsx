import { useState } from 'react'
import {
	Grid,
	Button,
	Chip,
	Typography,
} from '@mui/material'
import { styled } from '@mui/system'
import Layout from '../components/Layout'
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
					flexGrow: 1,
					flexDirection: 'column',
				}}
			>
				<StyledScoreBoard variant="subtitle1">
					Computer 1
					<h1>
						{c1Score} : {c2Score}
					</h1>
					Computer 2
				</StyledScoreBoard>

				<Grid
					sx={{
						display: 'grid',
						justifyContent: 'center',
						width: '100vw',
						color: 'blue',
					}}
				>
					<StyledChip
						variant="outlined"
						label={c1Item.label}
					/>

					<StyledChip
						variant="outlined"
						label={c2Item.label}
					/>
				</Grid>

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

const StyledChip = styled(Chip)({
	width: '10rem',
	height: '8rem',
	fontSize: '2rem',
	marginBottom: '3rem',
})

const StyledScoreBoard = styled(Typography)({
	alignSelf: 'center',
	marginTop: '1rem',
	marginBottom: '1rem',
})

export default ComputerComputer
