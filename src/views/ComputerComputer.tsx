import { Button, Grid } from '@mui/material'
import Layout from '../components/Layout'

const ComputerComputer = () => {
	return (
		<Layout>
			<Grid
				sx={{
					background: 'cyan',
					height: '80vh',
				}}
			>
				<Button>Click</Button>
				<></>
			</Grid>
		</Layout>
	)
}

export default ComputerComputer
