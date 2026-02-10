import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Item = ({prod}) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={prod.img} />
      <Card.Body>
        <Card.Title className="fw-bold text-center">{prod.name}</Card.Title>
        <Card.Text className="fw-bold text-center" style={{ color: 'orange' }}>
          ${prod.price},00
        </Card.Text>
        <Link className='btn btn-dark d-block mx-auto mt-2' to={`/item/${prod.id}`}>Ver Mas</Link>
      </Card.Body>
    </Card>
  )
}

export default Item
