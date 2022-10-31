import React from 'react'
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom'
import '../styles/App.css'
import { Button } from 'react-bootstrap'

import Categories from './Categories'
import Recipes from './Recipes'
import CategoryPage from './CategoryPage'
import RecipePage from './RecipePage'

function App() {
	return (
		<Router>
			<div style={{ padding: '30px' }}>
				<Button
					variant={'outline-info'}
					style={{ marginRight: '20px' }}
				>
					<Link to={'/categories'}>Main page</Link>
				</Button>

				<Button variant={'outline-info'}>
					<Link to={'/recipes'}>Recipes</Link>
				</Button>
				<Routes>
					<Route
						exact
						path={'/categories'}
						element={<Categories />}
					/>
					<Route exact path={'/recipes'} element={<Recipes />} />
					<Route
						exact
						path={'/categories/:id'}
						element={<CategoryPage />}
					/>
					<Route
						exact
						path={'/recipes/:id'}
						element={<RecipePage />}
					/>
				</Routes>
			</div>
		</Router>
	)
}

export default App