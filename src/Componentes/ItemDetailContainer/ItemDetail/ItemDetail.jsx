import React from 'react'
import ItemCount from '../../Counter/ItemCount'

const ItemDetail = ({product}) => {
    console.log(product)
    const onAdd = (count) => {
        console.log("productos en carrito: " + count)
      }
  return (
    <div className='row'>
        <div className='col'>
            <h2>Detalle: </h2>
            <img src={product.img} className='w-25' alt="Mueble" />
            <div>
                <p>nombre : {product.name}</p>
                <p>descripcion : {product.description}</p>
                <p>stock : {product.stock}</p>
                <p>precio : {product.price}</p>

            </div>
        </div>
        <div className='col'>
        <ItemCount initial={1} stock={product.stock} onAdd={onAdd} />
        </div>
    </div>
  )
}

export default ItemDetail