import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { PageHome } from '../pages/PageHome';
import { PageAbout } from '../pages/PageAbout';
import { PageMenu } from '../pages/PageMenu';
import { PageCart } from '../pages/PageCart';
import { PageMenuAll } from '../pages/PageMenuAll';
import { PageMenu1 } from '../pages/PageMenu1';
import { PageMenu2 } from '../pages/PageMenu2';
import { PageMenu3 } from '../pages/PageMenu3';

export const PagesRouter = () => {
          
    return (
      <Routes>
        <Route path="/" end element={<PageHome/>} />
        <Route path="/about" element={<PageAbout/>} />
        <Route path="/menu/*" element={<PageMenu/>}>
          <Route path=""  element={<PageMenuAll/>} />
          <Route path="1" element={<PageMenu1/>} />
          <Route path="2" element={<PageMenu2/>} />
          <Route path="3" element={<PageMenu3/>} />
        </Route>
        <Route path="/cart" element={<PageCart/>} />
      </Routes>
    );
    
};
