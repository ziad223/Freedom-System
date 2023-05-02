import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import {MdOutlineArrowBackIos , MdOutlineArrowForwardIos} from 'react-icons/md';

const Sidebar = () => {
  const [open , setOpen] = useState(true);

  const isOpen = () =>{
    setOpen(!open);
  }
  
  return (
<div className='all'>

  {open ? (<div className='sidebar'>

<div className="links">
<MdOutlineArrowForwardIos className='iconn sm' onClick={isOpen}/>
<Link to='/home' className='link'>Home</Link>
<Link to='/english' className='link'>English</Link>
<Link to='/germany' className='link'>Germany</Link>
<Link to='/french' className='link'>French</Link>
<Link to='/frontend' className='link'>Frontend</Link>
<Link to='/icdl' className='link'>Icdl</Link>
<Link to='/graphic' className='link'>Private Courses</Link>
</div>
    </div>) : <MdOutlineArrowBackIos className='iconn bg' onClick={isOpen} />}


</div>
   
  )
}

export default Sidebar