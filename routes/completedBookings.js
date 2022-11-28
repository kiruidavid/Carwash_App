import {Router} from 'express' 
import {completeBooking, getCompletedBookings, getSingleCompletedBooking} from '../controllers/completeBookings.js'
const completedBookingsRouter = Router() 

completedBookingsRouter.post('/', completeBooking)  
completedBookingsRouter.get('/',getCompletedBookings) 
completedBookingsRouter.get('/:id',getSingleCompletedBooking)

export default completedBookingsRouter