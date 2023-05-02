import React , {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, deleteUser } from '../redux/slices/RoomTwoSlice';
import Sidebar from './Sidebar';
const RoonTwoE = () => {
  const [name , setName] = useState("");
  const [phone , setPhone] = useState();
  const [course , setCourse] = useState();
  const [note , setNote] = useState();
  const [book , setBook] = useState();
  const [residual , setResidual] = useState();
  const [paid , setPaid] = useState();

    const roomTwoUsers = useSelector(state =>state.roomTwo.users);
    const dispatch = useDispatch();

    const handleSubmit = (e) =>{
      e.preventDefault();
    }


  return (
  <>
  <Sidebar/>
  <div className='english-room'>
      <h1>Room 2 English</h1>
      <h2  className='length'> Number Of Student : {roomTwoUsers.length}</h2>

        <form onSubmit={handleSubmit}>
        <input type="text" value={name}  placeholder='Enter name' onChange = {(e) =>setName(e.target.value)} />
        <input type="text" value={phone} placeholder='Enter Phone Number'onChange = {(e) =>setPhone(e.target.value)}  />
        <input type="text" value={course} placeholder='Enter Level' onChange = {(e) =>setCourse(e.target.value)}  />
        <input type="text" value={book} placeholder='Enter Booking Date' onChange = {(e) =>setBook(e.target.value)}  /><br/>
        <input type="text" value={paid} placeholder='Enter Paid' onChange = {(e) => setPaid(e.target.value)}  />
        <input type="text" value={residual} placeholder='Enter Residual' onChange = {(e) =>setResidual(e.target.value)}  />
        <input type="text" value={note} className='note' placeholder='Enter Notes' onChange = {(e) =>setNote(e.target.value)}  />
        <button className='add'
        onClick={() =>{dispatch(addUser({
          id :roomTwoUsers.length + 1 ,name : name , phone : phone , course : course , note : note , book :book , paid : paid , residual : residual
        }))
      setName("");
      setCourse("");
      setPhone("");
      setNote("");
      setBook("");
      setPaid("");
      setResidual("");
      }}
        >Add User</button>
       </form>
     {roomTwoUsers.length > 0 ? <table border = '2' cellPadding = '10'>
        <tr>
            <th>id</th>
            <th>name</th>
            <th>Phone Number</th>
            <th>Level</th>
            <th>Booking Date</th>
            <th>Paid</th>
            <th>Residual</th>
            <th>Notes</th>

            <th >Controls</th>
            
        </tr>
        {roomTwoUsers.length > 0 && roomTwoUsers.filter((user) =>
         user.name.toLowerCase().includes(name)
         ).map((user) =>{
       return (
        <tr key={user.id}>
  
        <td>{user.id}</td>
        <td>{user.name}</td>
        <td>{user.phone}</td>
        <td>{user.course}</td>
        <td>{user.book}</td>
        <td>{user.paid}</td>
        <td>{user.residual}</td>
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

export default RoonTwoE