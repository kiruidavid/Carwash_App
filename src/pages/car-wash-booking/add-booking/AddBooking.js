import React, {useContext,useState} from 'react' 
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
   const [checkedPlan, setCheckedPlan] = useState([]) 
   const [totalAmount, setTotalAmount] = useState(0)
   
    const { washPlans,addBookings} = useContext(BookingContext) 
    const currentDate= new Date().toDateString() 
    const currentTime=new Date().toLocaleTimeString() 

    const handleChange = (event, item) => { 
      if(event.target.checked){
        setCheckedPlan((planItem) => [...planItem, item]) 
        setTotalAmount((sum) => sum = sum + parseInt(item.amount))
      } else {
        setCheckedPlan((planItem) => planItem.filter((i) => i.plan !== item.plan)) 
        setTotalAmount((sum) => sum = sum - parseInt(item.amount))
      }

    }
   
 



 


  return ( 
    <div className='booking-container'> 
    <Sidebar/> 
   
   <div className='form-container'>
   <Navbar/> 

   <div className='heading'>
    <h2>Book for a wash</h2> 
    <button><Link to='/car-wash-bookings'><span>Check Bookings</span></Link></button>
   </div>
   <form onSubmit={handleSubmit(({name, phoneNo, carRegNo, payment_method, washing_attendant }) => {
    const new_booking = {
      name: name, 
      phone_no: phoneNo, 
      car_reg_no: carRegNo, 
      payment_method, 
      total_price: totalAmount, 
      booking_date: currentDate, 
      booking_time: currentTime, 
      attendant_id: washing_attendant
    } 
    addBookings(new_booking)
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
   
   <label>Payment Method:</label> 
   <select {...register("payment_method", {
     required:"choose payment method"
   })}> 
   <option value="">Payment Method</option>
    <option value="mPesa">M-PESA</option> 
    <option value="cash">CASH</option> 
    <option value="credit card">CREDIT CARD</option>
   
   </select>  
   <p>{errors.payment_method?.message}</p>
   
 </div>  
 <div className='formInput'> 
 {washPlans.map((item) => (
  <div><input type='checkbox' name={item.plan} onChange={(e) => handleChange(e, item)}/>{item.plan} - {item.amount}</div>
 ))}
  
</div>  
<div className='formInput'>
   
   <label>Washing Attendant:</label> 
   <select {...register("washing_attendant", {
     required:"choose attendant"
   })}> 
   {attendants.map((attendant) => (
    <option key={attendant.attendant_id} value={attendant.attendant_id}>{attendant.attendant_id} - {attendant.first_name}</option>
   ))}
   
   
   </select>  
   <p> {errors.payment_method?.message}</p>
   
 </div>  
<div > 
  <h4>KSHS. {totalAmount}</h4>
  </div> 
    
   
    
        
    <button className='submit-button' type='submit'>Add Booking</button>
   
   </form> 
   </div> 
   </div>
  )
}

export default AddBooking