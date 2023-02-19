import React, { useEffect, useState } from 'react';
import { FaTrash } from "react-icons/fa";

import { useSelector, useDispatch } from 'react-redux';
import { dataDeleteAll } from '../redux/cartSlice.js';

import CartProducts from '../components/CartProducts.js';

export const PageCart = () => {   
  
  const dispatch = useDispatch();
  
  const cart = useSelector( state => state.cart); 

  const [sum, setSum]=useState(0);
  const [allPizzasInCart, setAllPizzasInCart]=useState([]);

  useEffect(() => {
    if (cart.data){
      const sumall = cart.data.map(item => item.price).reduce((prev, curr) => prev + curr, 0);  
      setSum(sumall)
    };
    const allPizzas = Array.from(cart.data, x => x.name);
    setAllPizzasInCart(allPizzas);
  },[cart]);  

  function deleteAllProducts() {
    dispatch( dataDeleteAll());
  };

  return (
    <main>
      <div className='ourMenu'>Корзина товаров:</div>
      {cart.data.length > 0 &&
      <div>
        <CartProducts products={cart.data} /> 
        <p className='order'>
          Для оформления заказа свяжитесь с нами по телефону +375295599009
        </p>
        <span><b>Ваш заказ: </b> {allPizzasInCart.join(', ')}</span>
        <br/>
        <span>
          <b>Сумма заказа: </b>{sum} руб.
        </span> <br />
        <button className='deleteAllProducts' onClick={deleteAllProducts}>
          <FaTrash/>
        </button>       
      </div>}
      {cart.data.length === 0 && 
      <span className='noProductCart'>товаров нет</span>}
    </main>
  );    
};

