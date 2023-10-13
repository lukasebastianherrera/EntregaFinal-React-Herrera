import React, { useState } from 'react'
import { useCartContext } from '../../Context/CartContext'
import { getFirestore, collection, addDoc, doc, updateDoc} from "firebase/firestore"
import { Link } from 'react-router-dom'

const CartContainer = () => {
    const [ dataForm, setDataForm ] = useState({
    name: "",
    phone: "", 
    email: ""})
    const [id, setId] = useState("")
    const {cartList, clearCart, totalQuantity, totalPrice, clearItem} = useCartContext()
    console.log(cartList)

    const handleAddOrder = async (evt) => {
      evt.preventDefault()
      const order = {}
      order.buyer = dataForm
      order.items = cartList.map(prod => {
        return {id: prod.id, name: prod.name, proce: prod.price, quantity: prod.quantity}
      })
      order.total = totalPrice()
      console.log(order)


      const queryDB = getFirestore()
      const ordersCollection = collection(queryDB, "orders")
      addDoc(ordersCollection, order)
      .then(({id}) => setId(id))
      .catch(err => console.log(err))
      .finally(()=> {
        setDataForm({
          name: "",
          phone: "", 
          email: ""
        })
        clearCart()
      })
      // const queryUpdateProduct = doc(queryDB, "products", "7UQrGiwWEkCCK8mrraF3")
      // updateDoc(queryUpdateProduct, {stock: 99})

    }

    const handleOnChange = (evt) => {
      setDataForm({
        ...dataForm, [evt.target.name] : evt.target.value
      })
    }
  return (
    <>
    {id !== "" && <h3>Se completo la compra con la orden:{id}</h3>}
     {cartList.length > 0 ?
      <div className='container'>
      <div className='row'>
        <div className='col-sm-12 col-md-6 col-lg-4'>
        {cartList.map(prod => <div key={prod.id} className='border m-2'> 
        <img src={prod.img} className='w-25 m-2'></img>
        {prod.name}  ${prod.price} - Cantidad {prod.quantity}
        <button onClick={()  => clearItem(prod.id)} className='btn bg-primary m-2'> X </button>
        </div>
        )}
        </div>
      </div>
        <button onClick={clearCart} className='btn bg-danger m-2'>Vaciar Carrito</button>
            {totalQuantity() !== 0 && <h2> Cantidad total: {totalQuantity()}</h2>}
            {totalPrice() !== 0 && <h2> Precio total: {totalPrice()}</h2>}

            <form onSubmit={handleAddOrder}>
              <input type="text" name='name' placeholder='Ingresar EL Nombre' value={dataForm.name} onChange={handleOnChange}/>   
              <input type="email" name='email' placeholder='Ingresar el Email' value={dataForm.email} onChange={handleOnChange}/>    
              <input type="number " name='phone' placeholder='Ingresar el Numero de Telefono' value={dataForm.phone} onChange={handleOnChange}/>       
            <button className='btn btn-success mb-5'>Terminar Compra</button>
            </form> 
    </div>
    :
    <div>
      <h2> Agrega productos al carrito</h2>
      <Link to="/" className='btn bg-info m-2'>ir a comprar</Link>
    </div>}
    </>
  )
}

export default CartContainer