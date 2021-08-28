import React,{useContext} from 'react';
import { Link, useLocation } from 'react-router-dom';
import AppContext from '../context/AppContext'
import '../styles/components/Checkout.css';

const Checkout = () => {
  const {pathname} =useLocation()
  const {state: {cart}, removeFromCart} = useContext(AppContext);
  
  
  const hanledRemove = product =>{
    removeFromCart(product);
  }

  const handleSumTotal = () => {
    const reducer = (accumulator, currentValue) => accumulator + currentValue.price;
    const sum = cart.reduce(reducer, 0);
    return sum;
  }

  return (
    <div className="Checkout">
      <div className="Checkout-content">
        <h3>{cart.length > 0 ? 'Lista de Pedidos:' : 'No hay pedidos...'}</h3>

        {cart.map((item, index) =>(
          <div className="Checkout-item" key={index}>
            <div className="Checkout-element">
              <h4>{item.title}</h4>
              <span>{item.price} </span>
            </div>
            <button type="button" onClick={()=> hanledRemove(item)}>
              <i className="fas fa-trash-alt" title="Eliminar" />
            </button>
          </div>
        ))}
        
      </div>
      {cart.length > 0 && (
        <div className="Checkout-sidebar">
          <h3>{`Precio Total: $ ${handleSumTotal()}`}</h3>
          <Link to={`${pathname}/information`} >
            <button type="button">Continuar pedido</button>
          </Link>
        </div>
      )}
      
    </div>
  );
};

export default Checkout;
