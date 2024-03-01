import { BrowserRouter, Route, Routes } from "react-router-dom"
import { ItemDetailContainer, ItemListContainer } from "./components/pages/"
import { NavBar } from "./components/layout/Navbar/NavBar"
import { Cart } from "./components/common"

const App = () => {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer/>} />
          <Route path="/category/:category" element={<ItemListContainer/>} />
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/product/:id" element={<ItemDetailContainer/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App