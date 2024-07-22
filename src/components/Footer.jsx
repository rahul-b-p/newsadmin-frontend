import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { LinearGradient } from 'react-text-gradients';
import newslogo from '../assets/pic3.png';


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
      <div className="row mb-3">
      <div className="col d-flex ">
          <img src={newslogo} alt="News Logo" width="70" height="50" />
          <h1 className='fs-1'>
  <LinearGradient gradient={['to left', '#2E86C1 , #E74C3C ']}>
    News Spin
  </LinearGradient>
</h1>
        </div>
        <div className="col-12">
          <hr />
        </div>
      </div>

      <div className="row mb-3">
        <div className="col-12 ">
          <h4>SECTIONS</h4>
        </div>
      </div>

      <div className="row mb-3">
        <div className="col-12 d-flex flex-wrap">
          {['HOME', 'DASHBOARD', 'POLITICS', 'EDUCATION', 'SPORT', 'BUSINESS', 'LOCAL EDITION'].map((section, index) => (
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

      <div className="row mb-3">
        <div className="col-12">
          <hr />
        </div>
      </div>

      <div className="row">
        <div className="col-12 d-flex justify-content-between align-items-center">
          <div className="d-flex">
            <FontAwesomeIcon className="me-2" icon={faFacebook} size='2x' color='black' />
            <FontAwesomeIcon className="me-2" icon={faInstagram} size='2x' color='black' />
            <FontAwesomeIcon className="me-2" icon={faTwitter} size='2x' color='black' />
            <FontAwesomeIcon className="me-2" icon={faLinkedin} size='2x' color='black' />
          </div>
          <div>
            <p className="mb-0">© 2024 News Management System. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

