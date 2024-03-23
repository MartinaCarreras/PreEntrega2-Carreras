import { BrowserRouter, Route, Routes } from "react-router-dom"
import { ItemDetailContainer, ItemListContainer, CartContainer, Error, CheckoutContainer } from "./components/pages/"
import './App.css'
import { Layout } from "./components/layout/index"
import CartContextProvider from "./context/CartContext"
import { routes } from "./routes/routes"

const App = () => {
  return (
    <>
      <BrowserRouter>
        <CartContextProvider>
          <Routes>
            <Route element={<Layout/>}>
              {routes.map(({id, path, Element})=>{
                return <Route path={path} element={<Element/>} key={id} />
              })}
            </Route>
          </Routes>
        </CartContextProvider>
      </BrowserRouter>
    </>
  )
}

export default App