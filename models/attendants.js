import {Sequelize, DataTypes} from 'sequelize' 
import db from '../config/db.js' 
import Booking from './bookings.js'

const Attendants = db.define('attendants', { 
    attendant_id: { 
        type: DataTypes.INTEGER, 
        autoIncrement: true,
        primaryKey: true, 

    },
    first_name: {
        type: DataTypes.STRING, 

    }, 

    last_name: {
        type: DataTypes.STRING, 
        
    }, 
    phone_number: {
        type: DataTypes.STRING
    }, 
  
    date_joined: {
        type: DataTypes.DATEONLY
    }, 
   
    
}, {
    freezeTableName: true, 
    timestamps: false
}) 



export default Attendants