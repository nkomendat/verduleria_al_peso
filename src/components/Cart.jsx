import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../components/CartContext";
import { Button, Card } from "react-bootstrap";

const Cart = () => {
  const { cart, removeItem, clearCart, getTotalPrice } = useContext(CartContext);

  if (cart.length === 0) {
    return (
      <div className="text-center mt-5">
        <h2>Tu carrito está vacío</h2>
        <Link to="/" className="btn btn-dark mt-3">
          Ir a comprar
        </Link>
      </div>
    );
  }

  return (
    <div className="container mt-4 cart-container">
      <h2 className="text-center mb-4">Carrito</h2>

      {cart.map((prod) => (
        <Card key={prod.id} className="mb-3 shadow-sm">
          <Card.Body className="d-flex align-items-center justify-content-between flex-wrap gap-3">
            <img
              src={prod.img}
              alt={prod.name}
              style={{
                width: "90px",
                height: "90px",
                objectFit: "cover",
                borderRadius: "8px"
              }}
            />

            <div style={{ flex: 1 }}>
              <h5 className="mb-1">{prod.name}</h5>

              <p className="mb-1">
                Cantidad: {prod.quantity} {prod.tipo === "peso" ? "kg" : "unidad/es"}
              </p>

              <p className="mb-1">
                Precio unitario: ${prod.price}
              </p>

              <p className="fw-bold mb-0">
                Subtotal: ${(prod.price * prod.quantity).toFixed(2)}
              </p>
            </div>

            <div>
              <Button
                variant="danger"
                onClick={() => removeItem(prod.id)}
              >
                Eliminar
              </Button>
            </div>
          </Card.Body>
        </Card>
      ))}

      <div className="text-end mt-4">
        <h4>Total: ${getTotalPrice().toFixed(2)}</h4>

        <div className="d-flex justify-content-end gap-2 mt-3">
          <Button variant="outline-danger" onClick={clearCart}>
            Vaciar carrito
          </Button>

          <Button variant="dark" disabled>
            Finalizar compra
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Cart;