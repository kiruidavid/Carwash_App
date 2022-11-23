import {Router} from 'express' 
import {addBooking, getBookings, getSingleBooking} from '../controllers/booking.js'
const bookingRouter = Router() 

bookingRouter.post('/', addBooking) 
bookingRouter.get('/', getBookings)  
bookingRouter.get('/:id', getSingleBooking) 
//bookingRouter.get('/complete-booking', getCompletedBookings)
 

//bookingRouter.get('/complete-booking/:id', getSingleCompletedBooking)*/

export default bookingRouter