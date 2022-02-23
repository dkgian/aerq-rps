import { Grid, Chip } from '@mui/material'
import { styled } from '@mui/system'

type ItemLabels = {
	item1: string
	item2: string
}

const SelectedItems = ({
	item1,
	item2,
}: ItemLabels) => {
	return (
		<FlexRowWrap>
			<StyledChip
				variant="outlined"
				label={item1}
			/>

			<StyledChip
				variant="outlined"
				label={item2}
			/>
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
