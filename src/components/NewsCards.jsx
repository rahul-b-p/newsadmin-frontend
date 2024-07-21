import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import dummy from '../assets/news1.png'

function NewsCards() {
  return (
    <>
      <Card style={{ width: "100% " }} className='p-2 bg-light cardhover border-0 shadow'>
        <Card.Body>
          <h3>Card Title</h3>
          <img src={dummy} alt="" width={"100%"} height={"250px"} />
        </Card.Body>
        <div className='d-flex align-items-center justify-content-center'>
        <Button variant="outline-danger" className='mt-2'>View More</Button>
        </div>
      </Card>
    </>
  )
}

export default NewsCards