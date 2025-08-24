const Appointment = require("../models/appointmentModel");

exports.bookAppointment = async(req,res)=>{
    try{
        const appointment = await Appointment.create({
            ...req.body,
        patientId:req.user._id,});
        res.status(201).json(appointment);
    }
    catch(err){
        res.status(400).json({message:"Error booking appointment",error:err.message});

    }
};


exports.getAppointment = async(req,res)=>{
    try{
      const appointments = await Appointment.find()
      .populate("doctor", "name specialization")
      
      res.json(appointments);
    }
    catch(err){
        res.status(400).json({error:err.message});
    }
};


exports.updateStatus = async(req,res)=>{
    try{
        const{id}= req.params;
        const{status} = req.body;   
        
        if(!["Confirmed","Cancelled"].includes(status)) {
            return res.status(400).json({message:"Invalid status"});
        }
        const updated = await Appointment.findByIdAndUpdate(id,{status},{new:true});

        if(!updated) return res.status(404).json({message:"Appointment not found"});

        res.json({message:`Appointment ${status}` , appointment:updated});
    }
    catch(err) {
        res.status(400).json({error:err.message});
    }
};

exports.confirmAppointment = async(req,res)=>{
    try{
        const {id} = req.params;

        const appointments = await Appointment.find({
            _id:id,
            status:"Confirmed"
        }).populate("doctor","name specialization");

        if(!appointments || appointments.length===0){
            return res.status(404).json({message:" No confirmed Appointment found"});
        }
        res.json(appointments);
    }
    catch(err){
       res.status(500).json({message:"Error confirming appointment",error:err.message});
    }
}

exports.getPatientAppointment = async(req,res)=>{
    try{
        const patientId = req.user._id;

        const appointments = await Appointment.find({patientId})
        .populate("doctor","name specialization");

        if (!appointments || appointments.length === 0) {
      return res.status(404).json({ message: "No appointments found" });
    }

       res.json(appointments);
    }
    catch(err){
        res.status(500).json({message:"Error fetching appointments",error:err.message});
    }
}