import {Sequelize, DataTypes} from 'sequelize' 
import {v4 as uuidv4} from 'uuid'
import db from '../config/db.js' 
import Attendants from './attendants.js'

const Booking = db.define('bookings', { 
    booking_id: { 
        type: DataTypes.INTEGER, 
        autoIncrement: true,
        primaryKey: true, 
        

    },
    name: {
        type: DataTypes.STRING, 

    }, 
    phone_no: {
        type: DataTypes.STRING, 
        allowNull: false
    }, 
    car_reg_no: {
        type: DataTypes.STRING
    }, 
    payment_method: {
        type: DataTypes.STRING
    }, 
    total_price: {
        type: DataTypes.FLOAT, 
        
    }, 
    booking_date: {
        type: DataTypes.DATEONLY
    }, 
    booking_time: {
        type: DataTypes.TIME
    }, 
    
}, {
    freezeTableName: true, 
    timestamps: false
}) 
Attendants.hasOne(Booking, {
    foreignKey: "attendant_id"
})
Booking.belongsTo(Attendants, {
    foreignKey: "attendant_id"
})

export default Booking