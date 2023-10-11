import { useState } from 'react'
import { useCartContext } from '../../../Context/CartContext'
import { Link } from 'react-router-dom'
import ItemCount from '../../Counter/ItemCount'


const ItemDetail = ({product}) => {
    const [ isInCount, setIsInCount] = useState(true)
    const {addProduct, cartList} = useCartContext()
    const onAdd = (quantity) => {
        addProduct({...product, quantity})
        setIsInCount(false)
    }
    console.log(cartList)
  return (
    <div className='row'>
        <div className='col'>
            <h2>Detalle: </h2>
            <img src={product.img} className='w-25' alt={product.name} />
            <div>
                <p>nombre : {product.name}</p>
                <p>descripcion : {product.description}</p>
                <p>stock : {product.stock}</p>
                <p>precio : {product.price}</p>

            </div>
        </div>
        <div className='col'>
            {isInCount ?
                    <ItemCount initial={1} stock={product.stock} onAdd={onAdd} />
            :
            <> 
            <Link to={"/cart"}>
                <button className='btn bg-info m-2'>Ir al Carrito</button>
            </Link>
            <Link to={"/"}>
                <button className='btn bg-success m-2'>Seguir Comprando</button>
            </Link>
            </> }
        </div>
    </div>
  )
}

export default ItemDetail