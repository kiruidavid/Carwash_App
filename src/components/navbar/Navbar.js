import React from 'react' 

import {BsGlobe2, BsFillMoonFill, BsSearch, BsCalendarFill} from 'react-icons/bs' 
import {AiOutlineUnorderedList} from 'react-icons/ai' 
import {CgProfile} from 'react-icons/cg'
import './navbar.scss'

function Navbar() {
  return (
    <div className='navbar'>
        <div className='search'>
            <input type='text' placeholder='Search here'/> 
            <BsSearch />
        </div> 
        <div className='icons-list'> 
        <div className='icons'>  
        <BsGlobe2 color={'red'}/> English
        </div> 
        
        <div className='icons'> 
        <AiOutlineUnorderedList color={'green'}/>

        </div> 
        <div className='icons'> 
        <CgProfile color={'blue'}/>

        </div> 
        <div className='icons'> 
        <BsCalendarFill/>
        {
          new Date().toLocaleString()
        }

        </div>

        </div>
    </div>
  )
}

export default Navbar