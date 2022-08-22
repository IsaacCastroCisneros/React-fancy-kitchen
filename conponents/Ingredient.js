import React from 'react';

export default function Ingredient(props) 
{
  const{
     ingredient,
     updateIngredient,
     findIngredientById
   }=props;
  
  function changeIngredient(change)
  {
    updateIngredient(ingredient.id,{...ingredient,...change})
  }

  return (
    <div className="ingredient">
      <div className="ingredient__container">
        <section className="ingredient__input-container">
          <label>Name</label>
          <input
            className="ingredient__input"
            value={ingredient.name}
            type="text"
            name="name"
            onChange={e=> changeIngredient({ name: e.target.value })}
          ></input>
        </section>
        <section className="ingredient__input-container">
          <label>Amount</label>
          <input
            className="ingredient__input"
            value={ingredient.amount}
            type="text"
            name="amount"
            onChange={e=> changeIngredient({ amount: e.target.value })}
          ></input>
        </section>
      </div>
      <button onClick={()=>findIngredientById(ingredient.id)} className='ingredient__button'>&times;</button>
    </div>
  );
}
