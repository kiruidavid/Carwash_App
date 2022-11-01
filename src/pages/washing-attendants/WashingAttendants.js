import React from 'react' 
import Sidebar from '../../components/sidebar/Sidebar' 
import Navbar from '../../components/navbar/Navbar' 
import './attendants.scss'

function WashingAttendants() {
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
           
             
            </tr>
            </thead>
         <tbody>
           <tr>
             <th scope="row">1</th>
             <td>Peter</td>
             <td>Drury</td>
             <td>07214534</td>
           </tr>
         <tr>
          <th scope="row">2</th>
          <td>John</td>
          <td>Doe</td>
         <td>0986453</td>
         </tr>
          <tr>
          <th scope="row">3</th>
          <td>Mark</td>
          <td>James</td>
           <td>09754564</td>
          </tr> 
          <tr>
          <th scope="row">4</th>
          <td>Mike</td>
          <td>James</td>
           <td>09754564</td>
          </tr>
        </tbody>
</table>

       </div>


    </div>
  )
}

export default WashingAttendants