import { ItemCount } from "../../common/ItemCount/ItemCount"
import style from "./ItemDetail.module.css"

export const ItemDetail = ({ name, description, img, price, stock, onAdd, total }) => {
  return (
        <div className={style.fondo}>
          <div className={style.div1}>
            <h1 className={style.titulo}>{name}</h1>
            <img src={img} alt="" className={style.img}/>
          </div>
          <div className={style.div2}>
            <h5>{description}</h5>
            <h4>Precio: ${price}</h4>
            <ItemCount stock={stock} onAdd={onAdd} total={total}/>
          </div>
        </div>
  )
}
