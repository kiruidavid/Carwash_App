import React, {createContext, useReducer} from "react"; 
import AttendantsReducer from "./AttendantsReducer";


const initialState = {
    attendants: [
        {id: 1, firstName: 'Mark',lastName:"Doe",phoneNo: "07237845", dateJoined: new Date().toLocaleString()}, 
        {id: 2, firstName: 'John',lastName:"Dame",phoneNo: "07737845", dateJoined: new Date().toLocaleString()}, 
        {id: 3, firstName: 'Sarah',lastName:"Dear",phoneNo: "07239845", dateJoined: new Date().toLocaleString()}
    ]
} 
export const AttendantsContext = createContext(initialState) 

export const AttendantsProvider = ({children}) => {
 const [state, dispatch] = useReducer(AttendantsReducer, initialState) 

 return (<AttendantsContext.Provider value={{
   attendants: state.attendants 
    
    
 }}>
    {children}
 </AttendantsContext.Provider>)
}