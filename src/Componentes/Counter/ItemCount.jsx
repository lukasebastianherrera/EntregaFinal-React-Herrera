
import { useCounter } from '../hooks/useCounter'

const ItemCount = ({initial, stock, onAdd}) => {
    const {count, añadirSuma, restarNumero} =  useCounter(initial, stock)
  return (
    <div>
        <h2>Counter</h2>
        <button onClick={restarNumero} className='bg-danger m-2'> - 1</button>
        <label>
            <p>{count}</p>
        </label>
        <button onClick={añadirSuma} className='bg-success m-2'> + 1</button>
        <button onClick={() => onAdd(count)} className='bg-primary'> Agregar Al Carrito</button>
    </div>
  )
}

export default ItemCount