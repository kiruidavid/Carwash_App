import React from 'react' 
import './wash-bookings.scss'

function Booking({booking}) {
  return (
    <tr>
      
      <th scope="row">{booking.id}</th>
      <td>{booking.data.name}</td>
      <td>{booking.data.phoneNo}</td>
      <td>{booking.data.carRegNo}</td> 
      <td>{booking.data.attendant}</td> 
      <td>{booking.data.payment_method}</td> 
      <td>{booking.currentDate}</td> 
      <td>{booking.currentTime}</td> 
      <div className='btn-view'>
      <button>DELETE</button> 
      <button>VIEW</button> 
      </div>
    
    </tr>
  )
}

export default Booking