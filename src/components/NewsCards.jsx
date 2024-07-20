import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function NewsCards() {
  return (
    <>
      <div className="row w-100 mt-3 mb-2 d-flex justify-content-center align-items-center p-4 ">

        <div className="col-md-4 d-flex p-4  justify-content-center align-items-center">
          <Card style={{ width: "100% " }} className='p-2 shadow'>
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text className='mt-3'>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Button variant="danger" className='mt-2'>View More</Button>
            </Card.Body>
          </Card>
          </div>
      </div>

    </>
  )
}

export default NewsCards