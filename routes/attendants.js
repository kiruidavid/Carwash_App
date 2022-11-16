import {Router} from 'express' 
import {addAttendant, getAttendants} from '../controllers/attendants.js'

const attendantsRouter = Router() 

attendantsRouter.post('/', addAttendant) 
attendantsRouter.get('/', getAttendants)

export default attendantsRouter