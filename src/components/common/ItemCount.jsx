import { useState } from "react";

export const ItemCount = ({stock, inicial = 1}) => {
  const [count, setCount] = useState(inicial);

  const increment = () => {
    count < stock && setCount(count + 1);
  }
  
  const decrement = () => {
    count > 0 && setCount(count - 1);
  }
  return (
    <div>
        <button onClick={decrement}>-</button>
        <h5>{count}</h5>
        <button onClick={increment}>+</button>
    </div>
  )
}