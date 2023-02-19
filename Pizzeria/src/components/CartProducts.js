import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import CartProduct from "./CartProduct";

export default function CartProducts({products}) {

  return (
    <main>
      <TransitionGroup component={null}>      
      {products.map(el=>(
        <CSSTransition key={el.id} timeout={500} classNames="pizza">
          <CartProduct key={el.id} product={el} />
        </CSSTransition>
      ))} 
      </TransitionGroup>
    </main>
  )
}
