import React, { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail/ItemDetail'
import { mFetch } from '../../Utils/mockFetch'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {
    const [product, setProduct] = useState({})
    const [loading, setLoading] = useState(true)
    const {pid} = useParams()
    useEffect(() => {
        mFetch(Number(pid))
        .then(resp => setProduct(resp))
        .catch(err => console.log(err))
        .finally(() => setLoading(false))
        
    }, [])

  return (
    <div className='row m-3'>
            { loading ? <h2> Loading... </h2> :  <ItemDetail product={product} /> }
    </div>
  )
}

export default ItemDetailContainer