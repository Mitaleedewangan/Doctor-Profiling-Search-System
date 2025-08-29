

import './App.css'
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Register from './pages/Doctor/Register.jsx'
import Login from './pages/Doctor/Login.jsx'
import UserRegister from './pages/User/UserRegister.jsx'
import Home from './pages/Home';
import Userlogin from './pages/User/Userlogin';
import UserProfile from './pages/User/UserProfile';
import Doctordashboard from './pages/Doctor/Doctordashboard';
import Userdashboard from './pages/User/Userdashboard';
import DoctorProfile from './pages/Doctor/DoctorProfile';
import Appointment from './components/AppointmentForm';
import PatientBooked from './pages/User/PatientBooked';
import AppointmentStatus from './pages/User/AppointmentStatus';
import ConfirmAppointment from './pages/Doctor/ConfirmAppointment';


function App() {
  

  return (
    <>
     <BrowserRouter>
     <Routes>
       <Route path="/" element={<Home />} />
       <Route path="/user/login" element={<Userlogin />} />
       <Route path="/user/profile" element={<UserProfile/>}/>
       <Route path="/doctor/login" element={<Login />} />
       <Route path="/doctor/register" element={<Register />} /> 
       <Route path="/doctor/dashboard" element={<Doctordashboard />} />
        <Route path="/doctor/:id" element={<DoctorProfile />} />
        <Route path="/doctor/appointment" element={<ConfirmAppointment />} />
        <Route path="/user/register" element={<UserRegister />} />
        <Route path="/user/dashboard" element={<Userdashboard />} />
        <Route path="/appointment" element={<Appointment />} />
        <Route path="/user/patient/booked" element={<PatientBooked />} />
        <Route path="/user/patient/status" element={<AppointmentStatus />} />
        
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App;
