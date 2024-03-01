import { CartWidget } from "../../common/CartWidget";
import { Link } from 'react-router-dom'
import style from "./NavBar.module.css";

export const NavBar = () => {
  return (
    <div>
      <div className={style.containerNav}>
        <Link to={"/"}>
          <img src="https://i.imgur.com/DjsgGIx.jpg" alt="Logo" style={{width: "150px", height: "100px"}}/>        </Link>
        <Link to={"/category/Ropa"}>
          <button>Ropa</button>
        </Link>
        <Link to={"/category/Peluches"}>
          <button>Peluches</button>
        </Link>
        <Link to={"/category/Accesorios"}>
          <button>Accesorios</button>
        </Link>
        <Link to="/cart">
          <CartWidget/>
        </Link>
      </div>
    </div>
  )
}

