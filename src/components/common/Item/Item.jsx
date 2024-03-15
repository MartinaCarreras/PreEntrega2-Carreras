import { Link } from "react-router-dom";
import style from "./Item.module.css"

export const Item = ({ img, name, id }) => {
  return (
      <article className={style.card}>
        <img src={img} alt={name} className={style.productos_section_producto}/>
        <h3>{name}</h3>
        <Link to={`/product/${id}`} >
          <button className={style.button}>Detalles</button>
        </Link>
      </article>
  );
};
