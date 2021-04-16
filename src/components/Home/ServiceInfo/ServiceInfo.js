import React from 'react';
import { Link } from 'react-router-dom';


const ServiceInfo = ({ info }) => {
    return (
        <div className='col-md-4 text-center'>

            <br /> <br />
            <img style={{ height: "100px", borderRadius: '10px' }} src={info.img} alt="" /> <br />
            <h6 className='text-success mt-3 mb-3'>{info.name}</h6> <br />
            <p className='text-secondary'>{info.info}</p>
            <Link to='/appointment'> <button type="button" class="mb-5  btn btn-info text-secondary">Get An Appointmnet</button> </Link>

        </div>
    );
};

export default ServiceInfo;