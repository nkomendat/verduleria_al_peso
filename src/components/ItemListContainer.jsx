import { useState, useEffect } from "react";
import { getProducts } from "../mock/asyncMock";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = ({ mensaje }) => {
  const [data, setData] = useState([]);

  const { categoriaId } = useParams();

  const normalize = (str) =>
    str.toLowerCase().replace(/\s+/g, "-");

  useEffect(() => {
    getProducts()
      .then((res) => {
        if (categoriaId) {
          const filtrados = res.filter(
            (prod) => normalize(prod.category) === categoriaId
          );
          setData(filtrados);
        } else {
          setData(res);
        }
      })
      .catch((err) => console.log(err));
  }, [categoriaId]);

  return (
    <div className="item-list-container">
      <ItemList data={data} />
    </div>
  );
};

export default ItemListContainer;