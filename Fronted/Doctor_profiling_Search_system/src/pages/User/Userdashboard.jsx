// import React from "react";
// import UserNavbar from "../../components/UserNavbar";
// import DoctorCard from "../../components/DoctorCard";
// import {useState,useEffect} from "react";
// import axios from "axios";


// function Userdashboard(){

//    const [doctors,setDoctors] = useState([]);
//     const[selectedDoctor,setSelectedDoctor] = useState(null);
//     const [specialization,setSpecialization] = useState("");

//     useEffect(() => {
//     fetchDoctors();
//   }, []); // ✅ must be an array, not object {}
  
//   const fetchDoctors = async () => {
//     try {
//       const response = await axios.get(`http://localhost:5000/api/doctors/search?specialization=${specialization}`);
//       setDoctors(response.data);
//     } catch (error) {
//       console.error("Error fetching doctors:", error);
//     }
//   };

//     return (

//         <div>
          
//           <div className="relative z-30 w-full">
//             <UserNavbar />
//              <div className="absolute inset-0 bg-black/10"></div>

//             </div>
            
          

//         <div className="absolute inset-0 bg-[url('/assets/userdashboard.jpg')] bg-cover bg-center">
//         <div className="absolute inset-0 bg-black/70"></div>
        
//       </div>

      

//       <div className="relative z-40 p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-20">
//         {doctors.map((doctor)=>(
//         <DoctorCard key={doctor._id} doctor={doctor} onViewProfile={()=>setSelectedDoctor(doctor)}/>
//         ))}
//       </div>

//       {selectedDoctor && (
//         <div className="fixed inset-0 bg-black/70 flex jutify-center items-center z-50">
//           <div className="bg-white rounded-lg shadow-lg p-6 w-96 relative">
//             <button onClick={()=>setSelectedDoctor(null)} className="absolute top-2 right-2 text-gray-600 hover:text-red-500">

//                ✖

//             </button>

//             <img src="" alt=""  className="w-full h-48 object-cover rounded-md"/>
//             <h2 className="font-bold text-xl mt-3">{selectedDoctor.name}</h2>
//             <p className="text-gray-600">{selectedDoctor.email}</p>
//             <p className="text-gray-700">{selectedDoctor.specialization}</p>
//             <p className="text-gray-500">{selectedDoctor.location}</p>
//             <p className="text-gray-600">{selectedDoctor.fees}</p>
//             <p className="text-gray-500">{selectedDoctor.startTime} - {selectedDoctor.endTime}</p>

//           <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-mbhover:bg-blue-700 transition">
//             Book Appointment
//           </button>
//           </div>

//         </div>
//       )}
//         </div>
//     )
// }
//     export default Userdashboard;

import React, { useState, useEffect } from "react";
import axios from "axios";
import DoctorCard from "../../components/DoctorCard";
import {useNavigate} from "react-router-dom";
import { Link } from "react-router-dom";


function Userdashboard() {
  const [specialization, setSpecialization] = useState("");
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // fetch doctors (with or without specialization)
  const fetchDoctors = async () => {
    try {
      setLoading(true);
      const res = await axios.get(
        `http://localhost:5000/api/doctors/search?specialization=${specialization}`
      );
      setDoctors(res.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching doctors:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDoctors(); // load on first render
  }, []);

  const handleSearch = () => {
    fetchDoctors();
  };

  const handleViewProfile = (doctor) => {
    alert(`View profile of ${doctor.name}`);
   navigate(`/doctor/${doctor._id}`)
  };

  return (
    <div className="  bg-gray-200 h-full w-full   bg-center">
      
    <div className="bg-sky-800 shadow p-4 flex flex-col sm:flex-row justify-between items-center gap-3 h-20">
      <div className="  p-4 flex flex-col sm:flex-row justify-between items-center gap-3">
        <img src="/assets/medical-appointment.png" alt="Logo" className="w-10 h-10 object-contain"/>
        <span className="font-bold text-white text-lg md:text-3xl ">MediConnect</span>
      </div>
  
      {/* Search Bar */}
      <div className="flex  gap-3 mt-3 sm:mt-0    md:justify-between  md:items-center">
        <input
          type="text"
          placeholder="Search by specialization..."
          value={specialization}
          onChange={(e) => setSpecialization(e.target.value)}
          className=" p-2  text-white border rounded-md w-64 md:w-130"
        />
        <button
          onClick={handleSearch}
          className="bg-blue-600 text-white px-6 py-2 rounded-md border hover:bg-blue-700"
        >
          Search
        </button>

      <div className="relative group">
        <button className="text-white font-semibold px-4 py-2 rounded-md bg-sky-900 hover:bg-sky-800 border-2">
          Appointments ▼
        </button>

        {/* Dropdown items */}
        <div className="absolute hidden group-hover:block bg-white text-gray-700 rounded-md shadow-lg mt-2 w-56">
          
          
          <Link
            to="/user/patient/booked"
            className="block px-4 py-2 hover:bg-gray-100"
          >
             Appointment  Status
          </Link>
        </div>
      </div>

      </div>
      </div>

      {/* Doctors List */}
     
      {loading ? (
        <p className="text-center text-gray-600">Loading doctors...</p>
      ) : doctors.length > 0 ? (
        <div className="  grid grid-cos-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-10 mb-5">
          {doctors.map((doctor) => (
            <DoctorCard
              key={doctor._id}
              doctor={doctor}
              onViewProfile={handleViewProfile}
            />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-600">No doctors found</p>
      )}
     

      <footer>
        <div className="  bg-sky-800  shadow h-20 text-white font-bold mx-auto px-4   flex flex-col justify-between items-center">
    
          <p className="text-sm mt-5">Looking for the right doctor? MediConnect makes it simple.</p>

          <p className="text-sm mb-2">
            © {new Date().getFullYear()} MediConnect | All Rights Reserved
            </p>
        </div>
      </footer>
    </div>
  );
}

export default Userdashboard;
