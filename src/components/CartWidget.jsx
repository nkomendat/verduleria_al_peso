import React from 'react';
import { IoCartOutline } from "react-icons/io5";
import '../App.css';

const CartWidget = () => {
  return (
    <div className="nav-item">
      <IoCartOutline className="nav-icon" />
      <span className="nav-label">Carrito</span>
    </div>
  );
};

export default CartWidget;
