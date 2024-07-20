import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import newslogo from '../assets/news1.png'
import { faFacebook, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom'




function Footer() {
  return (
    <div className="row w-100 p-3 text-light" style={{backgroundColor:'darkblue'}}>
    <div className="col-md-4 p-4 ms-md-5">
      
        <img src={newslogo} alt='' width={'100px'} height={'100px'}/>
        <p style={{textAlign:'justify'}}
        className='mt-2'>News apps provide quick access to a variety of information. The ease of scrolling through the news on your smartphone is much better than buying a newspaper and cluttering up your bag or office desk. Furthermore, news apps help to save trees. A mobile application has many advantages for companies that publish news.
        </p>
    </div>

    <div className="col-md-2 p-4 justify-content-center d-md-flex">

        <div>
              <h4>Links</h4>
          
              <p><Link to={'/'}>Home Page</Link></p>
              <p className='mt-4'><Link to={'/dashboard'}>Dashboard page</Link></p> 
            
        </div> 
    </div>
    <div className="col-md-2 p-4">
    <h4> Guides</h4>
    <p className='mt-4'>React</p>
              <p>React Bootstrap</p>
              <p>Bootswatch</p>


    </div>
    <div className="col-md-3 p-4">
      <h4>Contact Us</h4>
      <div className='d-flex mt-4'>
        <input type='text' className='form-contorl rounded' placeholder='Email Id'></input>
        <button className='btn btn-warning ms-3'>SubScribe</button>
      </div>
      <div className='d-flex mt-4 justify-content-between'>
      <FontAwesomeIcon icon={faInstagram} size="2xl" />
      <FontAwesomeIcon icon={faFacebook} size="2xl"  />
      <FontAwesomeIcon icon={faTwitter} size="2xl"  />
      <FontAwesomeIcon icon={faLinkedin} size="2xl" />

      </div>
    </div>
    <div className="footer-bottom  d-flex justify-content-center pt-5" style={{marginTop:'-90px'}}>
        <p className='mt-5'>© 2024 News Management System. All rights reserved.</p>
     
        
      
    </div>  
    <div className='col-md-1'></div>
</div>
  )
}

export default Footer