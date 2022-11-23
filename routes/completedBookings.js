import {Router} from 'express' 
import {completeBooking, getCompletedBookings} from '../controllers/completeBookings.js'
const completedBookingsRouter = Router() 

completedBookingsRouter.post('/', completeBooking)  
completedBookingsRouter.get('/',getCompletedBookings)

export default completedBookingsRouter