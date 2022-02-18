import { FC, ReactNode } from 'react'
import { Grid } from '@mui/material'
import TopBar from './TopBar'

interface Props {
	children: ReactNode
}

const Layout: FC<Props> = ({ children }) => {
	return (
		<Grid container>
			<TopBar />
			<Grid sx={{}}>{children}</Grid>
		</Grid>
	)
}

export default Layout
