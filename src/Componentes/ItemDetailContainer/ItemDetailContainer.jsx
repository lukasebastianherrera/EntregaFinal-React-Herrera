import React, { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail/ItemDetail'
import { getFirestore, doc, getDoc} from "firebase/firestore"
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {
    const [product, setProduct] = useState({})
    const {pid} = useParams()
    useEffect(() => {
      const db = getFirestore()
      const queryDoc = doc(db, "products", pid)
      getDoc(queryDoc)
      .then (resp => ({ id: resp.id, ...resp.data() } ))
      .then (resp => setProduct(resp))
    }, [])


  return (
    <div className='row m-3'>
      <ItemDetail product={product} />
    </div>
  )
}

export default ItemDetailContainer