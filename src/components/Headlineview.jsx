import React, { useEffect, useState } from 'react'
import HeadlineCard from './HeadlineCard'
import { Col, Row } from 'react-bootstrap';


import { displayNewsApi } from '../services/allApi';


function Headlineview() {
  const [newsDetails, setNewsDetails] = useState([])
  const [latestNews,setLatestNews] =useState([])

  const getHeadline=async()=>{
    const result = await displayNewsApi()
    setNewsDetails(result.data)
    setLatestNews(newsDetails.sort((c1,c2)=>c2.id-c1.id).slice(0, 4))
  }

  console.log(latestNews);



  useEffect(()=>{
    getHeadline()
  },[])
  return (
    <>
 
      <h1 className='mt-5 d-flex justify-content-center align-items-center text-danger '>Exclusive News</h1>
        <div className='d-flex justify-content-center align-items-center'>
          <Row className='mt-5'>
            {latestNews?.map((item)=>(
              <Col md={3} className='mb-4 mb-md-0' ><HeadlineCard  /></Col>
            ))}
          </Row>
        </div>
    </>
  )
}

export default Headlineview