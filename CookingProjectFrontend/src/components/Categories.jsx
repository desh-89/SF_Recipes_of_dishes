import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Table } from 'react-bootstrap'
import Category from './Category'

function Categories(props) {
	const [data, setData] = useState([])

	const getRecipes = () => {
		axios
			.get('http://localhost:8000/categories/')
			.then((response) => setData(response.data))
	}
	useEffect(() => {
		getRecipes()
	}, [])
	return (
		<Table>
			<thead>
				<tr>
					<th>Категории</th>
				</tr>
			</thead>
			<tbody>
				{data.map((value) => (
					<Category
						categoryName={value.categoryName}
						id={value.id}
						key={value.categoryName}
					/>
				))}
			</tbody>
		</Table>
	)
}

export default Categories