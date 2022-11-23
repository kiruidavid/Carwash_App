import React, {useState,useContext, useEffect} from 'react' 
import axios from 'axios'
import Sidebar from '../../../../components/sidebar/Sidebar' 
import Navbar from '../../../../components/navbar/Navbar'


function CompletedBookings() { 
    const [completedBookings, setCompletedBookings] = useState([])
    function getCompletedBookings(){ 
        axios.get("/api/completedBooking") 
        .then((response) => setCompletedBookings(response.data)) 
        .catch((error) => console.log(error))

    } 
    useEffect(() => {
        getCompletedBookings()
    }, []) 
    console.log(completedBookings)
  return (
    <div className='bookings-container'>
    <Sidebar/> 
    <div className='bookings-table'> 
     <Navbar/> 
     <div className='heading'>
        <h2>Bookings </h2> 
       
      </div>
     <table className="table table-striped">
<thead>
<tr>
  
  <th scope="col">Name</th>
  <th scope="col">Phone Number</th>
  <th scope="col">Car Reg Number</th> 
  <th scope="col">Wash Attendant</th> 
  <th scope="col">Booking Date  </th>
  <th scope="col">Booking Time</th>  
  <th scope="col">Completed Time</th>
  <th scope="col">Total Price</th>

</tr>
</thead>
<tbody> 
{completedBookings.map((item) => (
    <tr>
      <td>{item.booking.name}</td> 
      <td>{item.booking.phone_no}</td>    
      <td>{item.booking.car_reg_no}</td>  
      <td>{item.booking.attendant.first_name}</td>  
      <td>{item.booking.booking_date}</td>  
      <td>{item.booking.booking_time}</td>  
      <td>{item.completed_time}</td>  
      <td>{item.booking.total_price}</td>  
    </tr>
))}

 
 

</tbody>


</table>

    </div>
</div>
  )
}

export default CompletedBookings