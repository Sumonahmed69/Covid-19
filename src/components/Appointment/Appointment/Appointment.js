import React, { useState } from 'react';
import AppointmentHeader from '../AppointmentHeader/AppointmentHeader';
import BookAppointment from '../BookAppointment/BookAppointment';


const Appointment = () => {
    const [selectDate, setSelectDate] = useState(new Date())
    const handleDateChange = data => {
        setSelectDate(data);
    }
    return (
        <section>
            <AppointmentHeader  handleDateChange={handleDateChange}></AppointmentHeader>
            <BookAppointment date={selectDate}></BookAppointment>
           
        </section>
    );
};

export default Appointment;