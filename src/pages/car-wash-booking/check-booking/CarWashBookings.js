import React from 'react'
import Sidebar from '../../../components/sidebar/Sidebar' 
import Navbar from '../../../components/navbar/Navbar' 
import {Link} from 'react-router-dom'
import './wash-bookings.scss'

function CarWashBookings() {
  return (
    <div className='bookings-container'>
        <Sidebar/> 
        <div className='bookings-table'> 
         <Navbar/> 
         <div className='heading'>
            <h2>Bookings </h2> 
            <button><Link to='/add-car-booking'><span>Book Wash</span></Link></button>
          </div>
         <table className="table table-striped">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Phone Number</th>
      <th scope="col">Car Registration Number</th> 
      <th scope="col">Wash Attendant</th> 
      <th scope="col">Date</th>

    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>0722145654</td>
      <td>KAK 312T</td> 
      <td>Peter</td> 
      <td>{new Date().toLocaleString() + ""}</td>
    </tr>
    <tr>
      <th scope="row">2</th> 
      <td>Mark</td>
      <td>0722145654</td>
      <td>KAK 312T</td> 
      <td>Mike</td> 
      <td>{new Date().toLocaleString() + ""}</td>
      
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>John</td>
      <td>0722145654</td>
      <td>KBE 153R</td> 
      <td>John</td> 
      <td>{new Date().toLocaleString() + ""}</td>
    </tr> 
    <tr>
      <th scope="row">4</th>
      <td>Mark</td>
      <td>0722145654</td>
      <td>KAK 312T</td> 
      <td>Peter</td> 
      <td>{new Date().toLocaleString() + ""}</td>
    </tr>
  </tbody>
</table>

        </div>
    </div>
  )
}

export default CarWashBookings