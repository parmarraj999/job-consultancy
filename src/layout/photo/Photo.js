import React, { useState } from 'react'
import "./photo.css";
import { Link, Outlet } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import Upload from '../../function/upload/upload';

function Photo() {

  const [showForm,setShowForm] = useState(false);

  return (
    <div className='photo_container' >
      {
        showForm ?
        <Upload setShowForm={setShowForm} /> : ""
      }
      <div className='header' >
        <h2>Our Moments</h2>
      </div>
      <div className="nav_small">
        <div className='nav'>
          <Link to="/photo/" className='nest_link'>album</Link>
          <Link to="/photo/achievement" className='nest_link'>Achievement</Link>
        </div>
        <div className='add_photo_button' onClick={()=>setShowForm(true)}>
          <FontAwesomeIcon icon={faPlus}/>
        </div>
      </div>
      <div className='image_container' >
        <Outlet />
      </div>
    </div>
  )
}

export default Photo