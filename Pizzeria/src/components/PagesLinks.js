import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from 'react-redux';

import './PagesLinks.css';

export const PagesLinks = () => {

    const cart = useSelector( state => state.cart); 
          
    function getLinkClass(obj) {
      let className="PageLink";
      if ( obj.isActive )
        className+=" ActivePageLink";
      return className;
    }

    return (
      <div>
        <NavLink to="/" end    className={getLinkClass}>Главная</NavLink>
        <NavLink to="/about" className={getLinkClass}>О нас</NavLink>
        <NavLink to="/menu" className={getLinkClass}>Меню</NavLink>
        <NavLink to="/cart" className={getLinkClass}>
          <span className='lengthCart'>({cart.data.length})</span>
          <FaShoppingCart className={getLinkClass} />
        </NavLink>
      </div>
    );

};
