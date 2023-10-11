import React, { createContext, useContext, useState } from 'react'

export const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)

export const CartContextProvider = ( {children} ) => {
    const [cartList, setCartList] = useState([])

    const addProduct = (newProduct) =>{
      
      const idx = cartList.findIndex(product => product.id === newProduct.id)
      if (idx !== -1) {
        cartList[idx].quantity = cartList[idx].quantity + newProduct.quantity
        setCartList([ ...cartList])
      } else {
        setCartList([...cartList, newProduct])
      }
    }

    const totalQuantity = () => cartList.reduce((count, objProd) => count += objProd.quantity , 0)

    const totalPrice = () => cartList.reduce ((count, objProducto) => count += (objProducto.quantity * objProducto.price), 0)

    const clearItem = id => setCartList(cartList.filter(product => product.id !== id))

    const clearCart = () => {
      setCartList([])
    }

  return (
    <CartContext.Provider value={{
        cartList, addProduct, clearCart, totalQuantity, totalPrice, clearItem
    }}>
        {children}
    </CartContext.Provider>
  )
}
