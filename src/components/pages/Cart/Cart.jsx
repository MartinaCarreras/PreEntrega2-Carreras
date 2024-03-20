import './Cart.css'

export const Cart = ({name, img, quantity, id, stock, removeItem, setQuantity }) => {
  return (
  <div className="tarjeta">
    <img src={img} alt="Imagen del producto" className='img'/>
    <div>
      <h5>{name}</h5>
      <div>
        <button onClick={() => setQuantity(id, 'decrement')} disabled={quantity <= 1 ? true : false}>-</button>
        <h4>{quantity}</h4>
        <button onClick={() => setQuantity(id, 'increment')} disabled={quantity >= stock ? true : false}>+</button>
      </div>
      <button onClick={() => removeItem(id)}>Eliminar</button>
    </div>
  </div>
)}
