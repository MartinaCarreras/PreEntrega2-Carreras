import { Link } from "react-router-dom";
import style from "./Item.module.css"

export const Item = ({ img, name, id }) => {
  return (
    <section>
      <article className={style.card}>
        <img src={img} alt={name} className={style.img}/>
        <h4>{name}</h4>
        <Link to={`/product/${id}`} >
          <button>Detalles</button>
        </Link>
      </article>
    </section>
  );
};
