import React, {useState} from 'react' 
import './wash-bookings.scss' 
import {Link} from 'react-router-dom'


function Booking({booking}) { 
  

  

 
  
  return (
    <tr>
      
      
      <td>{booking.name}</td>
      <td>{booking.phone_no}</td>
      <td>{booking.car_reg_no}</td> 
      <td>{booking.attendant.first_name}</td> 
      <td>{booking.payment_method}</td> 
      <td>{booking.booking_date}</td> 
      <td>{booking.booking_time}</td> 
      <td>{booking.total_price}</td>
      <div className='btn-view'> 
      <button><Link to={`/single-booking/${booking.booking_id}`}>Check Bookings</Link></button>
      
      
       
      </div> 
      
    
    </tr>
  )
} 


export default Booking