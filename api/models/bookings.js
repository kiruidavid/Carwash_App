import {Sequelize, DataTypes} from 'sequelize' 
import db from '../config/db.js' 
import Attendants from './attendants.js'

const Booking = db.define('bookings', {
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
        type: DataTypes.DATE
    }, 
    booking_time: {
        type: DataTypes.TIME
    }, 
    attendant_id:{
        type: DataTypes.INTEGER
    }
}, {
    freezeTableName: true, 
    timestamps: false
}) 

export default Booking