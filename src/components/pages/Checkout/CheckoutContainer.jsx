import { useState } from "react"
import { Checkout } from "./Checkout";
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import { addDoc, collection, updateDoc, doc } from "firebase/firestore";
import { db } from "../../../firebaseConfig";
import { Loading } from "../../common/Loading/Loading";


export const CheckoutContainer = () => {

    const [infoUser, setInfoUser] = useState({
      name: "",
      lastName: "", 
      phone: "",
      email:""
    });

    const [ orderId, setOrderId ] = useState(null);

    const [ isLoading, SetIsLoading ] = useState(false)

    const { cart, totalPrice, clearCart } = useContext(CartContext)
    let precioTotal = totalPrice();

    const sendForm = ( event ) => {
      event.preventDefault();
      SetIsLoading(true);

      const order = {
        buyer: infoUser,
        items: cart,
        total: precioTotal
      }

      const orderCollection = collection( db, "ordenes" )
      addDoc( orderCollection, order ).then((resp) => {
        setOrderId(resp.id)
        SetIsLoading(false)
      })

      cart.forEach(product=> {
        
        let refDoc = doc( db, "productos", product.id )

        updateDoc( refDoc, {stock: product.stock - product.quantity} )

      })
      clearCart();
    }

    const change = (event) => {
      setInfoUser({...infoUser, [event.target.name]: event.target.value})
    }

  return (
    <div>
      {isLoading ? 
      <Loading/> : 
      <Checkout 
        orderId={orderId}
        sendForm={sendForm} 
        change={change}
      />}
    </div>
  )
}
