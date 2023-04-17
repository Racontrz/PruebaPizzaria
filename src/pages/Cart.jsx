import React, { useContext } from 'react'
import { MyContext } from '../components/context/MyContext';

const Cart = () => {
  const { pizza, setPizza } = useContext(MyContext);

  return (
    <div>Cart</div>
  )
}

export default Cart