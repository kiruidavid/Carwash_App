import React, {createContext, useReducer} from "react";
import BookingReducer from "./BookingReducer"; 

const initialState = {
    bookings: [

    ]
} 
export const BookingContext = createContext(initialState) 

export const BookingProvider = ({children}) => {
 const [state, dispatch] = useReducer(BookingReducer, initialState) 
 function addBookings(booking){
    dispatch({
        type: 'ADD_BOOKING', 
        payload: booking
    })
 }
 return (<BookingContext.Provider value={{
    bookings: state.bookings, 
    addBookings
    
 }}>
    {children}
 </BookingContext.Provider>)
}