import React from 'react'
import NewsCards from '../components/NewsCards'

function Deactivated() {
  return (
  <>
  <h1 className='mt-5' style={{ marginLeft: "60px" }}>Deactive <span className='text-danger fw-bolder'>News</span>   </h1>

  <div className='w-25 border p-2 mb-5'>
    <NewsCards/>

    <div className='d-flex justify-content-between p-2'>
      <button className='btn btn-success' >Activate</button>
      <button className='btn btn-success'>Delete</button>
    </div>
  </div>
  
  </>
  )
}

export default Deactivated