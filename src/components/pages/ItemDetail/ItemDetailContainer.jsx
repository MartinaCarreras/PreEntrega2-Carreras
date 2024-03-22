import { useContext, useEffect, useState } from 'react'
import { Loading } from '../../common'
import { ItemDetail } from './ItemDetail';
import { useParams } from 'react-router-dom';
import { CartContext } from '../../../context/CartContext';
import { db } from '../../../firebaseConfig';
import { collection, doc, getDoc } from 'firebase/firestore';

export const ItemDetailContainer = () => {
    const { id } = useParams ();

    const { addToCart, totalQuantity } = useContext (CartContext);
    const [item, setItem] = useState (null);
    const [isLoading, setIsLoading] = useState (true);
    const total = totalQuantity(+id);

    const onAdd = (quantity)=>{
      const producto = {
        ...item,
        quantity: quantity
      }
      addToCart( producto );
    }

    useEffect (() => {
      
      setIsLoading(true);
      let arrayProducts = collection( db, "productos" );
      let refDoc = doc( arrayProducts, id );
      getDoc ( refDoc )
        .then(resp => {
          setItem({...resp.data(), id: resp.id});
        }).finally(() => setIsLoading(false))

    }, [id])

  return (
    <>
    {isLoading ? <Loading/> : <ItemDetail {...item} onAdd={onAdd} total={total}/>}
    </>
    )
}
