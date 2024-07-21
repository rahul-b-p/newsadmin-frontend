import React from 'react'
import Card from 'react-bootstrap/Card';
import cardcss from './HeadlineCard.module.css'


function Newscard() {
    return (
        <>
            <Card className={cardcss.hover} style={{ width: '18rem', }}>

                <Card.Body className='text-dark'>
                    <Card.Title className={cardcss.title}>Category</Card.Title>
                    <div>
                        <Card.Title className={cardcss.subtitle}> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis, laborum! </Card.Title>

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