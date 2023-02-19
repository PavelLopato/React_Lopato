import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet, NavLink } from 'react-router-dom';

import { productsLoad } from "../redux/productsLoad.js";

import '../components/PageMenu.css';

export const PageMenu = () => { 
  
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

  function getLinkClassMenu(obj) {
    let className="PageLinkMenu";
    if ( obj.isActive )
      className+=" ActivePageLinkMenu";
    return className;
  };

  return (
    <main>
      <div className='ourMenu'>Наше меню:</div>
      <div className='pagesPizzas'>
        <NavLink to=""  className={getLinkClassMenu}>Все пиццы</NavLink>
        <NavLink to="1" className={getLinkClassMenu}>1</NavLink>
        <NavLink to="2" className={getLinkClassMenu}>2</NavLink>
        <NavLink to="3" className={getLinkClassMenu}>3</NavLink>
      </div>
      { (products.dataLoadState===1) && "loading..." } 
      { (products.dataLoadState===3) && "error: "+products.dataLoadError }   
      
      {(products.dataLoadState===2) && <Outlet /> }   
    </main>
  );    
};

