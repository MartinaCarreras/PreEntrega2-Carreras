import { FaShoppingCart } from "react-icons/fa";
import { Badge } from "@mui/material";
import { Link } from "react-router-dom";
import style from "./CartWidget.module.css"

export const CartWidget = () => {
  return (
    <Link to="/cart">
      <Badge badgeContent={0} showZero className={style.color} color="primary">
        <FaShoppingCart className={style.color}/>
      </Badge>
    </Link>
    )
}
