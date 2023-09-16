import React, { useEffect, useState } from 'react'
import { mFetch } from '../../Utils/mockFetch'
import Itemlist from '../ItemList/Itemlist'

const ItemListContainer = (props) => {
  const [products, setProduct] = useState([])
  const [loading, setLoading] = useState(true)
  useEffect(()=>{
    mFetch()
    .then(res => setProduct(res))
    .catch(err => console.log(err))
    .finally(() => setLoading(false))
  }, [])
  return (
    <div className='row m-3'>
      { loading ? <h2>loading...</h2> : <Itemlist products={products} />}
    </div>
  )
}

export default ItemListContainer