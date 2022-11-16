import {Router} from 'express' 
import {addBooking, getBookings, completeBooking, getCompletedBookings} from '../controllers/booking.js'
const bookingRouter = Router() 

bookingRouter.post('/', addBooking) 
bookingRouter.get('/', getBookings) 
bookingRouter.post('/complete-booking', completeBooking) 
bookingRouter.get('/complete-booking', getCompletedBookings)

export default bookingRouter