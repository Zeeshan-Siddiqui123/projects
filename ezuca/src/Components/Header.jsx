import React from 'react'
import { MdCall, MdEmail, MdOutlineSearch, MdOutlineShoppingBag } from "react-icons/md";
import { routes } from '../routes';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <div className="header">
                <div className="email">
                    <MdEmail size='20' color='#19C880' />
                    tuanna.design@gmail.com
                </div>
                <div className="contact">
                    <MdCall size='20' color='#19C880' />
                    001-1234-88888
                </div>
                <div className="search">
                    <input type="text" placeholder='What Would You Like To Learn?' />
                    <div style={{ backgroundColor: "#19C880" }}><MdOutlineSearch size='30' color='white' /></div>
                </div>
                <div className="login">
                    Register/Login
                </div>
            </div>
            <div className="navbar">
                    <nav>
                        <div className="nav-name">
                            <h1>Ezu<span style={{ color: "#19C880" }}>ca</span></h1>
                        </div>
                        <div className='nav-links'>
                            {routes.map(({ path, label }, index) => (
                                <Link key={index} to={path} className='nav-link'>
                                    {label}
                                </Link>))}
                                <MdOutlineShoppingBag  size={30} color='white'/>
                        </div>
                    </nav>
                </div>
        </div>
    )
}

export default Header
