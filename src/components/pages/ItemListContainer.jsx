import { useEffect, useState } from 'react'
import { ItemList } from '../common';
import {getProducts} from "../../asyncMock"
import { useParams } from 'react-router-dom';

export const ItemListContainer = () => {
    const { category } = useParams();
    const [products, setProducts] = useState([]);
    const [isLoading, setLoading] = useState([true]);
    useEffect(() => {
      setLoading(true);
      getProducts ()
        .then (resp => {
          if (category) {
            const productsFilter = resp.filter(product => product.category == category);
            setProducts(productsFilter);
          }else {
            setProducts(resp);
          }
          setLoading(false);
        })
    }, [category])
  return (
    <>
      {isLoading ? <h2>Cargando...</h2> : <ItemList products={products}/>}
    </>
  );
}