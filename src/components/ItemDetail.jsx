const ItemDetail = ({ detalle }) => {
  return (
    <div>
      <h2>{detalle.name}</h2>
      <img src={detalle.img} alt={detalle.name} width={200} />
      <p>{detalle.description}</p>
      <p>Precio: ${detalle.price}</p>
      <p>Stock: {detalle.stock}</p>
    </div>
  )
}

export default ItemDetail
