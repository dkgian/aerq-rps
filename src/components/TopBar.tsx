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
		<AppBar position="static">
			<Typography variant="h6">
				Rock, Paper, Scissors
			</Typography>

			<NavButtons>
				<Button
					color="inherit"
					onClick={() => {
						navigate('/')
					}}
				>
					Player vs Computer
				</Button>

				<Button
					color="inherit"
					onClick={() => {
						navigate('/cc')
					}}
				>
					Computer vs Computer
				</Button>
			</NavButtons>
		</AppBar>
	)
}

const NavButtons = styled(Toolbar)({
	display: 'flex',
	justifyContent: 'space-around',
})

export default TopBar
