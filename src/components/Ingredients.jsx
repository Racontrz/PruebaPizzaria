import React, { useContext, useState } from 'react'
import { MyContext } from './context/MyContext';

const Ingredients = () => {
  const { pizza, setPizza } = useContext(MyContext);
  

  /* console.log(pizza); */
  return (
    <div>
      <ul>
        {pizza.map((pizza, ingredients) => (
          <li key={pizza.id}>
            {pizza.ingredients}

          </li>
        ))}
      </ul>
    </div>
  )
}

export default Ingredients