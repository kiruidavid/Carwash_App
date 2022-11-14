import {Sequelize, DataTypes} from 'sequelize' 
import db from '../config/db.js' 

const CompletedBookings = db.define('completed_bookings', {
    
    booking_id: {
        type: DataTypes.INTEGER, 
        
    }, 
    completed_time: {
        type: DataTypes.TIME
    }, 
   
    
}, {
    freezeTableName: true, 
    timestamps: false
}) 

export default CompletedBookings