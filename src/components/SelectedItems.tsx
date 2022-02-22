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
		<Grid
			sx={{
				display: 'flex',
				justifyContent: 'space-around',
			}}
		>
			<StyledChip
				variant="outlined"
				label={item1}
			/>

			<StyledChip
				variant="outlined"
				label={item2}
			/>
		</Grid>
	)
}

const StyledChip = styled(Chip)({
	width: '10rem',
	height: '8rem',
	fontSize: '2rem',
	marginBottom: '3rem',
})

export default SelectedItems
