import React, { useState } from 'react';
import '../App.css';

const ItemCount = ({ stock, initial = 0, onAdd }) => {
  const [cantidad, setCantidad] = useState(initial);
  const sumar = () => {
    if (cantidad < stock) setCantidad(cantidad + 1);
  };
  const restar = () => {
    if (cantidad > 0) setCantidad(cantidad - 1);
  };
  return (
    <div className="item-count-container">
      <div className="item-count-buttons">
        <button
          onClick={restar}
          className="item-count-button item-count-button-left"
        >
          –
        </button>
        <span className="item-count-quantity">{cantidad}</span>
        <button
          onClick={sumar}
          className="item-count-button item-count-button-right"
        >
          +
        </button>
      </div>
    </div>
  );
};

export default ItemCount;
