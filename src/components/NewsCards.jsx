import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function NewsCards({ news }) {

  return (
    <>
      <Card style={{ width: "100% ", height: "430px" }} className='p-3 bg-light cardhover border-1 shadow'>
        <div className='h-100' >
          <div className='h-25'><h5 className='my-auto'>{news.headline}</h5></div>
          <img src={`${news.image}`} alt="image not loaded" width={"100%"} height={"250px"}  />
          <div  className='d-flex align-items-center justify-content-center'>
            <Button variant="outline-danger" className='mt-2'>View More</Button>
          </div>
        </div>
      </Card>
    </>
  )
}

export default NewsCards