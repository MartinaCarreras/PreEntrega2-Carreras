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
        <span>El total a pagar es: {total}</span>
        <button onClick={clearCart}>Limpiar Carrito</button>
        <Link to={"/checkout"}>
          <button>Finalizar compra</button>
        </Link>
      </div>
    </div>}
    </>
    

  )
}
