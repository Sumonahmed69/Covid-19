import React from 'react';
import doctor1 from '../../../images/doctor1.jpg';
import doctor2 from '../../../images/doctor2.jpg';
import doctor3 from '../../../images/doctor3.jpg';
import DoctorInfo from './../DoctorInfo/DoctorInfo';

const OnlineDoctor = () => {

    const DoctorsData = [

        {

            name: 'Dr Brain',
            img: doctor1,
            info: 'Medicine Department',
            phone: '01711223344'
        },
        {

            name: 'Dr jhon Adam',
            img: doctor2,
            info: 'Cardiology department',
            phone: '01755667788'
        },
        {

            name: 'Dr whiliam',
            img: doctor3,
            info: ' Medicine (MD, Chest)',
            phone: '01713243547'
        }
    ]

    return (
        <section>

<div className='mt-5 d-flex justify-content-center'>

<div className=' row w-75 mt-5'>

    {
        DoctorsData.map(data => <DoctorInfo data={data} key={data.name}></DoctorInfo>)
    }

</div>
</div>
        </section>
    );
};

export default OnlineDoctor;