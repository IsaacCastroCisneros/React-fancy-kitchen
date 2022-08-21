import React from 'react';

export default function recipe(props) 
{
  const{
    name
  }=props
  return (
    <div className='recipe'>
      <section className='recipe__section'>
         <h3 className='recipe__Name'>{name}</h3>
        <div className='recipe__button-container'>
           <button className='recipe__button'>
              Edit
           </button>
           <button className='recipe__button'>
              Delete
           </button>
        </div>
      </section>
      <section className='recipe__section'>
         <span>
            <strong>sevings: </strong>
         </span> 
         <span>
            <strong>cook time: </strong>
         </span> 
      </section>
      <section className='recipe__section'>
         <span>Instructions:</span>
         <textarea></textarea>
      </section>
      {/* <section className='recipe__section'>
          
      </section> */}
    </div>
  )
}
