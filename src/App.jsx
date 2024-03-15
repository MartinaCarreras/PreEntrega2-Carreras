import { BrowserRouter, Route, Routes } from "react-router-dom"
import { ItemDetailContainer, ItemListContainer, CartContainer, Error, CheckoutContainer } from "./components/pages/index"
import { NavBar, Footer } from "./components/layout/index"
import './App.css'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <main>
          <Routes>
            <Route path="/" element={<ItemListContainer/>} />
            <Route path="/category/:category" element={<ItemListContainer/>} />
            <Route path="/cart" element={<CartContainer/>}/>
            <Route path="/checkout" element={<CheckoutContainer/>}/>
            <Route path="/product/:id" element={<ItemDetailContainer/>} />
            <Route path="*" element={<Error/>}/>
          </Routes>
        </main>
      </BrowserRouter>
      <Footer/>
    </>
  )
}

export default App