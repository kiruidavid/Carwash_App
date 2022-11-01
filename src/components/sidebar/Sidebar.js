import React from 'react' 
import {MdBlurCircular, MdDashboard, MdLocalCarWash} from 'react-icons/md' 
import {FiUsers, FiLogOut} from 'react-icons/fi' 
import {TiBusinessCard} from 'react-icons/ti' 

import {CgProfile} from 'react-icons/cg' 
import {Link} from 'react-router-dom'
import './sidebar.scss'


function Sidebar() {
  return (
    <div className='sidebar'> 
       <div className='top'> 
        <div className='logo'><MdBlurCircular size={'35px'}/><span>Shua Management System</span></div>

       </div> 
       <hr/>
       <div className='nav-list'>
        <ul> 
         
            <li><MdDashboard className='icons'/> <Link to='/'><span>Dashboard</span></Link></li> 
            <hr/>
           
          
           
         
            <li><MdLocalCarWash className='icons'/><Link to='/add-car-booking'><span>Book Car Wash</span></Link></li> 
           
            <li><TiBusinessCard className='icons'/><Link to='/car-wash-bookings'><span>Check Car Wash Bookings</span></Link></li> 
            <li><FiUsers className='icons'/><Link to='/wash-attendants'><span>Washing Attendants</span></Link></li>
            
            <li><CgProfile className='icons'/><span>Profile</span></li>  
            <li><FiLogOut className='icons'/><span>Logout</span></li>  
       </ul>

       </div> 
   

      
        
    </div>
  )
}

export default Sidebar