import React, { useState } from 'react'

import NewsCards from './NewsCards';


function CategorizedView() {
    const [isSelected, setIsSelected] = useState("all")

    const handlebutton = (category) => {
        setIsSelected(category)
    }

    return (
        <>
            <div className='row container-fluid d-flex w-100'>
                <div className="col">
                    <button onClick={() => handlebutton('all')} style={{ backgroundColor: isSelected == 'all' ? 'ButtonShadow' : 'transparent' }} className=' animated-button me-5 rounded-pill' >All</button>
                    <button onClick={() => handlebutton('politics')} style={{ backgroundColor: isSelected == 'politics' ? 'ButtonShadow' : 'transparent' }} className=' animated-button me-4 rounded-pill' >Politics </button>
                    <button onClick={() => handlebutton('education')} style={{ backgroundColor: isSelected == 'education' ? 'ButtonShadow' : 'transparent' }} className=' animated-button me-4 rounded-pill' >Education </button>
                    <button onClick={() => handlebutton('sports')} style={{ backgroundColor: isSelected == 'sports' ? 'ButtonShadow' : 'transparent' }} className=' animated-button me-4 rounded-pill'>Sports </button>
                    <button onClick={() => handlebutton('bussiess')} style={{ backgroundColor: isSelected == 'bussiess' ? 'ButtonShadow' : 'transparent' }} className=' animated-button  me-4 rounded-pill' >Bussiness </button>
                    <button onClick={() => handlebutton('local')} style={{ backgroundColor: isSelected == 'local' ? 'ButtonShadow' : 'transparent' }} className=' animated-button me-4 rounded-pill' >Local Edition</button>
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
                    <Card style={{ width: "100% " }} className='p-2 shadow'>
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
                    <Card style={{ width: "100%  " }} className='p-2 shadow'>

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
                    <Card style={{ width: "100%  " }} className='p-2 shadow'>

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