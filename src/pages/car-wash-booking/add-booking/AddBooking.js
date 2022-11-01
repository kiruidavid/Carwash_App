import React, {useState} from 'react' 
import DatePicker from 'react-datepicker' 
import Sidebar from '../../../components/sidebar/Sidebar' 
import Navbar from '../../../components/navbar/Navbar' 
import { Link } from 'react-router-dom'
import "react-datepicker/dist/react-datepicker.css"; 
import './addbooking.scss'

function AddBooking() { 
    const [startDate, setStartDate] = useState(new Date())
  return ( 
    <div className='booking-container'> 
    <Sidebar/> 
   
   <div className='form-container'>
   <Navbar/> 

   <div className='heading'>
    <h2>Book for a wash</h2> 
    <button><Link to='/car-wash-bookings'><span>Check Bookings</span></Link></button>
   </div>
   <form> 
    <div className='formInput'>
      <label>Name:</label> 
      <input type='text' required/> 
    </div> 
    <div className='formInput'>
      <label>Phone Number:</label> 
      <input type='text' required/> 
    </div> 
    <div className='formInput'>
      <label>Car No Plate:</label> 
      <input type='text' required/> 
    </div> 
    <div className='formInput'>
      <label>Wash Attendant:</label> 
      <select name="washing attendant" id="washing-attendant">
      <option>Peter</option>
      <option>John</option>
      <option>Mike</option>
      <option>James</option>
      </select>
    </div> 
    <div className='formInput'>
      <label>Date:</label>  
      <DatePicker selected={startDate} 
      onChange={(date) => setStartDate(date)}
      showTimeSelect
      dateFormat="Pp"/>
      
    </div> 
    <div className='formInput'>
      <label>Payment Type</label> 
      <select name="payment-type" id="payment-type">
      <option>Cash</option>
      <option>M-Pesa</option>
      <option>Credit card</option>
      
      </select>
    </div> 
        
        
   

      
    
    <button className='submit-button' type='submit'>Add Booking</button>
   
   </form> 
   </div> 
   </div>
  )
}

export default AddBooking