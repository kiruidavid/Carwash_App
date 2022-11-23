import Booking from "../models/bookings.js"; 
import Attendants from "../models/attendants.js";
import CompletedBookings from "../models/completed_bookings.js";
import {json, QueryTypes} from 'sequelize'
import db from "../config/db.js";
import sendSms from "../sms/sendSms.js";




export const addBooking = (req,res) => { 
    Booking.create(req.body)
    .then((data) => {  
        res.json(data)
       

    } ) 
    .catch((error) => res.json({message: error.message}))

} 
export const getBookings = async (req, res) => { 
  Booking.findAll({
    include:{
        model: Attendants, 
        required: true, 
        
    }
  }).then((data) => {
    res.json(data)
  }).catch((error) => {
    res.json({message: error.message})
  })
    
} 
export const getSingleBooking = async (req, res) => { 
    const id = req.params.id  
    const idExists = await Booking.findOne({ where: {booking_id: id}}) 
    if(idExists){ 
        Booking.findOne({
            where: {booking_id: id}, 
            include: Attendants, 
            required: true
        }).then((data) => {
            res.json(data)
        }).catch((error) => {
            res.json({message: error.message})
        }) 

    } else {
        res.json({message: "no record was found with that id"})
    }
} 
