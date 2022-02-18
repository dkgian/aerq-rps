import { FC } from 'react'
import {
	Box,
	AppBar,
	Link,
	Button,
	Toolbar,
	Typography,
} from '@material-ui/core'
import { useNavigate } from 'react-router-dom'
interface Props {
	title: String
}

const Header: FC<Props> = ({ title }) => {
	const navigate = useNavigate()
	return (
		<Box sx={{ display: 'flex', flexGrow: 1 }}>
			<AppBar position="static">
				<Typography variant="h6">
					Rock, Paper, Scissors
				</Typography>
				<Toolbar>
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
			<Link></Link>
		</Box>
	)
}

export default Header
