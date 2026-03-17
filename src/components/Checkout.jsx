import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../components/CartContext";
import { Button, Form, Card, Spinner } from "react-bootstrap";
import { db } from "../service/firebase";
import {
  collection,
  doc,
  getDoc,
  serverTimestamp,
  writeBatch,
} from "firebase/firestore";

const Checkout = () => {
  const { cart, getTotalPrice, clearCart } = useContext(CartContext);

  const [buyer, setBuyer] = useState({
    nombre: "",
    telefono: "",
    email: "",
    confirmarEmail: "",
  });

  const [telefonoError, setTelefonoError] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [orderId, setOrderId] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "telefono") {
      const soloNumeros = value.replace(/\D/g, "");

      setBuyer({
        ...buyer,
        telefono: soloNumeros,
      });

      if (value !== soloNumeros) {
        setTelefonoError("El teléfono solo puede contener números.");
      } else {
        setTelefonoError("");
      }

      return;
    }

    setBuyer({
      ...buyer,
      [name]: value,
    });
  };

  const validarFormulario = () => {
    const nombre = buyer.nombre.trim();
    const telefono = buyer.telefono.trim();
    const email = buyer.email.trim();
    const confirmarEmail = buyer.confirmarEmail.trim();

    if (!nombre || !telefono || !email || !confirmarEmail) {
      return "Completa todos los campos.";
    }

    if (nombre.length < 3) {
      return "El nombre debe tener al menos 3 caracteres.";
    }

    if (!/^[a-zA-ZÀ-ÿ\s]+$/.test(nombre)) {
      return "El nombre solo debe contener letras y espacios.";
    }

    if (!/^[0-9]+$/.test(telefono)) {
      return "El teléfono debe contener solo números.";
    }

    if (telefono.length < 8) {
      return "El teléfono debe tener al menos 8 números.";
    }

    if (telefono.length > 15) {
      return "El teléfono no puede tener más de 15 números.";
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return "Ingresa un email válido.";
    }

    if (email !== confirmarEmail) {
      return "Los correos no coinciden.";
    }

    return "";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const mensajeError = validarFormulario();

    if (mensajeError) {
      setError(mensajeError);
      return;
    }

    if (telefonoError) {
      setError("Revisa el teléfono ingresado.");
      return;
    }

    if (cart.length === 0) {
      setError("No hay productos en el carrito.");
      return;
    }

    setError("");
    setLoading(true);

    try {
      const batch = writeBatch(db);
      const orderRef = doc(collection(db, "orders"));

      const productosValidados = [];

      for (const prod of cart) {
        const productRef = doc(db, "productos", prod.id);
        const productSnap = await getDoc(productRef);

        if (!productSnap.exists()) {
          throw new Error(`El producto "${prod.name}" no existe.`);
        }

        const productData = productSnap.data();
        const currentStock = Number(productData.stock);
        const requestedQuantity = Number(prod.quantity);

        if (Number.isNaN(currentStock)) {
          throw new Error(`El stock de "${prod.name}" no es válido.`);
        }

        if (currentStock < requestedQuantity) {
          throw new Error(`Stock insuficiente para "${prod.name}".`);
        }

        productosValidados.push({
          ref: productRef,
          newStock: currentStock - requestedQuantity,
        });
      }

      const orden = {
        buyer: {
          nombre: buyer.nombre.trim(),
          telefono: buyer.telefono.trim(),
          email: buyer.email.trim(),
        },
        items: cart.map((prod) => ({
          id: prod.id,
          name: prod.name,
          price: prod.price,
          quantity: prod.quantity,
          tipo: prod.tipo,
          img: prod.img,
        })),
        total: getTotalPrice(),
        date: serverTimestamp(),
        status: "activa",
      };

      batch.set(orderRef, orden);

      productosValidados.forEach((prod) => {
        batch.update(prod.ref, {
          stock: prod.newStock,
        });
      });

      await batch.commit();

      setOrderId(orderRef.id);
      clearCart();
    } catch (err) {
      console.log(err);
      setError(err.message || "Hubo un error al generar la orden.");
    } finally {
      setLoading(false);
    }
  };

  if (cart.length === 0 && !orderId) {
    return (
      <div className="text-center mt-5">
        <h2>No hay productos en el carrito</h2>
        <Link to="/" className="btn btn-dark mt-3">
          Ir a comprar
        </Link>
      </div>
    );
  }

  if (orderId) {
    return (
      <div className="text-center mt-5">
        <h2>¡Compra realizada con éxito!</h2>
        <p>Tu número de orden es:</p>
        <p className="fw-bold">{orderId}</p>

        <div className="d-flex justify-content-center gap-2 mt-3">
          <Link to={`/orden?id=${orderId}`} className="btn btn-dark">
            Ver mi orden
          </Link>

          <Link to="/" className="btn btn-outline-dark">
            Volver al inicio
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mt-4 checkout-container">
      <h2 className="text-center mb-4">Checkout</h2>

      <div className="row">
        <div className="col-md-7">
          <Card className="p-4 shadow-sm mb-4">
            <h4 className="mb-3">Datos del comprador</h4>

            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Label>Nombre</Form.Label>
                <Form.Control
                  type="text"
                  name="nombre"
                  value={buyer.nombre}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Teléfono</Form.Label>
                <Form.Control
                  type="tel"
                  name="telefono"
                  value={buyer.telefono}
                  onChange={handleChange}
                />
                {telefonoError && (
                  <Form.Text style={{ color: "red" }}>
                    {telefonoError}
                  </Form.Text>
                )}
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={buyer.email}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Confirmar email</Form.Label>
                <Form.Control
                  type="email"
                  name="confirmarEmail"
                  value={buyer.confirmarEmail}
                  onChange={handleChange}
                />
              </Form.Group>

              {error && <p className="text-danger fw-bold">{error}</p>}

              <Button variant="dark" type="submit" disabled={loading}>
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
                    Generando orden...
                  </>
                ) : (
                  "Confirmar compra"
                )}
              </Button>
            </Form>
          </Card>
        </div>

        <div className="col-md-5">
          <Card className="p-4 shadow-sm">
            <h4 className="mb-3">Resumen de compra</h4>

            {cart.map((prod) => (
              <div key={prod.id} className="mb-3 border-bottom pb-2">
                <p className="mb-1 fw-bold">{prod.name}</p>
                <p className="mb-1">
                  {prod.quantity} {prod.tipo === "peso" ? "kg" : "unidad/es"}
                </p>
                <p className="mb-0">
                  Subtotal: ${(prod.price * prod.quantity).toFixed(2)}
                </p>
              </div>
            ))}

            <h5 className="mt-3">Total: ${getTotalPrice().toFixed(2)}</h5>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Checkout;