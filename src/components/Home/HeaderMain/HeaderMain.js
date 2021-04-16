import React from 'react';
import avatar from '../../../images/reg-avatar.png';
import topBanner from '../../../images/header-banner.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarCheck } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const HeaderMain = () => {
    return (
        <main className=' d-flex  row '>
            <div className="col-md-6  p-3 ">
                <div className=" d-flex mt-5 ">
                    <img style={{ height: '80px', borderRadius: '20px' }} className='ms-5  pr-5 img-fluid' src={avatar} alt="" />
                    <h1  className='text-brand-color m-3 '> Vaccine Registration</h1>
                </div>
                <p className='ms-5 p-3 text-secondary'>First, you have to complete the online registration by verifying your national identity card and correct mobile number through this portal</p>
                <Link to="/appointment"><button style={{ marginLeft: '200px' }} type="button" class="mt-4  btn btn-info text-secondary"> <FontAwesomeIcon icon={faCalendarCheck} /> Get An Appointmnet</button> </Link>

            </div>
            <div className="col-md-6 p-5">
                <img className='img-fluid rounded' src={topBanner} alt="" />
            </div>

        </main>
    );
};

export default HeaderMain;