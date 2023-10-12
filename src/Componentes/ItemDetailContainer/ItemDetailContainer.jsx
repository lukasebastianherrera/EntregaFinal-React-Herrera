import React, { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail/ItemDetail'
import { getFirestore, doc, getDoc} from "firebase/firestore"
import { mFetch } from '../../Utils/mockFetch'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {
    const [product, setProduct] = useState({})
    // const [loading, setLoading] = useState(true)
    const {pid} = useParams()
    useEffect(() => {
      const db = getFirestore()
      const queryDoc = doc(db, "products", pid)
      getDoc(queryDoc)
      .then (resp => ({ id: resp.id, ...resp.data() } ))
      .then (resp => setProduct(resp))
    }, [])

    // useEffect(() => {
    //     mFetch(Number(pid))
    //     .then(resp => setProduct(resp))
    //     .catch(err => console.log(err))
    //     .finally(() => setLoading(false)) 
    // }, [])

  return (
    <div className='row m-3'>
      <ItemDetail product={product} />
    </div>
  )
}

export default ItemDetailContainer