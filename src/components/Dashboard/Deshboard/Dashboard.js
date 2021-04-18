import React, {  useEffect, useState } from 'react';
import AppointmentByDate from '../AppointmentByDate/AppointmentByDate';
import Sidebar from '../Sidebar/Sidebar';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';


const Dashboard = () => {
    const [selectDate, setSelectDate] = useState(new Date())
    const [appointments, setAppointments] = useState([]);

    const handleDateChange = date => {
        setSelectDate(date);
    }


    useEffect( () => {
        fetch('https://murmuring-coast-49984.herokuapp.com/appointmentByDate', {
            method: 'POST',
            headers: { 'content-type': 'application/json'},
            body: JSON.stringify({date: selectDate})
        })
        .then(res=>res.json())
        .then(data => setAppointments(data))
    }, [selectDate])




    return (
        <div className='row'>
            <div className="col-md-2">
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-4 mt-5 mx-4 ">
                <h5 className='text-highlight-color text center my-3'>Search your Appointment </h5>
                <Calendar
                    onChange={handleDateChange}
                    value={new Date()}
                    className='bg-info rounded'
                />

            </div>
            <div  className="col-md-5 mt-5">
                <AppointmentByDate appointments={appointments}></AppointmentByDate>
            </div>
        </div>
    );
};

export default Dashboard;