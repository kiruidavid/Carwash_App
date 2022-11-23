import CompletedBookings from "../models/completed_bookings.js"; 
import Booking from "../models/bookings.js"; 
import Attendants from "../models/attendants.js";

export const completeBooking = (req, res) => { 
    CompletedBookings.create(req.body) 
                  .then((data) => {
                    res.json(data)
                  }) 
                  .catch((error) => {
                    res.json({message: error.message})
                  })

} 
export const getCompletedBookings = (req, res) => {
   
    CompletedBookings.findAll({
        include: {
            model:Booking, 
            required: true, 
            include: { 
                model: Attendants, 
                required: true
               
            }
        }, 
       
    })
       .then((data) => res.json(data)) 
       .catch((error) => res.json({message: error.message}))
}

 