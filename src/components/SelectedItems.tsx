import { Grid, Chip } from '@mui/material'
import { styled } from '@mui/system'

type ItemLabels = {
	item1: string
	item2: string
	winner: number
}

const SelectedItems = ({
	item1,
	item2,
	winner,
}: ItemLabels) => {
	const tieColor = 'lightyellow'
	const winColor = 'lightgreen'
	const loseColor = 'pink'

	return (
		<FlexRowWrap>
			{winner === 0 && (
				<>
					<StyledChip
						variant="outlined"
						label={item1}
						style={{ background: tieColor }}
					/>

					<StyledChip
						variant="outlined"
						label={item2}
						style={{ background: tieColor }}
					/>
				</>
			)}
			{winner === 1 && (
				<>
					<StyledChip
						variant="outlined"
						label={item1}
						style={{ background: winColor }}
					/>

					<StyledChip
						variant="outlined"
						label={item2}
						style={{ background: loseColor }}
					/>
				</>
			)}
			{winner === 2 && (
				<>
					<StyledChip
						variant="outlined"
						label={item1}
						style={{ background: loseColor }}
					/>

					<StyledChip
						variant="outlined"
						label={item2}
						style={{ background: winColor }}
					/>
				</>
			)}
		</FlexRowWrap>
	)
}

const StyledChip = styled(Chip)({
	width: '10rem',
	height: '10rem',
	fontSize: '2rem',
	marginBottom: '1.5rem',
	fontFamily: 'Architects Daughter',
	borderRadius: '2rem',
	boxShadow: '5px 5px gray',
})

const FlexRowWrap = styled(Grid)({
	display: 'flex',
	flexWrap: 'wrap',
	justifyContent: 'space-around',
})

export default SelectedItems
