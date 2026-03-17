import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { db } from "../service/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";

const ItemListContainer = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const { categoriaId } = useParams();

  const denormalizeCategory = (slug) => {
    const categoriasMap = {
      "verduras-de-hoja": "Verduras de Hoja",
      "hortalizas": "Hortalizas",
      "frutas": "Frutas",
      "citricos": "Citricos",
    };

    return categoriasMap[slug] || "";
  };

  useEffect(() => {
    setLoading(true);

    const productosRef = collection(db, "productos");

    const consulta = categoriaId
      ? query(productosRef, where("category", "==", denormalizeCategory(categoriaId)))
      : productosRef;

    getDocs(consulta)
      .then((res) => {
        const productos = res.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setData(productos);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [categoriaId]);

  if (loading) {
    return <p style={{ textAlign: "center", marginTop: "2rem" }}>Cargando productos...</p>;
  }

  return (
    <div className="item-list-container">
      <ItemList data={data} />
    </div>
  );
};

export default ItemListContainer;