import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';

function NewsCards({ news }) {
  const navigate = useNavigate()

  const handleViewMore=()=>{
    navigate('/newsview')
  }

  return (
    <>
      <Card style={{ width: "100% ", height: "430px" }} className='p-3 bg-light cardhover border-1 shadow'>
        <div className='h-100' >
          <div className='h-25'>
            <div style={{fontSize:'9px'}} className='d-flex'>
              <p className='text-primary' >{news.category}</p>
              <p className='ms-auto'>{news.timestamp}</p>
            </div>
            <h6 className='my-auto fw-bolder'>{news.headline}</h6>
            </div>
          <img src={`${news.image}`} alt="image not loaded" width={"100%"} height={"230px"}  />
          <div  className='d-flex align-items-center justify-content-center'>
            <Button onClick={handleViewMore} variant="outline-danger" className='mt-2'>View More</Button>
          </div>
        </div>
      </Card>
    </>
  )
}

export default NewsCards