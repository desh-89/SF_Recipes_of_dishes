import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

function RecipePage() {
	const [recipe, setRecipe] = useState([])
	const params = useParams()
	const recipeId = parseFloat(params.id)

	const getRecipe = () => {
		axios(`http://127.0.0.1:8000/recipes/${recipeId}/`).then((response) =>
			setRecipe(response.data)
		)
	}

	useEffect(() => {
		getRecipe()
	}, [])

	return (
		<>
			<h1 style={{ margin: '30px 0 20px 0' }}>{recipe.recipeName}</h1>
			<h4 style={{ maxWidth: '65%' }}>{recipe.recipeText}</h4>
		</>
	)
}

export default RecipePage