import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function CategorizedView() {

    return (
        <>
            <div className='container-fluid row  d-flex w-100'>
                <div className="col">
                    <button className=' animated-button me-5' >All</button>
                    <button className=' animated-button me-4' >Politics </button>
                    <button className=' animated-button me-4' >Education </button>
                    <button className=' animated-button me-4'>Sports </button>
                    <button className=' animated-button  me-4' >Bussiness </button>
                    <button className=' animated-button me-4' >Local Edition</button>
                </div>
            </div>



            <div className="row w-100 mt-3 mb-2 d-flex justify-content-center align-items-center p-4 ">

            <Card style={{ width: "100% " }} className='p-2'>
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text className='mt-3'>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Button variant="danger" className='mt-2'>View More</Button>
                        </Card.Body>
                    </Card>



                <div className="col-md-4 p-4 d-flex justify-content-center align-items-center">
                    <Card style={{ width: "100% " }} className='p-2'>
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text className='mt-3'>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Button variant="danger" className='mt-2'>View More</Button>
                        </Card.Body>
                    </Card></div>

                <div className="col-md-4 p-4 d-flex justify-content-center align-items-center">
                    <Card style={{ width: "100%  " }} className='p-2 '>

                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text className='mt-3'>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Button variant="danger" className='mt-2'>View More</Button>
                        </Card.Body>
                    </Card>
                </div>

                <div className="col-md-4 p-4 d-flex justify-content-center align-items-center">
                    <Card style={{ width: "100%  " }} className='p-2 '>

                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text className='mt-3'>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Button variant="danger" className='mt-2'>View More</Button>
                        </Card.Body>
                    </Card>
                </div>



            </div>



        </>
    )
}

export default CategorizedView