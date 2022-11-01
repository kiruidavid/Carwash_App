import React from 'react' 
import Sidebar from '../../components/sidebar/Sidebar' 
import Navbar from '../../components/navbar/Navbar' 
import Widget from '../../components/widgets/Widget'
import './home.scss'

function Home() {
  return (
    <div className='home' id='home'>
      <Sidebar/>
      <div className='home-container'>
        <Navbar/>
        <div className='widgets'> 
      
        <Widget type='Daily Bookings'/> 
        <Widget type='Bookings'/> 
      

        </div>
      </div>
    </div>
  )
}

export default Home