import { useState } from "react"
import { Checkout } from "./Checkout";

export const CheckoutContainer = () => {

    const [infoUser, setInfoUser] = useState({
      name: "",
      lastName: "" 
    });

    const sendForm = ( event ) => {
      event.preventDefault();
    }

    const change = (event) => {
      setInfoUser({...infoUser, [event.target.name]: event.target.value})
    }

  return (
    <div>
        <Checkout 
        sendForm={sendForm} 
        change={change}
        />
    </div>
  )
}
