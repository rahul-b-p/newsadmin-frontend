import React from 'react'
import Card from 'react-bootstrap/Card';


function DetailedNewsView() {

  return (
    <>

      <div className='mt-3'>
        <div className="row">
          <div className="col-md-2 mt-2 d-flex align-items-center flex-column ">
            <div className='mb-5 mx-3'>
              <Card style={{ width: "100% " }} >
                <Card.Body className='d-flex align-items-center justify-content-center flex-column'>
                  <Card.Text >
                  <a href='https://www.luminartechnolab.com/' target="_blank">
                  <img className = 'rounded'  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1KLWaXMkGakf1jua2W2Zhw26LHBdtnR_NV449MCebS3N6vbqPFLE5PuEQ7XtsrBHYG-Y&usqp=CAU" alt="no image" style={{ width: '200px', height: '500px' }}  />
                 </a>
                  </Card.Text>
                  
                </Card.Body>
              </Card>
            </div>

          

          </div>
          <div className="col-md-8 mt-2 px-5 d-flex align-items-center justify-content-center flex-column">
            <h2 className='text-center'>
              NEET UG 2024 Hearing Live: NTA had a systemic failure, argues advocate for petitioners in Supreme Court
            </h2>

            <div className='d-flex justify-content-center align-items-center flex-column'>
             
               <img className = 'rounded' style={{ width: '400px', height: '300px' }} src="https://images.news18.com/ibnlive/uploads/2024/06/neet-row-2-2024-06-13692ad39b4da773d4a49a9c964b9050-2024-06-529cad65d683fe0d517cc4e5a3ff1e46.jpeg?impolicy=website" alt="no image" />
             
             
            </div>
            <p style={{ textAlign: 'justify' }}>
              <span className='mt-1 fst-italic fw-bold fst-italic'>July 18, 2024 3:26 PM IST</span> <br />
              <span className='fw-bold'>New Delhi</span>: Supreme Court, during the hearing of NEET UG re-examination and result cancellation pleas, was informed that the NTA had a systemic failure while conducting the test. On the NEET question paper getting leaked on social media platforms such as Telegram, the Chief Justice of India commented that it should be kept in mind that the idea of someone doing this is not to make a national charade of NEET but for money. <br /> <br />

              Ahead of today's hearing, the National Testing Agency (NTA), which conducts the test, submitted that there was no systemic failure in the conduct of the exam. “The allegations of the petitioners that there has been a systemic failure as candidates have obtained unprecedented higher marks only in the top range of mark interval are misconceived and thus denied,” it said.<br /> <br />

              On allegations that the integrity has been compromised, the NTA said it was premature and based on unverified sources. <br /><br />

              “It is submitted that the courts cannot take cognisance of media reports, which are unsubstantiated and misleading. Furthermore, the media reports are contradictory and falsified with the material placed by the petitioners themselves,” the NTA said.<br /> <br />

              The bench, also comprising of justices J B Pardiwala and Manoj Misra would hear more than 40 pleas, including those filed by the NTA seeking transfer of cases pending against it in various high courts on the NEET-UG row to the Supreme Court to avoid multiplicity of litigations.<br /> <br />

              The apex court had adjourned the hearing in the case on July 11 citing that some parties were yet to receive the responses by the Centre and the NTA.<br /><br />

              The bench had informed that it had received the status report from the Central Bureau of Investigation (CBI) concerning the investigation into the alleged paper leak case, which would be considered on the next date.
            </p>

            <div>
              <button className='btn btn-primary'> Deactivate </button>
              <button className='btn btn-warning ms-3'> Edit </button>
              <button className='btn btn-danger ms-3'> Delete </button>
            </div>

          </div>
          
          <div className="col-md-2  mt-2 d-flex align-items-center flex-column">
            
          <div className='mb-5 mx-3'>
              <Card style={{ width: "100% " }} >
                <Card.Body className='d-flex align-items-center justify-content-center flex-column'>
                  <Card.Text >
                  <a href='https://www.luminartechnolab.com/' target="_blank">
                 <iframe width="200" height="500" src="https://www.youtube.com/embed/2sofDNM4Ymo?playlist=2sofDNM4Ymo&autoplay=1&mute=1&loop=1" title="Luminar Technolab, Data Science,  Big Data Analytics, Python, Software Testing &amp; MEAN Stack Training" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                 </a>
                  </Card.Text>                  
                </Card.Body>
              </Card>
            </div>

          </div>

        </div>
      </div>

    </>


  )
}

export default DetailedNewsView