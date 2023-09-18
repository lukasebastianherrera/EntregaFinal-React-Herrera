import React, { useEffect, useState } from 'react'
import { mFetch } from '../../Utils/mockFetch'
import Itemlist from '../ItemList/Itemlist'
import { useParams } from 'react-router-dom'

const ItemListContainer = (props) => {
  const [products, setProduct] = useState([])
  const [loading, setLoading] = useState(true)
  const { cid } = useParams()
  useEffect(()=>{
    if (cid) {
      mFetch()
      .then(res => setProduct(res.filter(products => cid === products.category)))
      .catch(err => console.log(err))
      .finally(() => setLoading(false))
    } else {
      mFetch()
      .then(res => setProduct(res))
      .catch(err => console.log(err))
      .finally(() => setLoading(false))
    }
  }, [cid])
  return (
    <div className='row m-3'>
      { loading ? <h2>loading...</h2> : <Itemlist products={products} />}
    </div>
  )
}

export default ItemListContainer