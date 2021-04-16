import React from 'react';
import BookingCard from './../BookingCard/BookingCard';


const bookingData = [
    {
        _id: '5e8df50be6e8231764dc23de',
        id: 1,
        subject: 'Covid-19 Test',
        visitingHour: '8:00 AM - 5:00 PM',
        totalSpace: 1000
    },
    {
        _id: '5e8df578e6e8231764dc23df',
        id: 2,
        subject: 'Vaccintion',
        visitingHour: '9:00 AM - 1:00 PM',
        totalSpace: 1000
    },
    {
        _id: '5e8df5aee6e8231764dc23e0',
        id: 3,
        subject: 'Movement Pass',
        visitingHour: '6:00 AM - 9:00 AM',
        totalSpace: 1500
    },
    {
        _id: '5e8df63be6e8231764dc23e1',
        id: 4,
        subject: 'Movement Pass',
        visitingHour: '9:00 AM - 12:00 PM',
        totalSpace: 1500
    },
    {
        _id: '5e8df68de6e8231764dc23e2',
        id: 5,
        subject: 'Health Advice',
        visitingHour: '9:00 AM - 1:00 PM',
        totalSpace: 1000
    },
    {
        _id: '5e8df6a0e6e8231764dc23e3',
        id: 6,
        subject: 'Online Doctor',
        visitingHour: '8:00 AM - 9:00 PM',
        totalSpace: 1000
    }
]

const BookAppointment = ({ date }) => {
    return (
        <section>
            <h2 className="ms-5 mt-5 text-center">Available Appointment on {date.toDateString()}</h2>
            <div style={{marginLeft: '220px'}} className="row  mt-5">
                {
                    bookingData.map(booking => <BookingCard booking={booking} date={date} key={booking.id}></BookingCard>)
                }
            </div>
        </section>
    );
};

export default BookAppointment;