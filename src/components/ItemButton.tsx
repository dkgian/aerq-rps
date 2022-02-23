import { Button } from '@mui/material'
import { styled } from '@mui/system'

type ItemButtonProps = {
	label: string
	onClick: () => void
}

const ItemButton = ({
	label,
	onClick,
}: ItemButtonProps) => {
	return (
		<StyledButton
			variant="outlined"
			onClick={onClick}
		>
			{label}
		</StyledButton>
	)
}

const StyledButton = styled(Button)({
	height: '8rem',
	width: '8rem',
	color: 'white',
	margin: '0.5rem',
	borderRadius: '50%',
	backgroundColor: 'black',
	fontSize: '1rem',
	fontWeight: 'bold',
	fontFamily: 'Architects Daughter',
	'&:hover': {
		backgroundColor: 'white',
		color: 'black',
	},
})

export default ItemButton
