import { ItemCount } from "../ItemCount"
import style from "./ItemDetail.module.css"

export const ItemDetail = ({ name, description, img, price, stock }) => {
  return (
        <div>
            <h5>{name}</h5>
            <img src={img} alt="" className={style.img}/>
            <p>{description}</p>
            <p>Precio: {price}</p>
            <ItemCount stock={stock}/>
        </div>
  )
}
