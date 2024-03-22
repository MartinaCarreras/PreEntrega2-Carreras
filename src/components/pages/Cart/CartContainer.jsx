import { Link } from "react-router-dom"
import { useContext } from "react"
import { Cart } from "./Cart.jsx"
import { CartContext } from "../../../context/CartContext"
import './Cart.css'


export const CartContainer = () => {
  const { cart, clearCart, setQuantity, removeItem, totalPrice } = useContext( CartContext );
  let total = totalPrice();

  return (
    <>
    {cart.length == 0 ? <h3>No tienes productos</h3> : <div className="fondo">
      <div className="div">
      {
        cart.map( (product) =>
        <div key={product.id}>
          <Cart {...product} removeItem={removeItem} setQuantity={setQuantity} />
        </div>)
      }
      </div>
      <div className="div div2">
        <h4>Detalles del carrito</h4>
        <h6>Cantidad de productos: {cart.length}</h6>
        <h6>Precio total: ${total}</h6>
        <h6>Descuentos:</h6>
        <h5>Total: {total}</h5>
        <div>
          <button onClick={clearCart} className="button button1">Limpiar Carrito</button>
          <Link to={"/checkout"}>
            <button className="button button1">Finalizar compra</button>
          </Link>
        </div>
      </div>
    </div>}
    </>
    

  )
}
