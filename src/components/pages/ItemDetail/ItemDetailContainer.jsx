import { useContext, useEffect, useState } from 'react'
import { Loading } from '../../common'
import { ItemDetail } from './ItemDetail';
import { useParams } from 'react-router-dom';
import { getProduct } from '../../../asyncMock';
import { CartContext } from '../../../context/CartContext';

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
      getProduct(id)
        .then (resp => {
          setItem(resp);
          setIsLoading(false);
        })
    }, [])

  return (
    <>
    {isLoading ? <Loading/> : <ItemDetail {...item} onAdd={onAdd} total={total}/>}
    </>
    )
}
