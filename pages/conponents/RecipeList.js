import React from 'react'
import Recipe from './Recipe'

export default function recipeList({recipes}) {

  console.log(recipes)
  return (
    <>
      {
        recipes.map(recipe=>
        {
            return(
                <Recipe key={recipe.id} {...recipe}/>
            )
        })
      }
    </>
  )
}
