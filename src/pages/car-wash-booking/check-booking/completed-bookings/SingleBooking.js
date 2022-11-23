import React, {useState, useEffect, useContext} from 'react' 
import {BookingContext} from '../../../../context/bookings/BookingsState'
import axios from 'axios' 
import {useParams} from 'react-router-dom'

function SingleBooking() { 
    const [booking, setBooking] = useState({}) 
    let params = useParams() 
    const {completeBooking} = useContext(BookingContext)

    
    useEffect(() => { 
        axios.get(`/api/booking/${params.id}`)
        .then((response) => setBooking(response.data)) 
        .catch((error) => console.log(error))
        
    }, [params.id]) 
    console.log(booking)
   

    function handleSubmit(id){
        const completed_booking = {
            booking_id: id, 
            completed_time: new Date().toLocaleTimeString()
        } 
        completeBooking(completed_booking)
    }

  return ( 
    <div>
      <h4>Booking for: {booking.name}</h4> 
      <p>Car reg no: {booking.car_reg_no}</p> 
      <p>Phone no: {booking.phone_no}</p>
      <p>Booking date: {booking.booking_date}</p> 
      <p>Booking time: {booking.booking_time}</p> 
      <p>Payment method: {booking.payment_method}</p> 
      <p>Total Price: {booking.total_price}</p> 
      <button onClick={() => handleSubmit(booking.booking_id)}>Complete Booking</button>
    </div>
    
  )
}

export default SingleBooking