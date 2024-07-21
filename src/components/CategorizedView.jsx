import React, { useState, useEffect } from 'react'
import NewsCards from './NewsCards';
import { displayNewsApi } from '../services/allApi';
import { Col, Row } from 'react-bootstrap';


function CategorizedView() {
    const [isSelected, setIsSelected] = useState("all")
    // newsdata 
    const [newsDetails, setNews] = useState([])

    const handlebutton = (category) => {
        setIsSelected(category)
    }


    // function to get news
    const getNews = async () => {
        const result = await displayNewsApi()
        setNews(result.data)
    }
    console.log(newsDetails);

    useEffect(() => {
        getNews()
    }, handlebutton)

    return (
        <>
            <div className='row container-fluid d-flex w-100'>
                <div className="col">
                    <button onClick={() => handlebutton('all')} style={{ backgroundColor: isSelected == 'all' ? 'ButtonShadow' : 'transparent' }} className=' animated-button me-5 rounded-pill' >All</button>
                    <button onClick={() => handlebutton('politics')} style={{ backgroundColor: isSelected == 'politics' ? 'ButtonShadow' : 'transparent' }} className=' animated-button me-4 rounded-pill' >Politics </button>
                    <button onClick={() => handlebutton('education')} style={{ backgroundColor: isSelected == 'education' ? 'ButtonShadow' : 'transparent' }} className=' animated-button me-4 rounded-pill' >Education </button>
                    <button onClick={() => handlebutton('sports')} style={{ backgroundColor: isSelected == 'sports' ? 'ButtonShadow' : 'transparent' }} className=' animated-button me-4 rounded-pill'>Sports </button>
                    <button onClick={() => handlebutton('business')} style={{ backgroundColor: isSelected == 'business' ? 'ButtonShadow' : 'transparent' }} className=' animated-button  me-4 rounded-pill' >Bussiness </button>
                    <button onClick={() => handlebutton('local')} style={{ backgroundColor: isSelected == 'local' ? 'ButtonShadow' : 'transparent' }} className=' animated-button me-4 rounded-pill' >Local Edition</button>
                </div>
            </div>



            {newsDetails?.length > 0 ?
                <Row className=" w-100 mt-3 mb-2  p-4 ">
                    {isSelected=='all'?
                        newsDetails.map((item) => (
                        <Col xs={12} md={6} lg={4}  className='mb-5' >
                            <NewsCards news={item} />
                        </Col>
                        ))
                        :
                        newsDetails.map((item) => ( 
                        item.category==isSelected &&
                        <Col xs={12} md={6} lg={4}  className='mb-5' >
                            <NewsCards news={item} />
                        </Col>
                    ))}
                </Row>
                :
                <p className='text-center text-danger fw-bold'>No news to display</p>
            }



        </>
    )
}

export default CategorizedView