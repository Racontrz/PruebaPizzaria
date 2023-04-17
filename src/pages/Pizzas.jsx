import React, { useContext, useState } from 'react'
import { MyContext } from '../components/context/MyContext'
import PizzaCard from '../components/PizzaCard'



const Pizzas = () => {
  const { pizza, setPizza } = useContext(MyContext)

  return (
    <div>
      <div className='text-center m-4'>
        <h1>Pizzas</h1>
      </div>
      <PizzaCard />
    </div>
  )
}

export default Pizzas
