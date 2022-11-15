import React, {createContext, useState, useEffect} from "react"; 
import axios from "axios";



export const BookingContext = createContext() 

export const BookingProvider = ({children}) => { 
   const [bookings, setBookings] = useState([])
 const washPlans = [
   {
      plan: 'Exterior wash', 
      amount: 1200
   }, 
   {
      plan: 'Interior vaccum', 
      amount: 1000 
   }, 
   {
      plan: 'Engine wash', 
      amount: 1000
   }, 
   {
      plan: 'Car exterior wax', 
      amount: 1000
   }, 
   {
      plan: 'Seats Wash', 
      amount: 800
   }
 ] 
 useEffect(() => {
   getBookings()
 }, [])
 function addBookings(booking){ 
   axios.post("/api/booking", booking) 
        .then((response) => console.log(response)) 
        .catch((error) => console.log(error.message))
    
 } 
 function getBookings(){
   axios.get("/api/booking") 
        .then((response) => setBookings(response.data)) 
        .catch((error) => console.log(error.message))
 }
 return <BookingContext.Provider value={{washPlans, addBookings, getBookings, bookings}}>
    {children}
 </BookingContext.Provider>
}