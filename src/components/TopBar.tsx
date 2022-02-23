import {
	AppBar,
	Button,
	Toolbar,
	Typography,
} from '@mui/material'
import { styled } from '@mui/material/styles'
import { useNavigate } from 'react-router-dom'

const TopBar = () => {
	const navigate = useNavigate()
	return (
		<StyledAppBar position="static">
			<StyledText variant="h4">
				Rock, Paper, Scissors
			</StyledText>

			<NavButtons>
				<ModeButton
					color="inherit"
					onClick={() => {
						navigate('/')
					}}
				>
					<StyledText>
						Player vs Computer
					</StyledText>
				</ModeButton>

				<ModeButton
					color="inherit"
					onClick={() => {
						navigate('/cc')
					}}
				>
					<StyledText>
						Computer vs Computer
					</StyledText>
				</ModeButton>
			</NavButtons>
		</StyledAppBar>
	)
}

const StyledAppBar = styled(AppBar)({
	backgroundColor: 'black',
	marginBottom: '2rem',
})

const NavButtons = styled(Toolbar)({
	display: 'flex',
	justifyContent: 'space-around',
})

const StyledText = styled(Typography)({
	alignSelf: 'center',
	fontFamily: 'Architects Daughter',
	marginTop: '0.5rem',
})

const ModeButton = styled(Button)({
	border: '1px solid white',
	borderRadius: '1rem',
	'&:hover': {
		background: 'lightgray',
		color: 'black',
	},
})

export default TopBar
