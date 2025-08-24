import { useEffect, useState } from "react";
import axios from "axios";

function AppointmentStatus() {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/appointments/user/getappointment")
      .then(res => setAppointments(res.data));
  }, []);

  return (
   <div className=" bg-gradient-to-r from-blue-400 to-sky-200">
    <div className="p-6 max-w-3xl mx-auto  ">
  <h2 className="text-2xl font-bold mb-6 text-center">My Booked Appointments</h2>
  <div className="space-y-6   ">
    {appointments.map((appt) => (
      <div
        key={appt._id}
        className="border border-gray-300 rounded-md  bg-white-700 shadow bg-white/55 "
      >
        {/* Date + Time Row */}
        <div className="grid grid-cols-2 border-b">
          <div className="p-3 border-r">
            <p className="font-semibold text-gray-700">Date</p>
            <p>{new Date(appt.date).toLocaleDateString()}</p>
          </div>
          <div className="p-3">
            <p className="font-semibold text-gray-700">Time</p>
            <p>{appt.time}</p>
          </div>
        </div>

        {/* Doctor + Speciality Row */}
        <div className="grid grid-cols-2 border-b">
          <div className="p-3 border-r">
            <p className="font-semibold text-gray-700">Doctor</p>
            <p>{appt.doctor?.name}</p>
          </div>
          <div className="p-3">
            <p className="font-semibold text-gray-700">Speciality</p>
            <p>{appt.doctor?.specialization || "N/A"}</p>
          </div>
        </div>

        {/* Address Row */}
        <div className="grid grid-cols-2 border-b ">
        <div className="border-r">
          <div className="p-3">
            <p className="font-semibold text-gray-700">Patient Name</p>
            <p>{appt.patientName}</p>
          </div>
        </div>
        <div className="border-r">
          <div className="p-3">
            <p className="font-semibold text-gray-700">Status</p>
            <p>{appt.status}</p>
          </div>
        </div>

        </div>

        {/* Reason Row */}
        <div>
          <div className="p-3">
            <p className="font-semibold text-gray-700">Reason for Visit</p>
            <p>{appt.notes}</p>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>
</div>

  );
}
export default AppointmentStatus;
