import {Sequelize, DataTypes} from 'sequelize' 
import db from '../config/db.js' 

const Attendants = db.define('attendants', {
    first_name: {
        type: DataTypes.STRING, 

    }, 

    last_name: {
        type: DataTypes.STRING, 
        allowNull: false
    }, 
    phone_number: {
        type: DataTypes.STRING
    }, 
  
    date_joined: {
        type: DataTypes.DATE
    }, 
   
    
}, {
    freezeTableName: true, 
    timestamps: false
}) 

export default Attendants