import React from 'react' 

import {AiOutlineProfile} from 'react-icons/ai'
import {CiMoneyCheck1} from 'react-icons/ci'

import {GoArrowSmallUp} from 'react-icons/go'
import './widget.scss'

function Widget({type}) { 
    let amount = 10 
   

    let data 
    switch(type){
        case "Daily Bookings": 
        data={
            title: "Daily Bookings", 
            isMoney: false, 
            link: "View users", 
            icon: <AiOutlineProfile className='icon'/>
        } 
        break;  
        case 'Bookings':
        data={
            title: "Bookings", 
            isMoney: true, 
            link: "Bookings", 
            icon: <CiMoneyCheck1 className='icon'/>
        } 
        break; 
        default: 
        break;
       
    }
  return (
    <div className='widget'>
        <div className='left'>
         <span className='title'>{data.title}</span> 
         <span className='counter'>{data.isMoney && "Kshs."} {amount}</span> 
         <span className='link'>{data.link}</span>
        </div> 
        <div className='right'>
       <div className='percentage'> 
      <GoArrowSmallUp/>
       20%
       </div> 
       {data.icon} 
       </div>
      
       
    </div>
  )
}

export default Widget