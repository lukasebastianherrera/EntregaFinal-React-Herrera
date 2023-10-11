import React from 'react'
import { useCartContext } from '../../Context/CartContext'

const CartContainer = () => {

    const {cartList, clearCart, totalQuantity, totalPrice, clearItem} = useCartContext()
    console.log(cartList)
  return (
    <div>
        {cartList.map(prod => <div key={prod.id}> 
        <img src={prod.img} className='w-25'></img>
        {prod.name}  ${prod.price} - Cantidad {prod.quantity}
        <button onClick={()  => clearItem(prod.id)} className='btn bg-primary'> X </button>
        </div>
        )}
        <button onClick={clearCart} className='bg-danger m-2'>Vaciar Carrito</button>
            {totalQuantity() !== 0 && <h2> Cantidad total: {totalQuantity()}</h2>}
            {totalPrice() !== 0 && <h2> Precio total: {totalPrice()}</h2>}       
    </div>
  )
}

export default CartContainer