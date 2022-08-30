import React,{useContext} from 'react';
import {v4 as uuidv4} from 'uuid';

import { RecipeContext } from '../pages/index.js';
import Ingredient from './Ingredient.js';

export default function RecipeEdit({foundRecipe}) 
{
  
  const{updateRecipe,findRecipeByid}=useContext(RecipeContext);

  function changeRecipe(change)
  {
     updateRecipe(foundRecipe.id,{...foundRecipe,...change})
  }
  function createnewIngredients()
  {
    const newIngredients=
    {
      id:uuidv4(),
      name:'',
      amount:''
    }
 
    changeRecipe({ingredients:[...foundRecipe.ingredients,newIngredients]}); 
  }
  function updateIngredient(id,ingredient)
  {
    console.log([...foundRecipe.ingredients])
    const newIngredients= [...foundRecipe.ingredients]
    const index = newIngredients.findIndex(ingredient=>ingredient.id===id)
    newIngredients[index]=ingredient;
    changeRecipe({ingredients:newIngredients})
  }
  function findIngredientById(id)
  {
    changeRecipe({ingredients:foundRecipe.ingredients.filter(recipe=>recipe.id!==id)})
  }
  
  return (
    <div className='recipes-edit'>
      <button className='recipes-edit__button' onClick={()=>findRecipeByid(undefined)}>&times;</button>
      <section className='recipes-edit__input-container'>
          <label>Name:</label>
          <input value={foundRecipe.name} type="text" name="name" className='recipes-edit__input'
           onChange={e=>changeRecipe({name:e.target.value})}
          ></input>
      </section>
      <section className='recipes-edit__input-container'>
          <label>Servings:</label>
          <input value={foundRecipe.servings} type="number" min="1" name="servings" className='recipes-edit__input recipes-edit__input--width'
           onChange={e=>changeRecipe({servings:e.target.value})}
          ></input>
      </section>
      <section className='recipes-edit__input-container'>
          <label>Cook Time:</label>
          <input value={foundRecipe.cookTime} type="text" name="cookTime" className='recipes-edit__input'
           onChange={e=>changeRecipe({cookTime:e.target.value})}
          ></input>
      </section>
      <section className='recipes-edit__input-container'>
          <label>Instructions:</label>
          <textarea value={foundRecipe.instructions} name="instructions" className='recipes-edit__textarea'
           onChange={e=>changeRecipe({instructions:e.target.value})}
          ></textarea>
      </section>
      <strong className='recipes-edit__subtitle'>ingredients:</strong>
      {
        <div className='ingredients-container'>
        {
           foundRecipe.ingredients.map(ingredient=>
           {
               return <Ingredient 
               key={ingredient.id} 
               ingredient={ingredient}
               updateIngredient={updateIngredient}
               findIngredientById={findIngredientById}
               ></Ingredient>
           })
        }
        </div>  
      }
      <button className='recipes-edit__add-button' onClick={createnewIngredients}>Add Ingredient</button>
    </div>
  )
}
