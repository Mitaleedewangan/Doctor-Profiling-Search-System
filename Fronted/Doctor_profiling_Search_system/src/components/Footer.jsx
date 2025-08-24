function Footer(){


return (

// <footer class="bg-sky-300 text-white  py-10 mt-0">
//   <div className="  ">
//     <div className="flex items-center justify-center  px-10 py-10 w-full  ">

      
//       <div className="col-md-3 col-sm-6 mb-5 ">
//         <h2 className="fw-bold">Get to Know Us</h2>
//         <ul className="list-unstyled">
//           <li><a href="#" className="text-light text-decoration-none d-block mb-2">About Us</a></li>
//           <li><a href="#" className="text-light text-decoration-none d-block mb-2">Our Mission</a></li>
//           <li><a href="#" className="text-light text-decoration-none d-block mb-2">Careers</a></li>
//           <li><a href="#" className="text-light text-decoration-none d-block mb-2">Research & Innovation</a></li>
//         </ul>
//       </div>

     
//       <div className="col-md-3 col-sm-6 mb-4">
//         <h5 className="fw-bold">Connect with Us</h5>
//         <ul className="list-unstyled">
//           <li><a href="#" className="text-light text-decoration-none d-block mb-2">Facebook</a></li>
//           <li><a href="#" className="text-light text-decoration-none d-block mb-2">Twitter (X)</a></li>
//           <li><a href="#" className="text-light text-decoration-none d-block mb-2">LinkedIn</a></li>
//           <li><a href="#" className="text-light text-decoration-none d-block mb-2">Instagram</a></li>
//         </ul>
//       </div>

   
//       <div className="col-md-3 col-sm-6 mb-4">
//         <h5 className="fw-bold">For Doctors</h5>
//         <ul className="list-unstyled">
//           <li><a href="#" className="text-light text-decoration-none d-block mb-2">Join as a Doctor</a></li>
//           <li><a href="#" className="text-light text-decoration-none d-block mb-2">Manage Your Profile</a></li>
//            <li><a href="#" className="text-light text-decoration-none d-block mb-2">Research Collaboration</a></li>
//         </ul>
//       </div>

//       <div className="col-md-3 col-sm-6 mb-4">
//         <h5 className="fw-bold">For Patients</h5>
//         <ul className="list-unstyled">
//           <li><a href="#" className="text-light text-decoration-none d-block mb-2">Find a Doctor</a></li>
//           <li><a href="#" className="text-light text-decoration-none d-block mb-2">Book an Appointment</a></li>
//           <li><a href="#" className="text-light text-decoration-none d-block mb-2">Health Records</a></li>
//           <li><a href="#" className="text-light text-decoration-none d-block mb-2">Emergency Support</a></li>
//         </ul>
//       </div>

//     </div>

//     <hr class="border-light"/>

   
//     <div className="d-flex flex-column flex-md-row justify-content-between align-items-center">
//       <div>
//         <p className="mb-0">&copy; 2025 MedConnect | All Rights Reserved</p>
//       </div>
//       <div>
//         🌍 <select className="form-select d-inline w-auto bg-dark text-light border-secondary">
//           <option>English</option>
//           <option>हिन्दी</option>
//         </select>
//         <select className="form-select d-inline w-auto bg-dark text-light border-secondary">
//           <option>India</option>
//           <option>USA</option>
//           <option>UK</option>
//         </select>
//       </div>
//     </div>
//   </div>
// </footer>

<footer  id="footer" className= " relative bg-black  mb-0 mt-60 text-white py-10">
  <div className=" max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8  ">

    
    <div>
      <h5 className="font-bold mb-3">Get to Know Us</h5>
      <ul className="space-y-2">
        <li><a href="#" className="hover:underline">About Us</a></li>
        <li><a href="#" className="hover:underline">Our Mission</a></li>
        <li><a href="#" className="hover:underline">Careers</a></li>
        <li><a href="#" className="hover:underline">Research & Innovation</a></li>
      </ul>
    </div>

   
    <div>
      <h5 className="font-bold mb-3">Connect with Us</h5>
      <ul className="space-y-2">
        <li><a href="#" className="hover:underline">Facebook</a></li>
        <li><a href="#" className="hover:underline">Twitter (X)</a></li>
        <li><a href="#" className="hover:underline">LinkedIn</a></li>
        <li><a href="#" className="hover:underline">Instagram</a></li>
      </ul>
    </div>

   
    <div>
      <h5 className="font-bold mb-3">For Doctors</h5>
      <ul className="space-y-2">
        <li><a href="#" className="hover:underline">Join as a Doctor</a></li>
        <li><a href="#" className="hover:underline">Manage Your Profile</a></li>
        <li><a href="#" className="hover:underline">Teleconsultation Setup</a></li>
        <li><a href="#" className="hover:underline">Research Collaboration</a></li>
      </ul>
    </div>

   
    <div>
      <h5 className="font-bold mb-3">For Patients</h5>
      <ul className="space-y-2">
        <li><a href="#" className="hover:underline">Find a Doctor</a></li>
        <li><a href="#" className="hover:underline">Book an Appointment</a></li>
        <li><a href="#" className="hover:underline">Health Records</a></li>
        <li><a href="#" className="hover:underline">Emergency Support</a></li>
      </ul>
    </div>

  </div>


  <div className="border-t border-white mt-8"></div>


  <div className="max-w-7xl mx-auto px-6 mt-6 flex flex-col md:flex-row justify-between items-center ">
    <p className="mb-2 md:mb-0">&copy; 2025 MedConnect | All Rights Reserved</p>
    <div className="space-x-2">
      🌍
      <select className="bg-white text-gray-800 rounded px-2 py-1">
        <option>English</option>
        <option>हिन्दी</option>
      </select>
      <select className="bg-white text-gray-800 rounded px-2 py-1">
        <option>India</option>
        <option>USA</option>
        <option>UK</option>
      </select>
    </div>
  </div>
</footer>

)
}

export default Footer;