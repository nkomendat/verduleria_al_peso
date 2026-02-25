import React, { useState } from 'react';
import '../App.css';

const ItemCount = ({ stock, initial = 0, tipo }) => {
  const [cantidad, setCantidad] = useState(initial);

  const step = tipo === "peso" ? 0.1 : 1;

  const sumar = () => {
    if (cantidad + step <= stock) {
      const nuevaCantidad = Math.round((cantidad + step) * 10) / 10;
      setCantidad(nuevaCantidad);
    }
  };

  const restar = () => {
    if (cantidad - step >= 0) {
      const nuevaCantidad = Math.round((cantidad - step) * 10) / 10;
      setCantidad(nuevaCantidad);
    }
  };

  return (
    <div className="item-count-container">
      <div className="item-count-buttons">
        <button onClick={restar} className="item-count-button">
          –
        </button>

        <span className="item-count-quantity">
          {cantidad}
        </span>

        <button onClick={sumar} className="item-count-button">
          +
        </button>
      </div>
    </div>
  );
};

export default ItemCount;