import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';

function Landingpage() {
  const navigativeByUrl = useNavigate()
  return (
    <>
    <Row className='mt-5 mb-5 d-flex align-items-center justify-content-between w-100'>
      <Col></Col>
      <Col lg={5}>
        <h3 className='mb-3'>Welcome To <span className='text-warning'> Media Player</span></h3>
        <p style={{textAlign:'justify'}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi qui temporibus odio, animi, suscipit quia facere incidunt voluptas omnis consequuntur officiis amet, ab explicabo! Quaerat incidunt earum eligendi alias quibusdam! Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, aspernatur. Rerum accusamus consequuntur dolores ex odio. Sint tenetur ducimus hic nulla maxime magnam. Officia vitae cupiditate fugiat ea est corrupti.</p>
        <button onClick={()=>navigativeByUrl('/home')} className='btn btn-warning mt-5'>Get Started <i class="fa-solid fa-arrow-right ms-3"></i></button>
      </Col>
      <Col></Col>
      <Col lg={5}>
        <img src="https://media.tenor.com/lhlDEs5fNNEAAAAC/music-beat.gif" alt="No Image" />
      </Col>
    </Row>
    <div className='container mb-5 mt-5 d-flex align-items-center justify-content-center flex-column'>
      <h3>Features</h3>
      <div className='cards d-flex align-items-center justify-content-evenly w-100 mt-5 mb-5'>
      <Card className='p-4' style={{ width: '22rem' }}>
        <Card.Img variant="top" style={{width:'100%',height:'300px'}} src="https://i.pinimg.com/originals/ad/d2/31/add23123b088c3301cc2c71f7767048d.gif" />
        <Card.Body>
          <Card.Title>Managing Videos</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>

      <Card className='p-4' style={{ width: '22rem' }}>
        <Card.Img variant="top" style={{width:'100%',height:'300px'}} src="https://i.pinimg.com/originals/2d/2d/51/2d2d51ba3d86b27b221abb162c24edc0.gif" />
        <Card.Body>
          <Card.Title>Categorized Video</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>

      <Card className='p-4' style={{ width: '22rem' }}>
        <Card.Img variant="top" style={{width:'100%',height:'300px'}} src="https://i.pinimg.com/originals/48/c6/12/48c61262980bb7dbf2557940d41c7d0b.gif" />
        <Card.Body>
          <Card.Title>Watch History</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>

      </div>
    </div>
    <div className='container mb-5 mt-5 border border-2 border-secondary rounded p-5 d-flex align-items-center justify-content-between w-100 '>
      <div className="col-lg-5">
        <h3 className='mb-5 text-warning'>Simple Fast andPowerful</h3>
        <p> <span className='fs-5 fw-bolder'>Play Everything:</span> Amet consectetur adipisicing elit. Autem veritatis totan tempore expedital Quae quam, commodi dolorum iste unde atque alias debitis voluptates nesciunt</p> 
        <p><span className='fs-5 fw-bolder'>Play Everything:</span> Amet consectetur adipisicing elit. Autem veritatis totam tempore expedita! Quae quan, commodi dolorum iste unde atque alias debitis voluptates nesciunt</p>
        <p><span className='fs-5 fw-bolder'>Play Everything:</span> Amet consectetur adipisicing elit. Autem veritatis totam tempore expedital Quae quam, commodi dolorum iste unde atque alias debitis voluptates nesciunt</p>
      </div>
      <div className="col-lg-5">
      <iframe width="100%" height="400" src="https://www.youtube.com/embed/szvt1vD0Uug" title="LEO - Naa Ready Lyric Video | Thalapathy Vijay | Lokesh Kanagaraj | Anirudh Ravichander" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>
    </div>
    </>
  )
}

export default Landingpage