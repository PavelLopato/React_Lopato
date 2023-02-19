import React, {useEffect, useState} from 'react';
import { dataAdd } from '../redux/cartSlice.js';
import { useDispatch, useSelector } from 'react-redux';

export default function Product({product}) {

  const [tick, setTick]=useState(false);

  const cart = useSelector( state => state.cart); 

  const dispatch = useDispatch();

  useEffect(() => {
    if (cart.data.some(item => item.id === product.id)){
      setTick(true)
    }       
  },
  [cart.data, product.id]
); 

  function addProductToCart() {
    dispatch( dataAdd(product));
    setTick(true);
  };

  return (
    <div className='pizza'>
      <img className='imgPizza' src={'../img/' + product.img} alt='изображение пиццы' />  
      <h2>{product.name}</h2>
      <p>{"Состав: " + product.ingredients}</p>
      <b className='bold'>{'Цена: ' + product.price + 'руб.'}</b> <br />
      <b className='bold'>{'Размер: ' + product.size}</b>
      {(tick)&&
        <span className='productInCart'>товар в корзине</span>
      } 
      <input type='button' value='+' className='addToCart' onClick={addProductToCart} />                
    </div>
  )
}
