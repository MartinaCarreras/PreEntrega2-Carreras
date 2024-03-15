import { CartWidget } from "../../common/CartWidget";
import { Link } from 'react-router-dom'
import style from "./NavBar.module.css";

export const NavBar = () => {
  return (
    <header>
      <ul className={style.containerNav}>
        <Link to={"/"}>
          <img src="https://i.imgur.com/DjsgGIx.jpg" alt="Logo" className={style.header_logo}/>
        </Link>
        <Link to={"/category/Ropa"}>
          <li className={style.botones}>Ropa</li>
        </Link>
        <Link to={"/category/Peluches"}>
          <li className={style.botones}>Peluches</li>
        </Link>
        <Link to={"/category/Accesorios"}>
          <li className={style.botones}>Accesorios</li>
        </Link>
        <Link to="/cart">
          <CartWidget/>
        </Link>
      </ul>
    </header>
  )
}

