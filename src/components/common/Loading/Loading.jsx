import style from "./Loading.module.css"

export const Loading = () => {
  return (
    <div className={style.fondo}>
        <h3>Cargando...</h3>
        <img className={style.img} src="https://i.imgur.com/wccjdP8.gif" alt="" />
    </div>
  )
}
