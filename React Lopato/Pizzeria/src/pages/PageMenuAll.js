import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Products from '../components/Products.js';

import { productsLoad } from "../redux/productsLoad.js";

export const PageMenuAll = () => { 
  
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

  return (
    <div>
      <Products products={products.data} />
    </div>
  );    
};
