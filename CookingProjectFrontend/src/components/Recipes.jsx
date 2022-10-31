import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Table } from 'react-bootstrap'
import Recipe from './Recipe'

function Recipes(props) {
	const [data, setData] = useState([])

	const getRecipes = () => {
		axios
			.get('http://localhost:8000/recipes/')
			.then((response) => setData(response.data))
	}
	useEffect(() => {
		getRecipes()
	}, [])
	return (
		<Table>
			<thead>
				<tr>
					<th>Рецепты</th>
				</tr>
			</thead>
			<tbody>
				{data.map((value) => (
					<Recipe
						recipeName={value.recipeName}
						id={value.id}
						key={value.recipeName}
					/>
				))}
			</tbody>
		</Table>
	)
}

export default Recipes