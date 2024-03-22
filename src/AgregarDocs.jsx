import { addDoc, collection } from 'firebase/firestore'
import { db } from './firebaseConfig'
import { productos } from './asyncMock'

export const AgregarDocs = () => {

    const rellenar = () => {

        let productsCollection = collection( db, "productos" );
        productos.forEach(producto=> {
            addDoc( productsCollection, producto )
        })

    }

  return (
    <div>
        <button onClick={rellenar}>Agregar</button>
    </div>
  )
}
