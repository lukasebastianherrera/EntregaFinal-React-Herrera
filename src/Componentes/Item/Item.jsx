import React from 'react'

const Item = ({products}) => {
  return (
    <div className='card w-25 ' key={products.id}> 
    <div className="card-body">
      <img className='w-100 card-img-top' src={products.img} alt="Mueble" />
      <p>Precio: {products.price} </p>
    </div>
    <div className='card-footer'>
      <button className='btn btn-outline-dark w-100'>Detalle</button>
    </div>
</div>
  )
}

export default Item