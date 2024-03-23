import { useEffect, useState } from 'react'
import { Loading } from '../../common';
import { ItemList } from "./ItemList"
import { useParams } from 'react-router-dom';
import { db } from '../../../firebaseConfig';
import { collection, getDocs, query, where } from 'firebase/firestore';

export const ItemListContainer = () => {
    const { category } = useParams();
    const [products, setProducts] = useState([]);
    const [isLoading, setLoading] = useState([true]);

    useEffect(() => {

      setLoading(true);
      
      let productsColection = collection( db, "productos" )
      let consulta = productsColection;
      if ( category ) {
        let productosFiltrados = query( productsColection, where( "category", "==", category ))
        consulta = productosFiltrados;
      }

      getDocs( consulta )
        .then ( resp => {
          let arrayDocs = resp.docs.map(elemento => {
          return {...elemento.data(), id: elemento.id}
          })
          setProducts(arrayDocs);
        }).finally(() => setLoading(false));

    }, [category])

  return (
    <>
      {isLoading ? <Loading/> : <ItemList products={products}/>}
    </>
  );
}