import React, { useState } from "react";

export const AppointmentsPage = (props) => {
  // Define state variables for appointment info
  const contacts = props.contacts;
  const appointments = props.appointments;
  const addAppointment = props.addAppointment;
  // local state variables
  const [title, setTitle] = useState('');
  const [contact, setContact] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add contact info and clear data  
   
  };

  return (
    <div>
      <section>
        <h2>Add Appointment</h2>
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
      </section>
    </div>
  );
};
