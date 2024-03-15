import style from './Checkout.module.css'

export const Checkout = ( { sendForm, change } ) => {
  return (
    <div id={style.bordes}>
      <h1>Checkout</h1>
      <form action="" onSubmit={sendForm} className={style.form} >
        <div className="row">
          <div className="col">
            <input type="text" className="form-control" placeholder="Ingrese su nombre" onChange={change} name="name"/>
          </div>
          <div className="col">
            <input type="text" className="form-control" placeholder="Ingrese su apellido" onChange={change} name="lastName"/>
          </div>
        </div>
        <button type="submit" className="btn btn-primary" id={style.send}>Enviar</button>
      </form>
    </div>
  )
}
