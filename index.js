import express from 'express' 
import cors from 'cors'
import bookingRouter from './routes/booking.js' 
import attendantsRouter from './routes/attendants.js'
import db from './config/db.js'

const app = express() 

db.authenticate().then(() => {
    console.log('database is connected')
}).catch((error) => {
    console.log(error)
})

app.use(cors()) 
app.use(express.json()) 

const PORT = process.env.PORT || 3100 

app.use('/api/booking', bookingRouter) 
app.use('/api/attendants', attendantsRouter)

app.listen(PORT, () => {
    console.log(`app is live in port ${PORT} `)
})
