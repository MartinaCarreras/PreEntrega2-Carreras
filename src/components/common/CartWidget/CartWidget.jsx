import { FaShoppingCart } from "react-icons/fa";
import { Badge, createTheme, ThemeProvider } from "@mui/material";
import { Link } from "react-router-dom";
import "./CartWidget.css"
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";

export const CartWidget = () => {
  const { totalItems } = useContext(CartContext);
  let total = totalItems();

  const myTheme = createTheme({
    palette: {
      primary: {
        main: "#3F4924"
      },
      secondary: {
        main: '#E0C2FF',
        light: '#F5EBFF',
        contrastText: '#47008F',
      }
    },
  });

  return (
    <Link to="/cart">
      <ThemeProvider theme={myTheme}>
        <Badge badgeContent={total} showZero className="color" color="primary">
          <FaShoppingCart className="color item"/>
        </Badge>
      </ThemeProvider>
      
    </Link>
    )
}
