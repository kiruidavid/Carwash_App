import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from './pages/home/Home' 

import Login from './pages/login/Login' 
import AddBooking from './pages/car-wash-booking/add-booking/AddBooking';
import CarWashBookings from './pages/car-wash-booking/check-booking/CarWashBookings'; 
import WashingAttendants from './pages/washing-attendants/WashingAttendants';
import './App.css'; 


function App() {
  return (
    <div className="App">
     <Router>
      <Routes>
        <Route path='/' element={<Home/>}/> 
        <Route path='/add-car-booking' element={<AddBooking/>}/> 
        <Route path='/car-wash-bookings' element={<CarWashBookings/>}/> 
        <Route path='/wash-attendants' element={<WashingAttendants/>}/>
      </Routes>
     </Router>
    </div>
  );
}

export default App;
