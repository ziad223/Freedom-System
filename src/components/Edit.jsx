import React from 'react'

const Edit = ({user }) => {

   
  return (
    <tr>
        <td> <input type="hidden" value={user.id}  /></td>
        <td> <input type="text" value={user.name}  placeholder='Enter name'  className='edit-input' /></td>
       <td> <input type="text" value={user.phone} placeholder='Enter Phone Number'  className='edit-input'  /></td>
       <td> <input type="text" value={user.course} placeholder='Enter Level'  className='edit-input'   /></td>
       <td> <input type="text" value={user.book} placeholder='Enter Booking Date'  className='edit-input'  /></td>
       <td> <input type="text" value={user.paid} placeholder='Enter Paid'  className='edit-input'   /></td>
       <td> <input type="text" value={user.residual} placeholder='Enter Residual'  className='edit-input'  /></td>
      <td>  <input type="text" value={user.note} className='note edit-input'  placeholder='Enter Notes' /> </td>
      <td>  <button className='update' >Update</button> </td>
        
    </tr>
  )
}

export default Edit