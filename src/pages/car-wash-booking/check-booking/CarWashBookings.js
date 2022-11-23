import React, {useContext, useState} from 'react'
import Sidebar from '../../../components/sidebar/Sidebar' 
import Navbar from '../../../components/navbar/Navbar' 
import Booking from './Booking'
import { BookingContext } from '../../../context/bookings/BookingsState'
import {Link} from 'react-router-dom'
import './wash-bookings.scss'


function CarWashBookings() {
  const {bookings } = useContext(BookingContext) 
 
  
  
  
  return (
    <div className='bookings-container'>
        <Sidebar/> 
        <div className='bookings-table'> 
         <Navbar/> 
         <div className='heading'>
            <h2>Bookings </h2> 
            <button><Link to='/add-car-booking'><span>Book Wash</span></Link></button>
          </div>
         <table className="table table-striped">
  <thead>
    <tr>
      
      <th scope="col">Name</th>
      <th scope="col">Phone Number</th>
      <th scope="col">Car Reg Number</th> 
      <th scope="col">Wash Attendant</th> 
      <th scope="col">Payment Method</th>
      <th scope="col">Booking Date</th> 
      <th scope="col">Booking Time</th>  
      <th scope="col">Total Price</th>

    </tr>
  </thead>
   <tbody> 
    {bookings.map((booking) => (
      <Booking key={booking.attendant_id} booking={booking}/>
    ))}
   
     
     
 
    </tbody>
    
 
</table>

        </div>
    </div>
  )
}

export default CarWashBookings