import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { getItem } from "../mock/asyncMock"
import ItemDetail from "./ItemDetail"

const ItemDetailContainer = () => {
  const [detalle, setDetalle] = useState({})
  const { Id } = useParams()

  useEffect(() => {
    getItem(Id)
      .then(res => setDetalle(res))
      .catch(error => console.log(error))
  }, [Id])

  return (
    <div>
      <ItemDetail detalle={detalle} />
    </div>
  )
}

export default ItemDetailContainer