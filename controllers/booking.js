import Booking from "../models/bookings.js"; 
import CompletedBookings from "../models/completed_bookings.js";
import {QueryTypes} from 'sequelize'
import db from "../config/db.js";




export const addBooking = (req,res) => { 
    Booking.create(req.body)
    .then(res.json({message: "new booking is added"})) 
    .catch((error) => res.json({message: error.message}))

} 
export const getBookings = async(req, res) => {
    const bookings = await db.query("select bookings.id,name,phone_no,car_reg_no, payment_method,total_price, booking_date,booking_time, first_name as attendant_name from bookings inner join attendants on bookings.attendant_id = attendants.id;", 
    {
        model: Booking, 
        mapToModel: true
    }) 
    if(!bookings){
        res.json({message: "no bookings found"})
    }
   
    res.json(bookings)
} 
export const completeBooking = (req, res) => { 
    CompletedBookings.create(req.body) 
     .then(res.json({message: "complete booking"})) 
     .error((error) => res.json({message: error.message}))

} 
export const getCompletedBookings = async(req, res) => { 
    const completed_bookings = await db.query(" select bookings.id,name,phone_no,car_reg_no, payment_method,total_price, booking_date,booking_time, first_name as attendant_name, completed_time from bookings inner join attendants on bookings.attendant_id = attendants.id inner join completed_bookings on completed_bookings.booking_id = bookings.id;", 
    { 
        model: Booking, 
        mapToModel: true

    })
   res.json(completed_bookings)
}

 