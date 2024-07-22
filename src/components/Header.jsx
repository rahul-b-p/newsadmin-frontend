import React, { useState, useEffect } from 'react';
import { Nav, Navbar, Button} from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import { faFacebook, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import newslogo from '../assets/pic3.png';
import '../App.css'
import { LinearGradient } from 'react-text-gradients';





const Header = () => {
  const location = useLocation();
  const [time, setTime] = useState('');
  const [temperature, setTemperature] = useState('');
  const [date, setDate] = useState('');
  const [day, setDay] = useState('');

  useEffect(() => {
    const fetchWeatherData = async () => {
      const cityName = 'Kakkanad';
      const apiKey = '9944ec6d4ebee4901d12fdb4ae964e44';
      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric;`

      try {
        const response = await fetch(apiUrl);
        if (response.ok) {
          const data = await response.json();
          const currentTemperature = data.main.temp;
          setTemperature(currentTemperature);

          const currentTime = new Date().toLocaleTimeString();
          const currentDate = new Date(); 
          const currentDayNumber = currentDate.getDay();
          const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
          const currentDayName = daysOfWeek[currentDayNumber];

          setTime(currentTime);
          setDate(currentDate.toLocaleDateString());
          setDay(currentDayName);
        } else {
          console.error('Failed to fetch weather data');
        }
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    };

    fetchWeatherData();
    const interval = setInterval(fetchWeatherData, 600000);
    return () => clearInterval(interval);
  }, []);

  const showTimeDateTemp = location.pathname === '/';

  const handleMouseEnter = (e) => {
    e.target.style.color = 'red';
    e.target.style.cursor = 'pointer';
  };

  const handleMouseLeave = (e) => {
    e.target.style.color = 'blue';
  };

  return (
    <div className="container-fluid ">
    <div className="row py-2  px-5" style={{height:"50px",backgroundColor:"gray"}}  >
      <div className="col-12 d-flex justify-content-between align-items-center">
        <div className='d-flex'>
          <p className='me-2 mb-0 text-light'>{day},</p>
          <p className='me-2 mb-0 text-light'>{date},</p>
          <p className='me-2 mb-0 text-light'>{time},</p>
          <p className='me-2 mb-0 text-light'>{temperature}°F,</p>
          <p className='text-light'>Kochi</p>
        </div>
        <div className='d-flex align-items-center justify-content-center'>
          <div className="d-none d-md-flex" >
            <div className="mx-2 icon_hover text-center d-flex justify-content-center align-items-center"><FontAwesomeIcon icon={faFacebook} size='lg' /></div>
            <div className="mx-2 icon_hover text-center d-flex justify-content-center align-items-center"><FontAwesomeIcon icon={faInstagram} size='lg' /></div>
            <div className="mx-2 icon_hover text-center d-flex justify-content-center align-items-center"><FontAwesomeIcon icon={faTwitter} size='lg' /></div>
            <div className="mx-2 icon_hover text-center d-flex justify-content-center align-items-center"><FontAwesomeIcon icon={faLinkedin} size='lg'/></div>
          </div>
        </div>
      </div>
    </div>
    <hr/>
    <div className="row text-center">
      <div className="col d-flex justify-content-center align-items-center">
        <img src={newslogo} alt="News Logo" width="100" height="100" />
        <h1 className=' mt-4' style={{fontSize:"6rem",fontWeight:"800",letterSpacing:"4px"}}>
<LinearGradient gradient={['to left', 'blue , #E74C3C ']}>
  News Spin
</LinearGradient>
</h1>
      </div>
    </div>
    <hr/>
    <div className="row">
      <div className="col-12 d-flex ">
        <div className='d-flex'>
          <p className='mt-4 text-primary'>
            <Link   
              style={{
                textDecoration: 'none',
                color: 'blue',
                transition: 'color 0.1s ease',
              }}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              to={'/'}
            >
              HOME
            </Link>
          </p>
          <p className='mt-4 ms-4'>|</p>
          <p className='mt-4 ms-4'>
            <Link 
              style={{
                textDecoration: 'none',
                color: 'blue',
                transition: 'color 0.3s ease',
              }}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              to={'/dashboard'}
            >
              DASHBOARD
            </Link>
          </p>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Header;


