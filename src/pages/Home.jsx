
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Headlineview from '../components/Headlineview'
import Videocard from '../components/Videocard'
import Carousel from 'react-bootstrap/Carousel';

function Home() {
  return (
    <>
      <div className='p-0 '>
        <Carousel className='bg-dark' style={{height:'60vh'}}>
          <Carousel.Item style={{position:'relative',height:'60vh'}}>
            <img style={{position:'absolute',width:'100%',height:'60vh'}} src='https://geekerhertz.com/images/5f5f2a32d49b4.jpg'></img>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Item>
          <Carousel.Item>
            <img style={{width:'100%',height:'60vh'}} src='https://www.slashgear.com/wp-content/uploads/2020/03/microsoft_building_main_uns.jpg'></img>
              
          </Carousel.Item>
          <Carousel.Item>
          <img style={{width:'100%',height:'60vh'}} src='https://cdn.wallpapersafari.com/1/72/14W9Zo.jpg'></img>
          </Carousel.Item>
        </Carousel>

      </div>
      <div className='mt-5'><Headlineview /></div>
      <div className='mt-5'><Videocard /></div>

    </>
  )
}

export default Home