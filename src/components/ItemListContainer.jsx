import { useState, useEffect } from "react"
import { getProducts } from "../mock/asyncMock"
import ItemList from "./ItemList"

const ItemListContainer = ({ mensaje }) => {
  const [data, setData] = useState([])

  useEffect(() => {
    getProducts()
      .then(res => setData(res))
      .catch(err => console.log(err))
  }, [])

  return (
    <div>
      <h1>{mensaje}</h1>
      <ItemList data={data} />
    </div>
  )
}

export default ItemListContainer