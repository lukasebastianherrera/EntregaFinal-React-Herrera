import React, { useEffect, useState } from 'react'
import Itemlist from '../ItemList/Itemlist'
import { useParams } from 'react-router-dom'
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore'

const Loading = ()=>{
  return (
      <>
          <h2>Loading ...</h2> 
      </>
  )
}

const ItemListContainer = (props) => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const { cid } = useParams()

  useEffect(() => {
    const db = getFirestore()
    const queryCollection = collection(db, "products")
    const queryFilter = cid ? query(queryCollection, where("category", "==", cid)) : queryCollection
      getDocs(queryFilter)
      .then(resp => setProducts(resp.docs.map(prod => ({ id: prod.id, ...prod.data()}))))
      .catch(err => console.log(err))
      .finally(resp => setLoading(false))
  }, [cid])


  return (
    <div className='row m-3'>
      { loading ? <Loading/> : <Itemlist products={products} />}
    </div>
  )
}

export default ItemListContainer