
import React from 'react'
import { Card, Button } from 'react-bootstrap'
import pic from '../assets/download.jfif'

const Department = (props) => {
  return (
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={pic}/>
    <Card.Body>
      <Card.Title>{props.dept.dep_name}</Card.Title>
      <Card.Text>
        {props.dept.team_id}        
      </Card.Text>
      <Button variant="primary">Go somewhere</Button>
    </Card.Body>
  </Card>
  )
}

export default Department