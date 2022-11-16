import React from 'react' 
import './wash-bookings.scss' 
import CompleteBookings from './completed-bookings/CompleteBookings'

function Booking({booking, completed,  openCompleted, closeCompleted, completeBookings}) { 
  
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
      <button onClick={openCompleted}>COMPLETE BOOKING</button> 
       
      </div> 
      {completed && <CompleteBookings booking={booking}closeCompleted={closeCompleted} completeBookings={completeBookings}/>}
    
    </tr>
  )
}

export default Booking