import React, { useState } from 'react'
import Add from '../Components/Add'
import View from '../Components/View'
import Category from '../Components/Category'
import { Link } from 'react-router-dom'

function Home() {
  //create state to do state-lifting

  const [uploadVideoStatus , setUploadVideoStatus] = useState({})
  
  return (
    <>
    <div className="container mb-5 mt-5 d-flex align-items-center justify-content-between">
      <div className="add-vedios"> 
        <Add  setUploadVideoStatus={setUploadVideoStatus}/>
      </div> 
      <Link to={'/watchhistory'} style={{textDecoration:'none',color:'white',fontSize:'30px'}}>Watch History</Link>
    </div>

    <div className='container-fluid w-100 mb-5 mt-5 d-flex justify-content-between'>
      <div className="all-vedios col-lg-9">
        <h4 className='mb-5'>All Videos</h4>
        <View uploadVideoStatus={uploadVideoStatus}/>
      </div>
      <div className='category col-lg-3'>
      <Category/>
      </div>
      
    </div>
    </>
  )
}

export default Home