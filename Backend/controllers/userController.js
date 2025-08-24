const User = require('../models/userModel');
const bcrypt= require('bcrypt');
const jwt = require('jsonwebtoken');

const generateToken = (id)=>{
    const token = jwt .sign({id},process.env.JWT_SECRET,{expiresIn:'7d'});
    return token;
};

exports.registerUser = async (req,res)=>{
    try{
        const {name,email,password,role,location}= req.body;

        // check user already exists
        const userExists = await User.findOne({email});
        if(userExists){
            return res.status(400).json({message:'User already exists'});
        }

        // hash password
       
        const hashedPassword = await bcrypt.hash(password,10);

        // create user
        const user = await User.create({
            name,
            email,
            password:hashedPassword,
            role,
            location,
        });
        
        res.status(201).json({message:'User registered successfully',user});
        }
        catch(error){
            console.error('❌ Registration Error:',error);
            res.status(500).json({message:error.message});
            }
    
        };
    

        exports.loginUser = async(req,res)=>{
            try{
                const{email,password}= req.body;

                const user = await User.findOne({email});

                if(user){
                    const isMatch = await bcrypt.compare(password,user.password);
                    if(!isMatch){
                        return res.status(400).json({message:"Invalid Credentials"});

                    }
                    const token = jwt.sign({id:user._id},process.env.JWT_SECRET,{expiresIn:"1d"});

                    res.json({message:"Login Successful",token,user:{
                        id:user._id,
                        name:user.name,
                        email:user.email,
                        role:user.role,
                        location:user.location,
                    }
                        
                    });
                   
                }
                else{
                    res.status(404).json({message:"User Not Found"});            
                }
            }
            catch(error){
                console.error("❌ Login Error:",error);
                res.status(500).json({message:error.message});  
            }
        }
        