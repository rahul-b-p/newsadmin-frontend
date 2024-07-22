
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Headlineview from '../components/Headlineview'
import Videocard from '../components/Videocard'
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Home() {
  return (
    <>
      <div className='p-0 '>
        <Carousel className='bg-dark' style={{ height: '90vh' }}>
          <Carousel.Item style={{ position: 'relative', height: '90vh' }}>
            <img style={{ position: 'absolute', width: '100%', height: '90vh' }} src='https://images.moneycontrol.com/static-mcnews/2024/01/Budget-Agritculture-Sector-770x433.jpg?impolicy=website&width=770&height=431https://pbs.twimg.com/media/GRZLUBfXoAANVC9.jpg:large'></img>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Item>
          <Carousel.Item>
            <img style={{ width: '100%', height: '90vh' }} src='https://pbs.twimg.com/media/GRZLUBfXoAANVC9.jpg:large'></img>

          </Carousel.Item>
          <Carousel.Item>
            <img style={{ width: '100%', height: '90vh' }} src='https://i.ytimg.com/vi/gqSrBDwn-HY/maxresdefault.jpg'></img>
          </Carousel.Item>
        </Carousel>

      </div>
      <div className='mt-5'>
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

          <Headlineview />

        </div>
      </div>
      <div className='mt-5'><Videocard /></div>
    </>
  )
}

export default Home