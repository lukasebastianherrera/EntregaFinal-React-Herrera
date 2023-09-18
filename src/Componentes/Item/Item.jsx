import React from 'react'
import { Link } from 'react-router-dom'

const Item = ({products}) => {
  return (
    <div className='card w-25 ' key={products.id}> 
    <div className="card-body">
      <img className='w-100 card-img-top' src={products.img} alt="Mueble" />
      <p>Precio: {products.price} </p>
    </div>
    <div className='card-footer'>
      <Link to={`/detalle/${products.id}`}>
        <button className='btn btn-outline-dark w-100'>Detalle</button>
      </Link>
    </div>
</div>
  )
}

export default Item