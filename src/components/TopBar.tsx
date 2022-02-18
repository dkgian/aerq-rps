import {
	AppBar,
	Button,
	Toolbar,
	Typography,
} from '@mui/material'
import { useNavigate } from 'react-router-dom'

const TopBar = () => {
	const navigate = useNavigate()
	return (
		<AppBar position="static">
			<Typography variant="h6">
				Rock, Paper, Scissors
			</Typography>
			<Toolbar
				sx={{
					display: 'flex',
					justifyContent: 'space-around',
				}}
			>
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
			</Toolbar>
		</AppBar>
	)
}

export default TopBar
