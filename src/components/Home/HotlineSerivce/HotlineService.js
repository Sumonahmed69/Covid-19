import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeadset, faLaptopMedical, faPhone } from '@fortawesome/free-solid-svg-icons'

const HotlineService = () => {
    return (
        <section className=' text-center d-flex justify-content-center text-white ms-2 row mt-5'>
            <div className='col-md-2 bg-primary rounded mx-2  py-3'>
                <p className='fs-3 '> <FontAwesomeIcon icon={faHeadset} /></p>
                <h6>333</h6>
                <p>National Call Center</p>

            </div>
            <div className='col-md-2 bg-secondary rounded mx-2  py-3'>
                <p className='fs-3 '> <FontAwesomeIcon icon={faLaptopMedical} /></p>
                <h6>16263</h6>
                <p> Health Portal</p>
            </div>

            <div className='col-md-2 bg-success rounded mx-2  py-3'>
                <p className='fs-3 '> <FontAwesomeIcon icon={faPhone} /></p>
                <h6>10655</h6>
                <p>IEDCR</p>
            </div>
            <div className='col-md-2 bg-info rounded mx-2 py-3'>
                <p className='fs-3 '> <FontAwesomeIcon icon={faHeadset} /></p>
                <h6>09666777222</h6>
                <p>Covid-19 Telehealth</p>
            </div>
        </section>
    );
};

export default HotlineService;