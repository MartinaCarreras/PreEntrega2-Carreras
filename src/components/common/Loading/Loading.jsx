import style from "./Loading.module.css"
import { PulseLoader } from "react-spinners"

export const Loading = () => {
  return (
    <div className={style.fondo}>
        <h3>Cargando...</h3>
        <PulseLoader color="#A9A89A"  size={42}/>
    </div>
  )
}
