import {Sequelize} from 'sequelize' 

const db = new Sequelize('carwash_trial', 'postgres', 'kak315t', {
    host: 'localhost', 
    dialect:'postgres'
}) 
export default db