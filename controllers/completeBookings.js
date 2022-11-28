import CompletedBookings from "../models/completed_bookings.js"; 
import Booking from "../models/bookings.js"; 
import Attendants from "../models/attendants.js"; 
import sendSms from "../sms/sendSms.js";

export const completeBooking = (req, res) => { 
    CompletedBookings.create(req.body) 
                  .then((data) => {
                    res.json({message: "Booking is completed"})
                  }) 
                  .catch((error) => {
                    res.json({message: error.message})
                  })

} 
export const getCompletedBookings = async(req, res) => { 
    let phone_no 
    try {
        const completed_bookings = await  CompletedBookings.findAll({
            include: {
                model:Booking, 
                required: true, 
                include: { 
                    model: Attendants, 
                    required: true
                   
                }
            }, 
           
        }) 
        res.json(completed_bookings)
    } catch (error) { 
        res.json({message: error.message})
        
    }
   
    
} 
export const getSingleCompletedBooking = async(req, res) => {  
    const id = req.params.id 
    const idExists = await CompletedBookings.findOne({ where: {completed_id: id}})  

    if(idExists){ 
        try { 
            let phone_number
           const single_booking = await CompletedBookings.findByPk(id, {
            include: {
                model: Booking, 
                required: true, 
                right: true
            }
           })  
           phone_number = single_booking.booking.phone_no 
           let completedMessage = `Your car wash is complete. You can get your car. Thank you for trusting us` 
           sendSms(phone_number, completedMessage) 
           res.json({message: "sms sent succesfully"})
        } catch (error) { 
            res.json({message: error.message})
            
        }

    } else {
        res.json({message: "No such booking is found"})
    }
    
   
    
} 


 