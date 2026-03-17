import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { db } from "../service/firebase";
import {
  doc,
  getDoc,
  runTransaction,
  serverTimestamp,
} from "firebase/firestore";
import { Button, Form, Card, Spinner, Modal } from "react-bootstrap";

const OrderLookup = () => {
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);
  const orderIdFromURL = queryParams.get("id");

  const [orderId, setOrderId] = useState("");
  const [order, setOrder] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [cancelLoading, setCancelLoading] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const buscarOrden = async (id) => {
    setError("");
    setLoading(true);
    setOrder(null);
    setSuccessMessage("");

    try {
      const docRef = doc(db, "orders", id);
      const res = await getDoc(docRef);

      if (res.exists()) {
        setOrder({
          id: res.id,
          ...res.data(),
        });
      } else {
        setError("No se encontró ninguna orden con ese ID.");
      }
    } catch (err) {
      console.log(err);
      setError("Error al buscar la orden.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (orderIdFromURL) {
      setOrderId(orderIdFromURL);
      buscarOrden(orderIdFromURL);
    }
  }, [orderIdFromURL]);

  const handleSearch = (e) => {
    e.preventDefault();

    if (!orderId.trim()) {
      setError("Ingresa un ID de orden.");
      return;
    }

    buscarOrden(orderId.trim());
  };

  const handleCancelOrder = async () => {
    if (!order) return;

    setCancelLoading(true);
    setError("");
    setSuccessMessage("");

    try {
      const orderRef = doc(db, "orders", order.id);

      await runTransaction(db, async (transaction) => {
        const orderSnap = await transaction.get(orderRef);

        if (!orderSnap.exists()) {
          throw new Error("La orden no existe.");
        }

        const currentOrder = orderSnap.data();

        if (currentOrder.status === "cancelada") {
          throw new Error("La orden ya fue cancelada.");
        }

        for (const prod of currentOrder.items) {
          const productRef = doc(db, "productos", prod.id);
          const productSnap = await transaction.get(productRef);

          if (!productSnap.exists()) {
            continue;
          }

          const currentStock = Number(productSnap.data().stock);
          const restoredStock = currentStock + Number(prod.quantity);

          transaction.update(productRef, {
            stock: restoredStock,
          });
        }

        transaction.update(orderRef, {
          status: "cancelada",
          canceledAt: serverTimestamp(),
        });
      });

      const updatedOrderSnap = await getDoc(orderRef);

      if (updatedOrderSnap.exists()) {
        setOrder({
          id: updatedOrderSnap.id,
          ...updatedOrderSnap.data(),
        });
      }

      setSuccessMessage(
        "La orden fue cancelada y el stock fue recompuesto correctamente."
      );
      setShowConfirm(false);
    } catch (err) {
      console.log(err);
      setError(err.message || "Hubo un error al cancelar la orden.");
    } finally {
      setCancelLoading(false);
    }
  };

  return (
    <div className="container mt-4 checkout-container">
      <h2 className="text-center mb-4">Consultar orden</h2>

      <Form onSubmit={handleSearch} className="mb-4 text-center">
        <Form.Control
          type="text"
          placeholder="Ingresa el ID de la orden"
          value={orderId}
          onChange={(e) => setOrderId(e.target.value)}
          style={{ maxWidth: "400px", margin: "0 auto" }}
        />

        <Button className="mt-3" variant="dark" type="submit" disabled={loading}>
          {loading ? (
            <>
              <Spinner
                as="span"
                animation="border"
                size="sm"
                role="status"
                aria-hidden="true"
                className="me-2"
              />
              Buscando...
            </>
          ) : (
            "Buscar"
          )}
        </Button>
      </Form>

      {error && <p className="text-danger text-center fw-bold">{error}</p>}
      {successMessage && (
        <p className="text-success text-center fw-bold">{successMessage}</p>
      )}

      {order && (
        <Card className="p-4 shadow-sm">
          <h4 className="mb-3">Detalle de la orden</h4>

          <p><strong>Estado:</strong> {order.status || "activa"}</p>
          <p><strong>Nombre:</strong> {order.buyer.nombre}</p>
          <p><strong>Teléfono:</strong> {order.buyer.telefono}</p>
          <p><strong>Email:</strong> {order.buyer.email}</p>

          {order.date?.toDate && (
            <p>
              <strong>Fecha de compra:</strong>{" "}
              {order.date.toDate().toLocaleString()}
            </p>
          )}

          {order.canceledAt?.toDate && (
            <p>
              <strong>Fecha de cancelación:</strong>{" "}
              {order.canceledAt.toDate().toLocaleString()}
            </p>
          )}

          <hr />

          <h5 className="mb-3">Productos:</h5>

          {order.items.map((prod, index) => (
            <div
              key={index}
              className="d-flex align-items-center gap-3 mb-3 border-bottom pb-3"
            >
              {prod.img && (
                <img
                  src={prod.img}
                  alt={prod.name}
                  style={{
                    width: "80px",
                    height: "80px",
                    objectFit: "cover",
                    borderRadius: "8px",
                  }}
                />
              )}

              <div>
                <p className="mb-1 fw-bold">{prod.name}</p>
                <p className="mb-1">
                  {prod.quantity} {prod.tipo === "peso" ? "kg" : "unidad/es"}
                </p>
                <p className="mb-0">
                  Subtotal: ${(prod.price * prod.quantity).toFixed(2)}
                </p>
              </div>
            </div>
          ))}

          <hr />

          <h5>Total: ${order.total.toFixed(2)}</h5>

          {(order.status === "activa" || !order.status) && (
            <div className="mt-4 text-center">
              <Button
                variant="danger"
                onClick={() => setShowConfirm(true)}
                disabled={cancelLoading}
              >
                {cancelLoading ? (
                  <>
                    <Spinner
                      as="span"
                      animation="border"
                      size="sm"
                      role="status"
                      aria-hidden="true"
                      className="me-2"
                    />
                    Cancelando...
                  </>
                ) : (
                  "Boton de Arrepentimiento"
                )}
              </Button>
            </div>
          )}

          {order.status === "cancelada" && (
            <p className="text-danger fw-bold text-center mt-4">
              Esta orden fue cancelada.
            </p>
          )}
        </Card>
      )}

      <Modal show={showConfirm} onHide={() => setShowConfirm(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Confirmar cancelación</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          ¿Estás seguro de que quieres arrepentirte de esta compra?
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowConfirm(false)}>
            Volver
          </Button>

          <Button variant="danger" onClick={handleCancelOrder} disabled={cancelLoading}>
            {cancelLoading ? "Procesando..." : "Sí, cancelar compra"}
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default OrderLookup;