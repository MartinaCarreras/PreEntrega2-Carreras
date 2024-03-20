import { BrowserRouter, Route, Routes } from "react-router-dom"
import { ItemDetailContainer, ItemListContainer, CartContainer, Error, CheckoutContainer } from "./components/pages/index"
import './App.css'
import { Layout } from "./components/layout/index"
import CartContextProvider from "./context/CartContext"

const App = () => {
  return (
    <>
      <BrowserRouter>
        <CartContextProvider>
          <Routes>
            <Route element={<Layout/>}>
              <Route path="/" element={<ItemListContainer/>} />
              <Route path="/category/:category" element={<ItemListContainer/>} />
              <Route path="/cart" element={<CartContainer/>}/>
              <Route path="/checkout" element={<CheckoutContainer/>}/>
              <Route path="/product/:id" element={<ItemDetailContainer/>} />
              <Route path="*" element={<Error/>}/>
            </Route>
          </Routes>
        </CartContextProvider>
      </BrowserRouter>
    </>
  )
}

export default App