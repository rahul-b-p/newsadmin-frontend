import React from 'react'
import CategorizedView from "../components/CategorizedView";
import { Row } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
import Dropdown from 'react-bootstrap/Dropdown';

function Dashboard() {


  return (
    <>

      <h3 className='mt-5' style={{ marginLeft: "60px" }}>Admin <span className='text-danger fw-bolder'>Dashboard</span>   </h3>
      <Dropdown style={{ textAlign: "end", marginTop: "-40px" }} className='me-5 border'>
        <Dropdown.Toggle variant="white" id="" className="no-caret"  >
          <FontAwesomeIcon icon={faEllipsisVertical} size="lg" style={{ color: "#0d0d0d" }} />
        </Dropdown.Toggle>

        <Dropdown.Menu className='mt-2'>
          <Dropdown.Item href="#/action-1">Add News</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Deactivated News</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>


      <Row className='mt-2 container-fluid p-5'>
        <CategorizedView />
      </Row>
    </>
  )
}

export default Dashboard