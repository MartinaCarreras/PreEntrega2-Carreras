import style from "./Footer.module.css"

export const Footer = () => {
  return (
    <footer className={style.footer}>
        <h2>Siguenos en nuestras redes sociales!!</h2>
        <div className={style.instagramSection}>
            <img src="https://i.imgur.com/iONtDtF.png" alt="logo de instagram" className={style.logo}/>
            <h3 className={style.h2}>@tupeluchito.oficial</h3>
        </div>
    </footer>
  )
}
