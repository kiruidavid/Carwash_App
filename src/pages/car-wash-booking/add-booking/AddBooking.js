import React, {useContext} from 'react' 
import {useForm} from 'react-hook-form'
import Sidebar from '../../../components/sidebar/Sidebar' 
import Navbar from '../../../components/navbar/Navbar' 
import { Link } from 'react-router-dom' 
import { BookingContext } from '../../../context/bookings/BookingsState'
import {AttendantsContext} from '../../../context/attendants/AttendantsState'

import "react-datepicker/dist/react-datepicker.css"; 
import './addbooking.scss'

function AddBooking() { 
   const {attendants} = useContext(AttendantsContext) 
   const {register,formState:{errors},handleSubmit} = useForm()
   console.log("errors: ", errors)
   
    const { addBookings} = useContext(BookingContext) 
    const currentDate= new Date().toDateString() 
    const currentTime=new Date().toLocaleTimeString()
   
 



 


  return ( 
    <div className='booking-container'> 
    <Sidebar/> 
   
   <div className='form-container'>
   <Navbar/> 

   <div className='heading'>
    <h2>Book for a wash</h2> 
    <button><Link to='/car-wash-bookings'><span>Check Bookings</span></Link></button>
   </div>
   <form onSubmit={handleSubmit((data) => { 
     const booking = {
      id: "SHUAXCAR" + Math.floor(Math.random() * 10000), 
      data, 
      currentDate, 
      currentTime
      
     
     }  
     addBookings(booking)
     console.log(booking)

   })}> 
    <div className='formInput'>
      <label>Name:</label> 
      <input {...register("name", {
        required:"Name is required", 
        pattern:{
          value:/^[A-Z][a-z-']{3,20}$\S*/, 
          message:"Name must begin a Capital letter/no whitespaces/must be 3 to 20 characters"
        }
      })}  /> 
      <p>{errors.name?.message}</p>
    </div> 
    <div className='formInput'>
      <label>Phone Number:</label> 
      <input {...register("phoneNo",{ 
        required:"Phone number is required", 
        pattern:{
          value:/^(?:254|\+254|0)?(7(?:(?:[12][0-9])|(?:0[0-8])|(9[0-2]))[0-9]{6})$/, 
          message:"Phone number is not valid/must begin with 07,254,+254"
        }

      })} /> 
       <p>{errors.phoneNo?.message}</p>
    </div> 
    <div className='formInput'> 
   
      <label>Car No Plate:</label> 
      <input {...register("carRegNo", {
        required:"Registration number is required", 
        pattern:{
          value:/^[A-Z]{3}[0-9]{3}[A-Z]{1}$\S*/, 
          message:"Registration number is not valid format is KAA343T"
        }
      })} /> 
       <p>{errors.carRegNo?.message}</p>
      
    </div> 
    <div className='formInput'>
   
      <label>Wash Attendant:</label> 
      <select {...register("attendant", {
        required:"choose attendant"
      })}> 
      <option value="">Choose Attendant</option>
       {attendants.map(attendant => (
        <option value={attendant.firstName}>{attendant.firstName}</option>
       ))}
      </select>  
      <p>{errors.attendant?.message}</p>
      
    </div>  
    <div className='formInput'>
   
   <label>Payment Method:</label> 
   <select {...register("payment_method", {
     required:"choose payment method"
   })}> 
   <option value="">Payment Method</option>
    <option value="mPesa">M-PESA</option> 
    <option value="mPesa">CASH</option> 
    <option value="mPesa">CREDIT CARD</option>
   
   </select>  
   <p>{errors.attendant?.message}</p>
   
 </div>  

    
   
    
        
    <button className='submit-button' type='submit'>Add Booking</button>
   
   </form> 
   </div> 
   </div>
  )
}

export default AddBooking