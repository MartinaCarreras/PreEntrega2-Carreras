import { FaShoppingCart } from "react-icons/fa";
import { Badge } from "@mui/material";
import { Link } from "react-router-dom";
import "./CartWidget.css"
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";

export const CartWidget = () => {
  const { totalItems } = useContext(CartContext);
  let total = totalItems();

  return (
    <Link to="/cart">
      <Badge badgeContent={total} showZero className="color" color="primary">
        <FaShoppingCart className="color item"/>
      </Badge>
    </Link>
    )
}
