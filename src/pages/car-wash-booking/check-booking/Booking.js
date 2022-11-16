import React from 'react' 
import './wash-bookings.scss'

function Booking({booking}) {
  return (
    <tr>
      
      
      <td>{booking.name}</td>
      <td>{booking.phone_no}</td>
      <td>{booking.car_reg_no}</td> 
      <td>{booking.attendant_name}</td> 
      <td>{booking.payment_method}</td> 
      <td>{booking.booking_date}</td> 
      <td>{booking.booking_time}</td> 
      <td>{booking.total_price}</td>
      <div className='btn-view'>
      <button>DELETE</button> 
      <button>VIEW</button> 
      </div>
    
    </tr>
  )
}

export default Booking