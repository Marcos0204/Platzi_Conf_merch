import React from 'react';
import '../styles/components/Checkout.css';
import { Link, useLocation } from 'react-router-dom';

const Checkout = () => {
  const {pathname} =useLocation()
  return (
    <div className="Checkout">
      <div className="Checkout-content">
        <h3>Lista de Pedidos:</h3>
        <div className="Checkout-item">
          <div className="Checkout-element">
            <h4>ITEM name</h4>
            <span>$10</span>
          </div>
          <button type="button">
            <i className="fas fa-trash-alt" title="Eliminar" />
          </button>
        </div>
      </div>
      <div className="Checkout-sidebar">
        <h3>Precio Total: $10</h3>
        <Link to={`${pathname}/information`} >
          <button type="button">Continuar pedido</button>
        </Link>
      </div>
    </div>
  );
};

export default Checkout;
