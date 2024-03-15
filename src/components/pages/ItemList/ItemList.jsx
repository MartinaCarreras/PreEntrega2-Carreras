import { Item } from "../../common/Item/Item";
import style from "./ItemList.module.css"

export const ItemList = ({products}) => {
  return (
    <div className={style.cardsContainer}>
      {products.map(({id, img, name}) => {
        return (
          <Item
            key={id}
            img={img}
            name={name}
            id={id}
          />
        );
      })}
    </div> 
    )
}
