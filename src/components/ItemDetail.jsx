import React, { useContext, useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import ItemCount from './ItemCount';
import { GoArrowLeft } from 'react-icons/go';
import { useNavigate, Link } from 'react-router-dom';
import { CartContext } from '../components/CartContext';

const ItemDetail = ({ detalle }) => {
  const navigate = useNavigate();
  const { addItem } = useContext(CartContext);
  const [agregado, setAgregado] = useState(false);

  if (!detalle || !detalle.name) {
    return <p style={{ textAlign: 'center' }}>Cargando producto...</p>;
  }

  const onAdd = (cantidad) => {
    if (cantidad > 0) {
      addItem(detalle, cantidad);
      setAgregado(true);
    }
  };

  return (
    <div>
      <Card className="item-detail-card">
        <GoArrowLeft className="go-back-icon" onClick={() => navigate(-1)} />
        <Card.Img variant="top" src={detalle.img} />
        <Card.Body>
          <Card.Title className="fw-bold text-center">{detalle.name}</Card.Title>

          <Card.Text className="fw-bold text-center item-price">
            ${detalle.price} x {detalle.tipo === "peso" ? "kg" : "unidad"}
          </Card.Text>

          {!agregado ? (
            <ItemCount
              stock={detalle.stock || 10}
              initial={detalle.tipo === "peso" ? 0.1 : 1}
              tipo={detalle.tipo}
              onAdd={onAdd}
            />
          ) : (
            <div className="text-center mt-3">
              <p className="fw-bold">Producto agregado</p>

              <div className="d-flex justify-content-center gap-2">
                <Link to="/carrito" className="btn btn-dark">
                  Ir al carrito
                </Link>

                <Button variant="outline-dark" onClick={() => navigate('/')}>
                  Seguir comprando
                </Button>
              </div>
            </div>
          )}
        </Card.Body>
      </Card>
    </div>
  );
};

export default ItemDetail;