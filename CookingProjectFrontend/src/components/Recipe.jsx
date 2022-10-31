import React from 'react'

function Recipe({ recipeName, id }) {
	return (
		<tr key={recipeName}>
			<td>
				<a href={`/recipes/${id}`}>{recipeName}</a>
			</td>
		</tr>
	)
}

export default Recipe