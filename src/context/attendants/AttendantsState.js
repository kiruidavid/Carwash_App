import React, {createContext, useState, useEffect} from "react"; 
import axios from "axios";




export const AttendantsContext = createContext() 

export const AttendantsProvider = ({children}) => { 
  const [attendants, setAttendants] = useState([]) 
  useEffect(() => {
    getAttendant()
  }, []) 
  console.log(attendants)
  function addAttendant(attendant){  
    axios.post("/api/attendants", attendant) 
         .then((response) => console.log(response)) 
         .catch((error) => console.log(error))
  } 
  function getAttendant(){ 
    axios.get("/api/attendants") 
         .then((response) => setAttendants(response.data)) 
         .catch((error) => console.log(error))

  }
 

 return (<AttendantsContext.Provider value={{ 
  addAttendant, 
  getAttendant, 
  attendants
 
    
    
 }}>
    {children}
 </AttendantsContext.Provider>)
}