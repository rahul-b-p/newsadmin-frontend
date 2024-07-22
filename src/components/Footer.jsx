import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { LinearGradient } from 'react-text-gradients';
import newslogo from '../assets/pic3.png';
import '../App.css'


function Footer() {
  const handleMouseEnter = (e) => {
    e.target.style.color = 'red';
    e.target.style.cursor = 'pointer';
  };

  const handleMouseLeave = (e) => {
    e.target.style.color = 'blue';
  };

  return (

    <footer className="container-fluid  py-4">
      <hr style={{ border: "3px solid black" }} />
      <div className="row mb-3">
        <div className="col d-flex ">
          <img src={newslogo} alt="News Logo" width="70" height="50" />
          <h1 className='fs-1'>
            <LinearGradient gradient={['to left', 'blue , #E74C3C ']} style={{ fontSize: "40px", fontWeight: "800" }}>
              News Spin
            </LinearGradient>
          </h1>
        </div>
        <div className="col-12">
          <hr style={{ border: "2px solid black" }} />

        </div>
      </div>


      <div className="row mb-3">
        <div className="col-12 ">
          <h4>SECTIONS</h4>
        </div>
      </div>

      <div className="row mb-3">
        <div className="col-12 d-flex flex-wrap">
          {['HOME', 'DASHBOARD'].map((section, index) => (
            <p key={index} className='mt-2 mx-2'>
              <Link
                style={{
                  textDecoration: 'none',
                  color: 'blue',
                  transition: 'color 0.3s ease',
                }}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                to={`/${section.toLowerCase().replace(' ', '-')}`}
              >
                {section}
              </Link>
            </p>
          ))}
        </div>
      </div>

      <div className="row pb-3" >
        <div className="col-12">


        </div>
      </div>

      <div className="row py-3" style={{ backgroundColor: "gray" }} >
        <div className="col-12 d-flex justify-content-between align-items-center">
          <div className="d-flex justify-content-center align-items-center ">
            <FontAwesomeIcon className="mx-2 icon_hover text-center d-flex justify-content-center align-items-center" icon={faFacebook} size='lg' color='black' />
            <FontAwesomeIcon className="mx-2 icon_hover text-center d-flex justify-content-center align-items-center" icon={faInstagram} size='lg' color='black' />
            <FontAwesomeIcon className="mx-2 icon_hover text-center d-flex justify-content-center align-items-center" icon={faTwitter} size='lg' color='black' />
            <FontAwesomeIcon className="mx-2 icon_hover text-center d-flex justify-content-center align-items-center" icon={faLinkedin} size='lg' color='black' />
          </div>
          <div>
            <p className='text-light'>© 2024 News Management System. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

