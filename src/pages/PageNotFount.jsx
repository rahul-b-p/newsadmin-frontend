import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
 

function PageNotFound() {
  return (
    <div style={{height:"70vh",width:"100%"}} className='d-flex flex-column justify-content-center align-items-center mt-5 pt-5 mb-5'>
      <img src="https://www.ecommerce-nation.com/wp-content/uploads/2018/10/404-error.jpg.webp" alt="no image"  width={'50%'} height={'400px'} />
      <div className='pt-5'> <button className='btn btn-outline-dark mb-5' ><FontAwesomeIcon icon={faArrowLeft}   />  <Link to="/" style={{textDecoration:"none",color:"red"}}
      > Back Home</Link></button></div>
    </div>
  )
}

export default PageNotFound