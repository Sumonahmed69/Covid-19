
import Sidebar from '../../Dashboard/Sidebar/Sidebar';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import appointmentIMG from '../../../images/appointment-booking.jpg';

const AppointmentHeader = ({handleDateChange}) => { 
  


    return (
        <section>
            <Sidebar></Sidebar>
            <div className="row ">
                <div className="col-md-2  ">

                </div>
                <div  className="col-md-4 ms-5 mt-3">
                    <h2 className='text-center text-highlight-color my-4'> Appointment</h2>
                    <Calendar 
                        onChange={handleDateChange}
                        value={new Date()}
                        className='bg-info rounded'
                    />
                </div>
                <div className="col-md-4 ">
                    <img className='img-fluid m-5' src={appointmentIMG} alt=""/>

                </div>
            </div>
        </section>
    );
};

export default AppointmentHeader;