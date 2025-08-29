import react ,{useState} from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";


function Login(){

    const navigate = useNavigate();
    const [formData,setFormData] = useState({
        email:"",
        password:"",
    });
    const[error, setError] = useState("");

    const handleChange = (e)=>{
        setFormData({
            ...formData,
            [e.target.name]:e.target.value
        })
    }

    const handleSubmit =  async(e)=>{
        e.preventDefault();
       setError("");

       try{
        const res = await axios.post("http://localhost:5000/api/users/login",formData);

        if(res.data && res.data.token){
            localStorage.setItem("patientToken",res.data.token);
            localStorage.setItem("patientId",res.data.user._id);
            console.log(res.data.user._id);

             const patientName = res.data.user?.name || formData.email;
            localStorage.setItem("patientName",patientName);
            
        Swal.fire({
            title: "Success!",
            text: " Successful Login",
            icon: "success",
            confirmButtonText: "Ok",
            customClass: "border-0",

        }).then(()=>{
            navigate("/user/dashboard");
        })
        // ✅ Clear form after successful login
        setFormData({ email: "", password: "" });
       
       }
       else{
        setError("Login Failed");
       }
       }
       catch(error){
        alert("Login Failed");
            console.error("❌ Login Error:",error);
            setError(error.response?.data?.message || "Login Failed");
    
       }
        
    }
    return(
        <div className='flex justify-center items-center min-h-screen bg-gray-200'>
            <div className='bg-white shadow-xl rounded-2xl p-8 w-full max-w-lg'>
                <h2 className="text-2xl font-bold text-center mb-6"> User Login</h2>

            {error && (
          <p className="text-red-600 text-center mb-4">{error}</p>
        )}

                <form  onSubmit={handleSubmit} className="space-y-4">
                    <input type="email"  name="email" placeholder='Enter your email' className="w-full px-4 py-2 border rounded-lg" onChange={handleChange}/>
                    <input type="password"  name ="password" placeholder='Enter your password' className="w-full px-4 py-2 border rounded-lg" onChange={handleChange}/>
                    <button type='submit' className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"> Login</button>
                </form>
                <p className="mt-4 text-center"> Don't have an account?{" "} <span className="text-blue-600 cursor-pointer" onClick={()=>navigate('/user/register')}>Register Here</span></p>
            </div>
        </div>
    )
}


export default Login;