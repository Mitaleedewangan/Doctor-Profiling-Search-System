    
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import {useNavigate} from "react-router-dom";

function Home() {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/user/login');
      };

      const handleClick2 = () => {
        navigate('/doctor/login');
      };

  return (
    <div className="flex flex-col min-h-screen">

      <div className="relative z-30 w-full">
        <Navbar />
      </div>

    
      <div className="   flex absolute inset-0 bg-[url('/assets/doctor.jpg')] bg-cover bg-center  ">
      
        <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
      </div>

    
      <div className=" items-center justify-center relative z-20 flex flex-col  mt-50 text-white ">
        <h1 className="text-5xl font-bold">Welcome to Mediconnect</h1>
        <button className=" h-15 w-100 mt-8 px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-lg font-medium  " onClick={handleClick}>
         Book  Appointment
        </button>
        <button className=" h-15 w-100 mt-4 px-6 py-3 bg-green-600 hover:bg-green-800  rounded-lg font-medium" onClick={handleClick2}>
           Join as a Doctor
        </button>
      </div>


      
      
   
       
       <Footer/>
      
    

    </div>
      
  );
}

export default Home;
