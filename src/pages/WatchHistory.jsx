import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { deleteHistory, getAllHistory } from '../services/allAPI';

function WatchHistory() {

  const [history , setHistory] = useState([])

  const getHistory = async()=>{
    const {data} = await getAllHistory()
    /* console.log(data); */
    setHistory(data)
  }
  console.log(history);

  //function to delete history
  const handleDelete = async(id)=>{
    await deleteHistory(id)
    getHistory()
  }


  useEffect(()=>{
    getHistory()
  },[])


  return (
    <>
      <div  className="container  mt-5 d-flex  justify-content-between">
        <h3>Watch History</h3>
        <Link to={'/home'} className='d-flex align-items-center' style={{textDecoration:'none',color:'white',fontSize:'20px'}}>
        <h5><i class="fa-solid fa-arrow-left fa-beat me-2"></i> Back to Home</h5>
        </Link>
      </div>
      <table className='table mt-5 mb-5 container'>
        <thead>
          <tr>
            <th>#</th>
            <th>Caption</th>
            <th>URL</th>
            <th>Time Stamp</th>
            <th>Action</th>
          </tr>
        </thead>
        <tBody>
          {history.length>0?
            history.map((item)=>(<tr>
            <td>{item.id}</td>
            <td>{item.caption}</td>
            <td><a href={item.embedLink} target='_blank'>{item.embedLink}</a></td>
            <td>{item.timeStamp}</td>
            <td><button onClick={()=>handleDelete(item?.id)} className='btn btn-danger ' ><i class="fa-solid fa-trash-can"></i></button></td>
          </tr>))
          :
          <p>Nothig to Diplay</p>

        }
        </tBody>
      </table>
    </>
  )
}

export default WatchHistory