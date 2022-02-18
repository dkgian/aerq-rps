import './App.css'
import { Routes, Route } from 'react-router-dom'
import routes from './config/routes'

function App() {
	return (
		<Routes>
			{routes.map(({ key, path, Component }) => {
				return (
					<Route
						key={key}
						path={path}
						element={<Component />}
					/>
				)
			})}
		</Routes>
	)
}

export default App
