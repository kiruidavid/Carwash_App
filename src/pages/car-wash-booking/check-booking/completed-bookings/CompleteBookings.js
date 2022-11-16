import React from 'react' 
import './completedbooking.scss'

function CompleteBookings({closeCompleted, booking, completeBookings}) { 
    const handleSubmit = () => { 
        const completed_booking = {
            booking_id: booking.id, 
            comleted_time: new Date().toLocaleTimeString()
        } 
        completeBookings(completed_booking)

    }
  return (
    <div className='complete-bookings'> 
    <div className='completed-area'>
    <h1>Complete {booking.phone_no} booking</h1> 
    <p>Car Reg No: {booking.car_reg_no}</p> 
    <p>Total Price: {booking.total_price}</p> 
    <p>Attendant: {booking.attendant_name}</p> 
    <p>Time booked: {booking.booking_time}</p> 
    <p>Date booked: {booking.booking_date}</p>
    <button type='submit' onClick={handleSubmit}>Submit</button> 
    <button onClick={closeCompleted}>Cancel</button> 
    </div>
    </div>
  )
}

export default CompleteBookings