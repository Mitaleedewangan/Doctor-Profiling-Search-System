import React ,{useState} from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";





function Register(){

    const navigate = useNavigate();
    const[formData,setFormData] = useState({
        name:"",
        email:"",
        password:"",
        specialization:"",
        experience:"",
        mobile:"",
        hospital:"",
        location:"",
        fees:"",
        startTime:"",
        endTime:"",
    });

    const handleChange = (e)=>{
        setFormData({
            ...formData,
            [e.target.name]:e.target.value
        })
    }


    const handleSubmit =async(e)=>{
        e.preventDefault();

        try{
            const res = await axios.post('http://localhost:5000/api/doctors/register',formData);
          
            console.log(res.data);
               Swal.fire({
                          title: "Success!",
                          text: " Successful Register",
                          icon: "Success",
                          confirmButtonText: "Ok",
                          customClass: "border-0",
              
                      }).then(()=>{
                          window.location.href = "/doctor/login";
                      })
            navigate('/doctor/login');
        }
        catch(error){
           console.error("Registration Error:", error.response?.data || error.message);
            alert("Registration Failed: " + (error.response?.data?.message || "Something went wrong"));
        };
        }
    



    return (
        <div className='flex justify-center items-center min-h-screen bg-gray-200'>
            <div className='bg-white shadow-xl rounded-2xl p-8 w-full max-w-lg'>
                <h2 className="text-2xl font-bold text-center mb-6">Doctor Registration</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <input type="text"  name="name"  placeholder='Enter your name'  value={formData.name} className="w-full px-4 py-2 border rounded-lg" onChange={handleChange}/>
                    <input type="email" name="email" placeholder='Enter your email' value={formData.email}  className="w-full px-4 py-2 border rounded-lg" onChange={handleChange}/>
                    <input type="password"  name="password" placeholder='Enter your password' value={formData.password} className="w-full px-4 py-2 border rounded-lg"  onChange={handleChange}/>
                    <input type="text"  name="specialization" placeholder='Enter Specialization' value={formData.specialization} className="w-full px-4 py-2 border rounded-lg"  onChange={handleChange}/>
                    <input type="number" name="experience" placeholder='Enter your experience' value={formData.experience} className="w-full px-4 py-2 border rounded-lg"  onChange={handleChange}/>
                    <input type="text" name="mobile"  placeholder='Enter Your mobile number' value={formData.mobile} className="w-full px-4 py-2 border rounded-lg" onChange={handleChange}/>
                    <input type="text" name="hospital" placeholder='Enter your Hospital/Clinic' value={formData.hospital} className="w-full px-4 py-2 border rounded-lg" onChange={handleChange}/>
                    <input type="text" name="location" placeholder='Enter your Location' value={formData.location}  className="w-full px-4 py-2 border rounded-lg" onChange={handleChange}/>
                    <input type="text" name="fees" placeholder='Enter your Fees' value={formData.fees} className="w-full px-4 py-2 border rounded-lg" onChange={handleChange}/>
                  
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-gray-700 font-medium mb-1">Available From</label>
          <input 
            type="time" 
            name="startTime" 
            value={formData.startTime} 
            className="w-full px-4 py-2 border rounded-lg" 
            onChange={handleChange}
          />
        </div>
        <div>
          <label className="block text-gray-700 font-medium mb-1">Available Till</label>
          <input 
            type="time" 
            name="endTime" 
            value={formData.endTime} 
            className="w-full px-4 py-2 border rounded-lg" 
            onChange={handleChange}
          />
        </div>
      </div>
                    <button type='submit' className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"> Register</button>
                </form>
                <p className="mt-4 text-center"> If Already have an account?{" "} <span className="text-blue-600 cursor-pointer" onClick={()=>navigate('/')}>Login Here</span></p>
            </div>
        </div>
    )}
export default Register;