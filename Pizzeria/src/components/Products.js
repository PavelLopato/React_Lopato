import React, {useMemo} from 'react';

import Product from "./Product";

export default function Products({products}) {

  const pizzasMemoizeed=useMemo(
    () =>products.map(el=>
      <Product key={el.id} product={el}/> ),
    [products]
  );

  return (
    <div className='menuPizzas'>   
      {pizzasMemoizeed}   
    </div>
  )
}
