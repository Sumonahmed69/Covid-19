import React from 'react';

const AppointmentByDate = ({appointments}) => {
    return (
        <div >
            <h4>Appointment :  {appointments.length}</h4>

            {
                appointments.map(appointmentInfo => <li key={appointmentInfo._id}>{appointmentInfo.name} {appointmentInfo.email} </li>)
            }
        </div>
    );
};

export default AppointmentByDate;