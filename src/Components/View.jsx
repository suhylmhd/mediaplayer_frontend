import React, { useEffect, useState } from 'react'
import { Row } from 'react-bootstrap'
import { Col } from 'react-bootstrap'
import VideoCard from '../Components/VideoCard'
import { getAllVideos } from '../services/allAPI'

function View({uploadVideoStatus}) {

  const [allVideo , setAllVideo] = useState()

  const [deleteVideoStatus , setDeleteVideoStatus] = useState(false)

  const getAllUploadedVideos = async()=>{
    const response = await getAllVideos()
    const {data}=response
    /* console.log(data); */
    setAllVideo(data)
  }

  console.log(allVideo);

  useEffect(()=>{
    getAllUploadedVideos()
    setDeleteVideoStatus(false)
  },[uploadVideoStatus, deleteVideoStatus])
  return (
    <>
        <Row>  
              { allVideo && allVideo.length>0?
              allVideo?.map((video)=>(<Col sm={12} md={6} lg={4} xl={3}>
                <VideoCard displayVideo={video} setDeleteVideoStatus={setDeleteVideoStatus}/>
              </Col>))
              :
              <p>Nothing to Display</p>
              }
       </Row>
    </>
  )
}

export default View