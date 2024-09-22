import React, { useRef } from 'react';
import './Components.css';
import { Link } from 'react-router-dom';
import { routes } from '../Routes';
import { FaShopify } from 'react-icons/fa';
import { MdOutlineShoppingCart } from 'react-icons/md';
import { CiMenuFries } from 'react-icons/ci';
import { FaTimes } from "react-icons/fa";


const Navbar = () => {
  const showNavRef = useRef()
  const crossRef = useRef()
  const toggleRef = useRef()
  const showNavbar = () => {
    showNavRef.current.style.visibility = "visible"
    crossRef.current.style.visibility = "visible"
    toggleRef.current.style.visibility = "hidden"
  }
  const hideNavbar = () => {
    showNavRef.current.style.visibility = "hidden"
    crossRef.current.style.visibility = "hidden"
    toggleRef.current.style.visibility = "visible"
  }

  return (
    <div>
      <nav>
        <div className='main-name'>
          <div><FaShopify color='red' size='30' /></div>
          <div><h1>SHOPPER</h1></div>
        </div>
        <div className='nav-links' ref={showNavRef}>
          <div>
            {routes.map(({ path, label }, index) => (
              <Link key={index} to={path} className='nav-link'>
                {label}
              </Link>
            ))}
          </div>
        </div>
        <div className='toggle-close' onClick={hideNavbar} ref={crossRef}>
          <FaTimes size='30' color='red' />
        </div>
        <div>
          <Link to="/cart" className='nav-link' >
            <MdOutlineShoppingCart size='30' />
          </Link>
        </div>
        <div className='toggle-btn' onClick={showNavbar} ref={toggleRef}>
          <CiMenuFries size='30' color='red'/>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
