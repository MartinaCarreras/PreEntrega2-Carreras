import { Link } from "react-router-dom"
export const Cart = () => {
  return (
    <div>
      <h2>Aquí está el Checkout</h2>
      <Link to={"/checkout"}>
        <button>Finalizar compra</button>
      </Link>
    </div>
  )
}
