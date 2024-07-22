import React from 'react'
import NewsCards from '../components/NewsCards'
import { Col, Row } from 'react-bootstrap'

function Deactivated() {
  return (
    <>
      <h1 className='mt-5' style={{ marginLeft: "60px" }}>Deactive <span className='text-danger fw-bolder'>News</span>   </h1>

      <Row className='mt-5 p-4 w-100'>
        <Col xs={12} md={6} lg={4}>
          <div className='w-100 border p-2 mb-5 rounded' style={{backgroundColor:'lightgray'}}>
            {/* <NewsCards/> */}
            <div className='d-flex justify-content-between p-2'>
              <button className='btn btn-success' >Activate</button>
              <button className='btn btn-danger'>Delete</button>
            </div>
          </div>
        </Col>
        
      </Row>

    </>
  )
}

export default Deactivated