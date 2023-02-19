import React from 'react';
import { PagesLinks } from './PagesLinks';

export default function Header() {
  return (
    <header>
        <div>
           <span className='logo'> Pizzeria Mozzarella </span>
           <PagesLinks />           
        </div>

    </header>
  )
}
