import { useEffect, useState } from 'react'
import { ItemDetail } from '../common/'
import { useParams } from 'react-router-dom';
import { getProduct } from '../../asyncMock';

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
      
  return (
    <>
    {isLoading ? <h1>Cargando...</h1> : <ItemDetail {...item} />}
    </>
    )
}
