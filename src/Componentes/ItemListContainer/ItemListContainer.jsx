import React, { useEffect, useState } from 'react'
import { mFetch } from '../../Utils/mockFetch'
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

  // useEffect(()=>{
  //   if (cid) {
  //     mFetch()
  //     .then(res => setProduct(res.filter(products => cid === products.category)))
  //     .catch(err => console.log(err))
  //     .finally(() => setLoading(false))
  //   } else {
  //     mFetch()
  //     .then(res => setProduct(res))
  //     .catch(err => console.log(err))
  //     .finally(() => setLoading(false))
  //   }
  // }, [cid])
  useEffect(() => {
    const db = getFirestore()
    const queryCollection = collection(db, "products")
    if (cid) {
      const queryFilter = query(queryCollection, where("category", "==", cid))
      getDocs(queryFilter)
      .then(resp => setProducts(resp.docs.map(prod => ({ id: prod.id, ...prod.data()}))))
      .catch(err => console.log(err))
      .finally(resp => setLoading(false))
    } else {
      getDocs(queryCollection)
      .then(resp => setProducts(resp.docs.map(prod => ({ id: prod.id, ...prod.data()}))))
      .catch(err => console.log(err))
      .finally(resp => setLoading(false))
    }
  }, [cid])


  return (
    <div className='row m-3'>
      { loading ? <Loading/> : <Itemlist products={products} />}
    </div>
  )
}

export default ItemListContainer