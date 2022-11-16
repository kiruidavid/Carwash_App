import React, {useContext}from 'react' 
import Sidebar from '../../../../components/sidebar/Sidebar' 
import Navbar from '../../../../components/navbar/Navbar'
import { BookingContext } from '../../../../context/bookings/BookingsState'

function BookingsCompleted() { 
    const { completedBookings} = useContext(BookingContext) 
    console.log(completedBookings)
  return (
    <div> 
       <div className='bookings-container'>
        <Sidebar/> 
        <div className='bookings-table'> 
         <Navbar/> 
         <div className='heading'>
            <h2>Completed Bookings </h2> 
            
          </div>
         <table className="table table-striped">
  <thead>
    <tr>
      
      <th scope="col">Name</th>
      <th scope="col">Phone Number</th>
      <th scope="col">Car Reg Number</th> 
      <th scope="col">Wash Attendant</th> 
      <th scope="col">Payment Method</th>
      <th scope="col">Booking Time</th> 
      <th scope="col">Completed Time</th> 
      <th scope="col">Total Price</th> 

    </tr>
  </thead>
   <tbody> 
    {completedBookings.map((item) => (
        <tr>
           <td>{item.name}</td>  
           <td>{item.phone_no}</td>  
           <td>{item.car_reg_no}</td>
           <td>{item.attendant_name}</td> 
           <td>{item.payment_method}</td> 
           <td>{item.booking_time}</td> 
          <td>{item.completed_time}</td> 
          <td>{item.total_price}</td>
        </tr>
    ))}
    
     
     
 
    </tbody>
    
 
</table>

        </div>
    </div>
    </div>
  )
}

export default BookingsCompleted