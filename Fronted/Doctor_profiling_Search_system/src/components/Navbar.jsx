import Footer from "./Footer";

function Navbar(){
    return (
 

<nav className="relative flex justify-between items-center p-4 h-16 w-full z-10">
  <div className="absolute inset-0 bg-white/100 backdrop-blur-md z-[-1]"></div>
  
  <h1 className="text-4xl font-bold">Mediconnect</h1>
  <ul className="flex justify-between items-center space-x-10">
    
    <li className="cursor-pointer mr-5"><a href="#">Home</a></li>
    <li className="cursor-pointer mr-5"><a href="#footer">About</a></li>
    <li className="cursor-pointer mr-5"><a href="#footer">Contact</a></li>
    <li className="cursor-pointer mr-5"><a href="/user/patient/status"> Appointment Status</a></li>
  </ul>
</nav>

    )
}

export default Navbar;