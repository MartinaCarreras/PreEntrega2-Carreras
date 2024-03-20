import { createContext, useState } from "react"

export const CartContext = createContext();

const CartContextProvider = ( {children} ) => {
    const [cart, setCart] = useState([]);

    const addToCart = ( elemento ) => {
      const isItIn = isIn( elemento.id );

      if (isItIn) {
        let ProductoDuplicado = cart.map ( (producto) => {
          if (producto.id === elemento.id) {
            return {...producto, quantity: elemento.quantity}
          } else {
            return producto
          }
        } )
        setCart(ProductoDuplicado)
      }else {
        setCart ([ ...cart, elemento ]);
      }

    }

    const clearCart = () => {
      setCart ([]);
    }

    const setQuantity = (id, type) => {
      const newCart = cart.map((product) => {
        if (product.id == id) {
          if (type == 'decrement'){
            return {...product, quantity: product.quantity - 1}
          } else if (type == 'increment') {
            return {...product, quantity: product.quantity + 1}
          }
        }else {
          return product
        }
      })
      setCart(newCart)
    }

    const isIn = ( id ) => {

      const inCart = cart.some( (element) => element.id === id )
      return inCart

    }

    const removeItem = (id) =>{

      let newArray = cart.filter( (product) => product.id !== id )
      setCart(newArray)

    }

    const totalItems = () => {

      let total = cart.reduce ((act, product) => {
        return act + product.quantity;
      }, 0 )
      return total;

    }

    const totalPrice = () => {

      let total = cart.reduce ((acc, product) => {
        return acc + (product.price * product.quantity);

      }, 0)
      return total
    }

    const totalQuantity = ( id ) => {
      let is
      let product = cart.find( (element) => element.id === id );

      if (product) {
        return(product.quantity);
      } else {
        return undefined ;
      }
    }

  return <CartContext.Provider value={{cart, addToCart, clearCart, setQuantity, removeItem, totalItems, totalPrice, totalQuantity}}>
    { children }
  </CartContext.Provider>
}

export default CartContextProvider