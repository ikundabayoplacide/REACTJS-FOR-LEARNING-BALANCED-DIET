// Layout.js

import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPersonDress, faBasketShopping, faSearch } from '@fortawesome/free-solid-svg-icons';

function Layout({ children }) {
  return (
    <div>
      <div className='nav'>
        <p><span>BALANCED</span>DIET</p>
        {/* this is heading */}
        <button><Link to="/"className='link'>Home</Link></button>
        <button><Link to="/products" className='link'>Products</Link></button>
        <button><Link to="/services" className='link'>Services</Link></button>
        <button><Link to="/pages"className='link'>Pages</Link></button>
        <button><Link to="/Buy" className='link'>Buy</Link></button>

        <div className='icon'>
          <FontAwesomeIcon icon={faSearch} className='icons' />
          <FontAwesomeIcon icon={faBasketShopping} className='icons' />
          <FontAwesomeIcon icon={faPersonDress} className='icons' />
        </div>
        <h2 className='welcome'>WELCOME</h2>
      </div>
      {/* this above is the end of navigation */}
      {children}
    </div>
  );
}

export default Layout;
