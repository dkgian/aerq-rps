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

const PlayerComputer = () => {
	const [userPoint, setUserPoint] =
		useState<number>(0)
	const [computerPoint, setComputePoint] =
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
			setUserPoint(userPoint + 1)
		}
		if (winner === 2) {
			setComputePoint(computerPoint + 1)
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
					flexGrow: 1,
					flexDirection: 'column',
					width: '100vw',
					height: '50vh',
					background: 'pink',
				}}
			>
				<StyledScoreBoard variant="h5">
					You {userPoint} : {computerPoint}{' '}
					Computer
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
						label={comItem.label}
					/>

					<StyledChip
						variant="outlined"
						label={userItem.label}
					/>
				</Grid>

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

export default PlayerComputer
