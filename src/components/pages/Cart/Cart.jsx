import './Cart.css'

export const Cart = ({name, img, quantity, id, stock, removeItem, setQuantity }) => {
  return (
  <div className="tarjeta">
    <img src={img} alt="Imagen del producto" className='img'/>
    <h5>{name}</h5>
    <div>
      <button className='button1' onClick={() => setQuantity(id, 'decrement')} disabled={quantity <= 1 ? true : false}>-</button>
      <h4>{quantity}</h4>
      <button className='button1' onClick={() => setQuantity(id, 'increment')} disabled={quantity >= stock ? true : false}>+</button>
    </div>
    <button onClick={() => removeItem(id)} className='button button1'>Eliminar</button>
  </div>
)}
