import style from './Checkout.module.css'

export const Checkout = ( { sendForm, change, orderId } ) => {
  return (
    <div id={style.bordes}>
      <h1>Checkout</h1>
      {
        orderId ? 
        <h1>Gracias por su compra! Su número de orden es {orderId}</h1> :
        <form action="" onSubmit={sendForm} className={style.form} >
          <div className="row">
            <div className="col">
              <input type="text" className="form-control" placeholder="Ingrese su nombre" onChange={change} name="name"/>
            </div>
            <div className="col">
              <input type="text" className="form-control" placeholder="Ingrese su apellido" onChange={change} name="lastName"/>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <input type="tel" className="form-control" placeholder="Ingrese su teléfono" onChange={change} name="phone"/>
            </div>
            <div className="col">
              <input type="email" className="form-control" placeholder="Ingrese su mail" onChange={change} name="email"/>
            </div>
          </div>
          <button type="submit" className="btn btn-primary" id={style.send}>Comprar</button>
        </form>
      }
    </div>
  )
}
