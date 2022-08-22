import React,{useContext} from 'react';
import { RecipeContext } from '..';

export default function recipe(props) 
{
  const{deleteRecipe,findRecipeByid}=useContext(RecipeContext);
  
  const{
    id,
    name,
    servings,
    cookTime,
    instructions,
    ingredients
  }=props

  return (
    <div className='recipe'>
      <section className='recipe__section recipe__section--row'>
         <h3 className='recipe__name'>{name}</h3>
        <div className='recipe__button-container'>
           <button onClick={()=>findRecipeByid(id)} className='recipe__button recipe__button--neutral'>
              Edit
           </button>
           <button onClick={()=>deleteRecipe(id)} className='recipe__button recipe__button--cancel'>
              Delete
           </button>
        </div>
      </section>
      <section className='recipe__section recipe__section--back-ground'>
         <span>
            <strong>sevings: </strong>
            {servings}
         </span> 
         <span>
            <strong>cook time: </strong>
            {cookTime}
         </span> 
      </section>
      <section className='recipe__section'>
         <strong>Instructions:</strong>
         <textarea readOnly className='recipe__text-area' value={instructions}></textarea>
      </section>
      <strong className='recipe__name recipe__name--small'>Ingredients:</strong>
      {
            ingredients.map(ingredient=>
            {
               return(
                  <section className='recipe__section recipe__section--back-ground'>
                     <span>
                        <strong>Name: </strong>
                        {ingredient.name}
                     </span> 
                     <span>
                        <strong>Amount: </strong>
                        {ingredient.amount}
                     </span> 
                 </section>
               )
            })
      }
      
      {/* <section className='recipe__section'>
          
      </section> */}
    </div>
  )
}
