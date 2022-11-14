import Attendants from "../models/attendants.js"; 

export const addAttendant = (req,res) => { 
    Attendants.create(req.body)
    .then(res.json({message: "attendant added"})) 
    .catch((error) => res.json({message: error.message}))

} 
export const getAttendants = async (req,res) => {
    const attendants = await Attendants.findAll()  
    res.json(attendants)

}