import React from 'react';
import { dataDelete } from '../redux/cartSlice.js';
import { useDispatch } from 'react-redux';
import { FaRegTrashAlt } from "react-icons/fa";

export default function CartProduct({product}) {

  const dispatch = useDispatch();

  function deleteProductFromCart() {
    dispatch( dataDelete(product));
  };

  return (
    <div className='pizza'>
      <img className='imgPizza' src={'./img/' + product.img} alt='изображение пиццы' />  
      <h2>{product.name}</h2>
      <p>{"Состав: " + product.ingredients}</p>
      <b className='bold'>{'Цена: ' + product.price + 'руб.'}</b> <br />
      <b className='bold'>{'Размер: ' + product.size}</b>
      <button className='deleteFromCart' onClick={deleteProductFromCart}>
        <FaRegTrashAlt />
      </button>     
    </div>
  )
}
