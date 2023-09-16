import React from 'react'
import Item from '../Item/Item'

const Itemlist = ({products}) => {
  return (
    products.map(products => <Item key={products.id} products={products} />  )
  )
}

export default Itemlist