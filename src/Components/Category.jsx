import React, { useEffect } from 'react'
import { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { addToCategories, getAVideo, getAllcategory, updateCategory } from '../services/allAPI';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Card, Col, Row } from 'react-bootstrap';
import VideoCard from './VideoCard';

function Category() {


  const [categoryName , setCategoryName] = useState({})
  const [allCategory , setAllCategory] = useState([])

// function to add category
  const handleAddCategory = async () =>{
    console.log(categoryName);
    if ( categoryName) {
      let body = {
        categoryName,
        allVideos:[]
      }
      //make api call
      const response = await addToCategories(body)
      console.log(response);
      if(response.status>=200 && response.status<300){
        toast.success('Category Successfull added')
        //to make the state null after successfull addition 
        setCategoryName("")

        handleClose() // to close the modal
      }
      else{
        console.log(response);
        toast.error('Somthing went wrong, Please try again later')
      }
    }
    else{
      toast.warning("Please fill the Category Name")
    }
    
  }

  //function to get all category
  const getallCategory = async()=>{
    const {data} = await getAllcategory()
    /* console.log(data); */
    setAllCategory(data)
  }
  console.log(allCategory);

  //dragover eventListener

  const dragOver = (e)=>{
    //this will prevent reload so that the data we sent from videocard.jsx wont be lost
    e.preventDefault()
    console.log('inside dragover');
  }

  const videoDrop = async (e,categoryId)=>{
    console.log(`dropped inside  the categoryId ${categoryId}`);
    //to get the videoid that is send from the videoCard component
    const videoid = e.dataTransfer.getData("videoID")
    console.log(videoid);

    //api to get a purticular video that is dragged
    const {data} =await getAVideo(videoid)
    console.log(data);

    //to find a purticular category with the specified id
    let selectedCategory = allCategory?.find(item=>item.id===categoryId)
    console.log(selectedCategory);
    //data is added to the all videos to the array in the purticular category with the specified id
    selectedCategory.allVideos.push(data)
    console.log(selectedCategory);
    

    await updateCategory(categoryId,selectedCategory)
    getAllcategory()

  }


  
  
  

  useEffect(()=>{
    getallCategory()
  },[])


  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <div className='d-grid ms-3'>
        <button onClick={handleShow} className='btn btn-warning'>Add New Category</button>
      </div>

      {
        allCategory?.length>0?
        allCategory?.map((item)=>(<div className='mt-5 border border-secondary rounded p-3'>
        <div className='d-flex justify-content-between align-items-center' droppable onDragOver={(e)=>dragOver(e)} onDrop={(e)=>videoDrop(e,item?.id)}>
          <h6>{item.categoryName}</h6>
          <button className='btn btn-danger '><i class="fa-solid fa-trash-can"></i></button>
        </div>
        <Row>
          <Col sm={12}>
            {
              item.allVideos?.length>0?
              item.allVideos.map(card=>( <VideoCard displayVideo={card}/>))
              : <p>Nothing To Display</p>
            }
          </Col>
        </Row>
      </div>))
      : <p>Nothing to display</p>
      }

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title><i class="fa-solid fa-pencil me-2 text-warning"></i>Add New Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className='border border-secondary p-3 rounded'>
             

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Category Name</Form.Label>
              <Form.Control type="text" placeholder="Category Name" onChange={(e)=>setCategoryName(e.target.value)}/>
            </Form.Group>


          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="warning" onClick={handleAddCategory}>Upload</Button>
        </Modal.Footer>
      </Modal>

      <ToastContainer position='top-center' theme='colored' autoClose={2000}/>
    </>
  )
}

export default Category
