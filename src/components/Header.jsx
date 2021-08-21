import React from 'react';
import '../styles/components/Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className='Header'>
            <Link to='/'>
                <h1 className='Header-title'>PlatciConf Merch</h1>
            </Link>
            <div className="Header-checkout">
                <Link to='/checkout'>
                    <i className="fas fa-shopping-basket" title="Checkout" /> 
                </Link>
                
            </div>
        </header>
    )
}

export default Header
