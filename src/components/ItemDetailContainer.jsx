import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { db } from "../service/firebase";
import { doc, getDoc } from "firebase/firestore";

const ItemDetailContainer = () => {
  const [detalle, setDetalle] = useState(null);
  const [loading, setLoading] = useState(true);

  const { Id } = useParams();

  useEffect(() => {
    setLoading(true);

    const productoRef = doc(db, "productos", Id);

    getDoc(productoRef)
      .then((res) => {
        if (res.exists()) {
          setDetalle({
            id: res.id,
            ...res.data(),
          });
        } else {
          setDetalle(null);
        }
      })
      .catch((err) => {
        console.log(err);
        setDetalle(null);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [Id]);

  if (loading) {
    return (
      <p style={{ textAlign: "center", marginTop: "2rem" }}>
        Cargando producto...
      </p>
    );
  }

  if (!detalle) {
    return (
      <p style={{ textAlign: "center", marginTop: "2rem" }}>
        Producto no encontrado.
      </p>
    );
  }

  return <ItemDetail detalle={detalle} />;
};

export default ItemDetailContainer;