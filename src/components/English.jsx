import React , {useState} from 'react';
import { Link } from 'react-router-dom';
import Sidebar from './Sidebar';



const English = () => {


  return (
  <>
  <Sidebar/>
  <div className='english'>
       <h1>English Rooms</h1>

       <div className="buttons">
        <Link to='/english/room-one' className='english-rooms'>Room 1</Link>
        <Link to='/english/room-two' className='english-rooms'>Room 2</Link>
        <Link to='/english/room-three' className='english-rooms'>Room 3</Link>
        <Link to='/english/room-four' className='english-rooms'>Room 4</Link>
        <Link to='/english/room-five' className='english-rooms'>Room 5</Link>
        <Link to='/english/room-six' className='english-rooms'>Room 6</Link>
        <Link to='/english/room-seven' className='english-rooms'>Room 7</Link>
        <Link to='/english/room-eight' className='english-rooms'>Room 8</Link>
        <Link to='/english/room-nine' className='english-rooms'>Room 9</Link>
        <Link to='/english/room-ten' className='english-rooms'>Room 10</Link>
        <Link to='/english/waiting' className='english-rooms'>Wait</Link>
        <Link to='/english/out' className='english-rooms'>out</Link>

       </div>
     
    </div>
  </>
  )
}

export default English