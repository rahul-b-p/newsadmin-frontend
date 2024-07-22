import React from 'react'
import CategorizedView from "../components/CategorizedView";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
import Dropdown from 'react-bootstrap/Dropdown';
import { Link } from 'react-router-dom';

function Dashboard() {

  return (
    <>

      <h2 className='mt-4 mb-4' style={{ marginLeft: "60px" }}>Admin <span className='text-danger fw-bolder'>Dashboard</span>   </h2>
      <Dropdown style={{ textAlign: "end", marginTop: "-40px" }} className='me-5'>
        <Dropdown.Toggle variant="white" id="" className="no-caret"  >
          <FontAwesomeIcon icon={faEllipsisVertical} size="lg" style={{ color: "#0d0d0d" }} />
        </Dropdown.Toggle>

        <Dropdown.Menu className='mt-2'>
          <Dropdown.Item>
            <Link style={{textDecoration:"none"}} className='fw-bold text-dark' to={'/editor'}>Add News</Link>
          </Dropdown.Item>
          <Dropdown.Item>
            <Link style={{textDecoration:"none"}} className='fw-bold text-dark' to={'/deactivated'}>Deactivated News</Link>
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>


      
      <CategorizedView />
  
    </>
  )
}

export default Dashboard