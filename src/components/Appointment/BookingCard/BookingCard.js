import React from 'react';
import AppointmentForm from '../AppointmentForm/AppointmentForm';

const BookingCard = ({ booking, date }) => {
    const [modalIsOpen, setIsOpen] = React.useState(false);
    function openModal() {
        setIsOpen(true);
    }



    function closeModal() {
        setIsOpen(false);
    }

    return (
        <div className="col-md-3 ms-2 mb-5">
            <div className="card p-3">
                <div className="card-body text-center">
                    <h5 className="card-title text-brand-color">{booking.subject}</h5>
                    <h6 className='text-brand-color'>{booking.visitingHour}</h6>
                    <small className='text-secondary'>{booking.totalSpace} SPACES AVAILABLE</small>
                    <button onClick={openModal} className="btn btn-info text-secondary mt-3 text-uppercase">Book Appointment</button>
                    <AppointmentForm modalIsOpen={modalIsOpen} closeModal={closeModal } AppointmentName={booking.subject} AppointmentTime={booking.visitingHour} date={date}></AppointmentForm>
                </div>
            </div>
        </div>


    );
};

export default BookingCard;