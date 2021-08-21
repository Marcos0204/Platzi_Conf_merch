import React,{useContext} from 'react';
import '../styles/components/Header.css';
import { Link } from 'react-router-dom';
import AppContext from '../context/AppContext';

const Header = () => {
    const {state : { cart }, } = useContext(AppContext);
   
    return (
        <header className='Header'>
            <Link to='/'>
                <h1 className='Header-title'>PlatciConf Merch</h1>
            </Link>
            <div className="Header-checkout">
                <Link to='/checkout'>
                    <i className="fas fa-shopping-basket" title="Checkout" /> 
                </Link>
                {cart.length > 0 && <div className='Header-alert'>{cart.length}</div> }
                
            </div>
        </header>
    )
}

export default Header
