import { useState } from "react";
import style from './ItemCount.module.css'

export const ItemCount = ({ stock, onAdd, total=1 }) => {
  const [count, setCount] = useState(total);

  const increment = () => {
    count < stock && setCount(count + 1);
  }
  
  const decrement = () => {
    count > 1 && setCount(count - 1);
  }
  return (
    <div>
      <div className={style.incYdec}>
        <button onClick={decrement} className={style.button}>-</button>
        <h5>{count}</h5>
        <button onClick={increment} className={style.button}>+</button>
      </div>
      <button onClick={()=>onAdd(count)} className={style.button}>Agregar al carrito</button>
    </div>
  )
}