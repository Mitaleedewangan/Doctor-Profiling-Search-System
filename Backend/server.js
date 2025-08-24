const express = require ('express');

const connectDB = require('./db');
const cors = require('cors');
const doctorRoutes = require('./routes/doctorRoutes');
const userRoutes = require('./routes/userRoutes');
const appointmentRoutes = require('./routes/appointmentRoutes');


connectDB();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/doctors",doctorRoutes);
app.use("/api/users",userRoutes);
app.use("/api/appointments",appointmentRoutes);
app.get('/',(req,res)=>{
    res.send('MongoDB  Connected');

});

const port = process.env.PORT || 5000;

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})

