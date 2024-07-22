import React from 'react'
import Card from 'react-bootstrap/Card';
import cardcss from './HeadlineCard.module.css'



function Newscard() {

    return (
        <>
            <Card className={cardcss.hover} style={{ width: '100%', }}>

                <Card.Body className='text-dark'>
                    <Card.Title >
                        <h2 className='text-center text-danger'>Category</h2>
                    </Card.Title>
                    <div>
                        <Card.Body >
                            <p className='fs-5'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur iste optio hic illum! </p>
                        </Card.Body>

                        <Card.Text className={cardcss.time}>
                            5:30pm
                        </Card.Text>
                    </div>

                </Card.Body>
            </Card>



        </>
    )
}

export default Newscard