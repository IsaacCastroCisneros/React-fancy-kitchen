import React from 'react'
import Recipe from './Recipe'

export default function recipeList({recipes}) 
{
  return (
    <div className='recipes-list'>
      {
        recipes.map(recipe=>
        {
            return(
                <Recipe key={recipe.id} {...recipe}/>
            )
        })
      }
    </div>
  )
}
