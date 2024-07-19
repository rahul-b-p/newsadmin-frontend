import React from 'react'
import Header from '../components/Header'
import CategorizedView from "../components/CategorizedView";
import { Col, Row } from 'react-bootstrap'

function Dashboard() {
  return (
    <>
    
      <h3 className='mt-5' style={{ marginLeft: "70px" }}>Admin <span className='text-danger fw-bolder'>Dashboard</span></h3>

      <Row className='mt-2 container-fluid p-5'>
        <CategorizedView />
      </Row>
    </>
  )
}

export default Dashboard