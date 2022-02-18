import {
	ComputerComputerView,
	PlayerComputerView,
} from '../views/index'

const routes = [
	{
		key: 'pc',
		title: 'Player vs Computer',
		Component: PlayerComputerView,
		path: '/',
	},
	{
		key: 'cc',
		title: 'Computer vs Computer',
		Component: ComputerComputerView,
		path: '/cc',
	},
]
export default routes
