import React ,{useState} from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";

function  UserRegister(){
    const navigate = useNavigate();
    const[formData,setFormData] = useState({

        name:"",
        email:"",
        password:"",
        role:"patient",
        location:{
        state:"",
        city:"",
        pincode:"",
        }
    });

    const handleChange =(e)=>{
        setFormData({
            ...formData,
            [e.target.name]:e.target.value,
        });
    };

    const handleSubmit = async(e)=>{
       e.preventDefault();

       try{
      const res = await axios.post("http://localhost:5000/api/users/register", formData);

        console.log(res.data);
        alert(res.data.message || "registered successfully");
        navigate('/user/login');
       }
       catch(error){
        console.log(error);
           alert("Registration Failed");

       }
       }
    

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-200">
            <div  className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-lg">
                <h2 className="text-2xl font-bold text-center mb-6">User Registration</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <input type="text" name="name" placeholder="Enter Your name"  className="w-full px-4 py-2 border rounded-lg" onChange={handleChange}/>
                    <input type="email" name="email" placeholder="Enter Your email" className="w-full px-4 py-2 border rounded-lg" onChange={handleChange}/>
                    <input type="password" name="password" placeholder="Enter Your password" className="w-full px-4 py-2 border rounded-lg" onChange={handleChange}/>
                    <input type="text" name="role" placeholder="Enter Your Role" className="w-full px-4 py-2 border rounded-lg" onChange={handleChange}/>
                    <input type="text" name="location.state" placeholder="Enter Your State"  className="w-full px-4 py-2 border rounded-lg" onChange={handleChange}/>
                    <input type="text" name="location.city" placeholder="Enter Your City"  className="w-full px-4 py-2 border rounded-lg" onChange={handleChange}/>
                    <input type="text" name="location.pincode" placeholder="Enter Your Pincode"  className="w-full px-4 py-2 border rounded-lg" onChange={handleChange}/>

                    <button type="submit" className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition" >Register</button>
                </form>

                <p>If Already have an account?{" "} <span className="text-blue-600 cursor-pointer" onClick={()=>navigate('/user/login')}>Login Here</span></p>
            </div>
        </div>
    )
}

export default UserRegister;