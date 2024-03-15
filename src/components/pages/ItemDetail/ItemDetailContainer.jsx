import { useEffect, useState } from 'react'
import { ItemDetail, Loading } from '../../common'
import { useParams } from 'react-router-dom';
import { getProduct } from '../../../asyncMock';

export const ItemDetailContainer = () => {
    const { id } = useParams ();
    const [item, setItem] = useState (null);
    const [isLoading, setIsLoading] = useState (true);
      useEffect (() => {
        setIsLoading(true);
        getProduct(id)
          .then (resp => {
            setItem(resp);
            setIsLoading(false);
          })
      }, [])
    const onAdd = (quantity)=>{
      const producto = {
        ...item,
        cantidad: quantity
      }
      console.log(producto);
    }
      
  return (
    <>
    {isLoading ? <Loading/> : <ItemDetail {...item} onAdd={onAdd} />}
    </>
    )
}
