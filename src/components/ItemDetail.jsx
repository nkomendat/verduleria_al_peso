import React from 'react';
import { Card } from 'react-bootstrap';
import ItemCount from './ItemCount';
import { GoArrowLeft } from 'react-icons/go';
import { useNavigate } from 'react-router-dom';

const ItemDetail = ({ detalle }) => {
  const navigate = useNavigate();
  if (!detalle || !detalle.name) {
    return <p style={{ textAlign: 'center' }}>Cargando producto...</p>;
  }
  return (
    <div>
        <Card className="item-detail-card">
        <GoArrowLeft className="go-back-icon" onClick={() => navigate(-1)} />
        <Card.Img variant="top" src={detalle.img} />
        <Card.Body>
            <Card.Title className="fw-bold text-center">{detalle.name}</Card.Title>
            <Card.Text className="fw-bold text-center item-price">
            ${detalle.price} x {detalle.unit}
            </Card.Text>
            <ItemCount
              stock={detalle.stock || 10}
              initial={detalle.tipo === "peso" ? 0.1 : 1}
              tipo={detalle.tipo}
              onAdd={(cant) => console.log(`Agregado: ${cant}`)}
            />
        </Card.Body>
        </Card>
    </div>
  );
};

export default ItemDetail;