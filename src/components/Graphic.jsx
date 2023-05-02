import React , {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addUser , deleteUser } from '../redux/slices/GraphicSlice';
import Sidebar from './Sidebar';

const Graphic = () => {

  const [name , setName] = useState("");
  const [phone , setPhone] = useState();
  const [course , setCourse] = useState();
  const [note , setNote] = useState();
  const [book , setBook] = useState();

  const graphicUsers = useSelector(state =>state.graphic.users);
  const dispatch = useDispatch();

    const handleSubmit = (e) =>{
      e.preventDefault();
    }


  return (
  <>
  <Sidebar/>
  <div className='cancel'>
        <h1 style={{textAlign : 'center' }}>Private Courses</h1>
        <h2  className='length'> Number Of Student : {graphicUsers.length}</h2>
        <form onSubmit={handleSubmit}>
        <input type="text" value={name}  placeholder='Enter name' onChange = {(e) =>setName(e.target.value)} />
        <input type="text" value={phone} placeholder='Enter Phone Number'onChange = {(e) =>setPhone(e.target.value)}  />
        <input type="text" value={course} placeholder='Enter Course'onChange = {(e) =>setCourse(e.target.value)}  />
        <input type="text" value={book} placeholder='Enter Date Book' onChange = {(e) =>setBook(e.target.value)}  />
        <input type="text" value={note} placeholder='Enter Notes' onChange = {(e) =>setNote(e.target.value)}  />
        <button className='add'
        onClick={() =>{dispatch(addUser({id :graphicUsers.length + 1 ,name : name , phone : phone , course : course , book : book , note : note}))
      setName("");
      setBook("");
      setCourse("");
      setPhone("");
      setNote("");
      }}
        >Add User</button>
       </form>
    {graphicUsers.length > 0 ?  <table border = '2' cellPadding = '10'>
        <tr>
            <th>id</th>
            <th>name</th>
            <th>Phone Number</th>
            <th>Course</th>
            <th>Date Book</th>
            <th>Notes</th>
            <th >Controls</th>
            
        </tr>
        {graphicUsers.length > 0 && graphicUsers.filter((user) =>
         user.name.toLowerCase().includes(name)
         ).map((user) =>{
       return (
        <tr key={user.id}>
  
        <td>{user.id}</td>
        <td>{user.name}</td>
        <td>{user.phone}</td>
        <td>{user.course}</td>
        <td>{user.book}</td>
        <td>{user.note}</td>
        <td>
          <button className='delete'
          onClick={() =>dispatch(deleteUser(user.id))}
          >Delete</button>
        </td>
        </tr>
       )
         })}
        
     </table> : <h2 className='no-users'>No There Users , Please Enter Users in Table.</h2>}
    </div>
  </>
  )
}

export default Graphic