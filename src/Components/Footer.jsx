import React from 'react'
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='d-flex justify-content-center align-items-center w-100 flex-column '>
      <div className="footer d-flex justify-content-evenly align-items-center w-100">
        <div className='websites' style={{width:'400px'}}>
          <h4><i class="fa-solid fa-video fa-beat mb-3 text-warning"></i>{' '} Video Player</h4>
          <h6 className='d-flex justify-content-center align-items-center text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto cupiditate nisi saepe quo sit nemo a blanditiis. Culpa inventore commodi, tempora modi voluptas eveniet quo, excepturi porro dicta explicabo dolores.</h6>
            <h6>similique? Nesciunt aspenture</h6>
        </div>
        <div className='links d-flex flex-column'>
          <h4>Links</h4>
          <Link to={'/'} style={{textDecoration:'none',color:'white'}}>Landing Page</Link>
          <Link to={'/home'} style={{textDecoration:'none',color:'white'}}>Home Page</Link>
          <Link to={'/watchhistory'} style={{textDecoration:'none',color:'white'}}>Watch History</Link>
        </div>
        <div className='guides d-flex flex-column'>
          <h4>Guides</h4>
          <Link to={'https://react.dev/'} style={{textDecoration:'none',color:'white'}}>React</Link>
          <Link to={'https://react-bootstrap.netlify.app/'} style={{textDecoration:'none',color:'white'}}>React Bootstrap</Link>
          <Link to={'https://bootswatch.com/'} style={{textDecoration:'none',color:'white'}}>bootswatch</Link>
        </div>
        <div className='contacts'>
          <h4 className='mb-3'>Contact Us</h4>
          <div className="d-flex mb-3">
            <input type="text" className='form-control' placeholder='Enter Your Email ID' />
            <button className='btn btn-warning ms-2'>Subscribe</button>
          </div>
          <div className='d-flex justify-content-evenly align-items-center'>
            <Link to={'https://bootswatch.com/'}  style={{textDecoration:'none',color:'white'}}><i class="fa-brands fa-instagram fa-2x"></i></Link>
            <Link to={'https://bootswatch.com/'}  style={{textDecoration:'none',color:'white'}}><i class="fa-brands fa-twitter fa-2x"></i></Link>
            <Link to={'https://bootswatch.com/'}  style={{textDecoration:'none',color:'white'}}><i class="fa-brands fa-linkedin fa-2x"></i></Link>
            <Link to={'https://bootswatch.com/'}  style={{textDecoration:'none',color:'white'}}><i class="fa-brands fa-facebook fa-2x"></i></Link>
          </div>
        </div>
      </div>
      <p className='mt-5'>copyright @ 2023 media player. Built with React.</p>
    </div>
  )
}

export default Footer