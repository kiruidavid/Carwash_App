import React, {useContext, useEffect} from 'react' 
import Sidebar from '../../components/sidebar/Sidebar' 
import Navbar from '../../components/navbar/Navbar'  
import Attendant from './Attendant'
import { AttendantsContext } from '../../context/attendants/AttendantsState'
import './attendants.scss'

function WashingAttendants() { 
  const { getAttendant, attendants} = useContext(AttendantsContext) 
 
  
  return (
    <div className="washing-attendants"> 
       <Sidebar/> 
       <div className='attendants-table'> 
         <Navbar/>
         <table className="table table-striped">
          <thead>
            <tr>
             <th scope="col">#</th>
             <th scope="col">First</th>
             <th scope="col">Last</th>
             <th scope="col">Phone Number</th> 
             <th scope="col">Date Joined</th>
           
             
            </tr>
            </thead>
         <tbody> 
          {attendants.map((attendant) => (
            <Attendant key={attendant.id} attendant={attendant}/>
          ))}
         
        </tbody>
</table>

       </div>


    </div>
  )
}

export default WashingAttendants