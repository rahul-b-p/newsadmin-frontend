import React from 'react'
import Newscard from './Newscard'
import { Col, Container, Row } from 'react-bootstrap';
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function Headlineview() {
  return (
    <>
      <div className='container border shadow p-5 '>
        <h1 className='d-flex justify-content-center align-items-center text-danger '>Exclusive News</h1>

        <div className='d-flex justify-content-center align-items-center'>
          <Row className='mt-5'>
            <Col md={3}><Newscard /></Col>
            <Col md={3}><Newscard /></Col>
            <Col md={3}><Newscard /></Col>
            <Col md={3}><Newscard /></Col>
          </Row>
        </div>
      </div>
      <Container className='shadow mt-5 p-4'>
        <Row className=''>
          <Col md={12} className='d-flex justify-content-center align-items-center'>
            <h3><span className='text-danger'>News</span></h3>
            <button className='p-1 rounded shadow btn btn-danger ms-3 ' style={{ width: '30px' }}>
              <FontAwesomeIcon icon={faPlus} />
            </button>
          </Col>


        </Row>
      </Container>
    </>
  )
}

export default Headlineview