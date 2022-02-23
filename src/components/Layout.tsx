import { FC, ReactNode } from 'react'
import TopBar from './TopBar'

type Props = {
	children: ReactNode
}

const Layout: FC<Props> = ({ children }) => {
	return (
		<>
			<TopBar />
			{children}
		</>
	)
}

export default Layout
