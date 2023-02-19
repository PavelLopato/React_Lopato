import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Products from '../components/Products';

import { productsLoad } from "../redux/productsLoad.js";

export const PageMenu1 = () => { 
  
  useEffect(() => {
    if (!products.data){  
      load();   
    }
  });    

  const dispatch = useDispatch();

  const products = useSelector( state => state.products); 

  function load() {
    dispatch( productsLoad );
  };

  const items = products.data.filter (item => item.id < 21);

  return (
    <div>
      <Products products={items} />
    </div>
  );    
};
