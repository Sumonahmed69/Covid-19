import React from 'react';

const DoctorInfo = ({data}) => {
    return (
        <div className='col-md-4 text-center'>

        <br /> <br />
        <img className='img-fluid' style={{ height: "300px",  borderRadius: '10px',width: '200px' }} src={data.img} alt="" /> <br />
        <h6  className='text-brand-color mt-3 mb-3'>{data.name}</h6> 
        <p className='text-secondary'>{data.info}</p>
        <button type="button" class="text-white btn btn-info">{data.phone}</button>


    </div>
    );
};

export default DoctorInfo;