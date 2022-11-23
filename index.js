import express from 'express' 
import cors from 'cors'
import bookingRouter from './routes/booking.js' 
import attendantsRouter from './routes/attendants.js'
import completedBookingsRouter from './routes/completedBookings.js'
import db from './config/db.js' 
import dotenv from 'dotenv'  

dotenv.config()



const app = express() 

db.authenticate().then(() => {
    console.log('database is connected')
}).catch((error) => {
    console.log(error)
}) 
db.sync({alter: true}).then(() => {
    console.log('database is synced and up to date')
}).catch((error) => {
    console.log(error.message)
})

app.use(cors()) 
app.use(express.json()) 

const PORT = process.env.PORT 

app.use('/api/booking', bookingRouter) 
app.use('/api/completedBooking', completedBookingsRouter)
app.use('/api/attendants', attendantsRouter)

app.listen(PORT, () => {
    console.log(`app is live in port ${PORT} `)
})
