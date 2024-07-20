import React from 'react'
import { Col, Row } from 'react-bootstrap'

function Videocard() {
  return (
    <div style={{backgroundColor:'rgb(241, 241, 243)'}}>
 
    <div className='container py-5'>
      <h3>Youtube</h3>
     <Row >
        <Col md={3}><iframe className='p-3' width="303" height="420" src="https://www.youtube.com/embed/TLEz9eiSc5s" title="India’s Strong and Clear Message to China at Defence Ministers’ Meet" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></Col>
        <Col md={3}><iframe className='p-3' width="303" height="420" src="https://www.youtube.com/embed/S9Pv7QTRljQ" title="Footage captures waterspout ripping through crowded beach #Shorts" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></Col>
        <Col md={3}><iframe className='p-3' width="303" height="420" src="https://www.youtube.com/embed/_NGYXypCgrc" title="Israel Just Ordered 1.1 Million People in Gaza to Leave Their Homes in 24 Hours #news #palestine" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></Col>
        <Col md={3}><iframe className='p-3' width="303" height="420" src="https://www.youtube.com/embed/nyYDv--CqTA" title="California cliff collapses, and then the video gets even wilder | #shorts #newvideo #subscribe" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></Col>
     </Row>
    </div>
    </div>
  )
}

export default Videocard