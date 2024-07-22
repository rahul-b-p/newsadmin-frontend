import React from 'react'
import HeadlineCard from './HeadlineCard'
import { Col, Container, Row } from 'react-bootstrap';
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom';


function Headlineview() {
  return (
    <>
      <div className='container border shadow p-5 '>
        
        <Container className='shadow mt-5 p-4'>
          <Row className=''>
            <Col md={12} className='d-flex justify-content-center align-items-center'>
              <h3><span className='text-danger'>News</span></h3>
              <Link to={'/editor'} className='p-1 rounded shadow btn btn-danger ms-3 ' style={{ width: '30px' }}>
                <FontAwesomeIcon icon={faPlus} />
              </Link>
            </Col>


          </Row>
        </Container>
        <h1 className='mt-5 d-flex justify-content-center align-items-center text-danger '>Exclusive News</h1>
        <div className='d-flex justify-content-center align-items-center'>
          <Row className='mt-5'>
            <Col md={3}><HeadlineCard /></Col>
            <Col md={3}><HeadlineCard /></Col>
            <Col md={3}><HeadlineCard /></Col>
            <Col md={3}><HeadlineCard /></Col>
          </Row>
        </div>
      </div>

    </>
  )
}

export default Headlineview