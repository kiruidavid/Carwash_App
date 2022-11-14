import {Router} from 'express' 
import {addBooking, getBookings, completeBooking} from '../controllers/booking.js'
const bookingRouter = Router() 

bookingRouter.post('/', addBooking) 
bookingRouter.get('/', getBookings) 
bookingRouter.post('/complete-booking', completeBooking)

export default bookingRouter