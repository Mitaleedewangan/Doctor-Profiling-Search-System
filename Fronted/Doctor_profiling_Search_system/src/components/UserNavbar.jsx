import React from "react";




function UserNavbar(){
    return (
    <div className="bg-gray-100 p-3 rounded-md flex flex-col sm:flex-row  sm:justify-between sm:items-center   sm:h-17 gap-3  md:justify-between md:items-center md:w-full">

  <div className="flex items-center gap-2">
    <img src="/assets/medical-appointment.png" alt="Logo" className="w-10 h-10 object-contain"/>
    <span className="font-bold text-gray-800 text-lg md:text-2xl ">MediConnect</span>
  </div>

  <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 w-full sm:w-auto md:justify-center md:items-center">
   
    <input 
      type="text" 
      placeholder="Search Doctor by Name"
      className="w-full sm:w-64 p-2 border rounded-md text-sm sm:text   md:w-lg  md:items-center  "
    />

    
    <select className="w-full sm:w-48 p-2 border rounded-md text-sm sm:text-base relative z-10">
      <option >Specialization</option>
      <option >Dentist</option>
      <option >Cardiologist</option>
      <option>Neurologist</option>
    </select>

   
    <button 
      className="w-full  px-4 py-2 bg-blue-500 text-white rounded-md text-sm sm:text-base hover:bg-blue-800 transition sm:w-auto sm:h-14 md:h-auto"
    >
      Apply Filters
    </button>
  </div>
</div>

    )
}

export default UserNavbar;