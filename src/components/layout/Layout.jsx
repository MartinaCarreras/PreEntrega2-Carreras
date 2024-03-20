import { Outlet } from "react-router-dom"
import { NavBar, Footer } from "./index"


export const Layout = () => {
  return (
    <>
        <NavBar/>
        <main>
            <Outlet/>
        </main>
        <Footer/>
    </>
  )
}
