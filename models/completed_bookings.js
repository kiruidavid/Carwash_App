import {Sequelize, DataTypes} from 'sequelize'  
import Booking from './bookings.js'
import db from '../config/db.js' 

const CompletedBookings = db.define('completed_bookings', { 
    completed_id: { 
        type: DataTypes.INTEGER, 
        autoIncrement: true,
        primaryKey: true, 

    },
    
    completed_time: {
        type: DataTypes.TIME
    }, 
   
    
}, {
    freezeTableName: true, 
    timestamps: false
}) 
Booking.hasOne(CompletedBookings, {
    foreignKey: "booking_id"
}) 
CompletedBookings.belongsTo(Booking, {
    foreignKey: "booking_id"
})


export default CompletedBookings