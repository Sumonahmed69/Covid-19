import React from 'react';
import newsportal from '../../../images/newaportal.jpg';

const NewsPortal = () => {
    return (
        <section style={{backgroundColor: 'rgba(223, 186, 21, 0.226)'}} className='mt-5 d-flex align-items-center  py-5'>
            <div style={{ marginLeft: '70px' }} className="col-md-4 ">
                <img className='img-fluid  rounded' src={newsportal} alt="" />

            </div>
            <div className="col-md-4 ms-5 ">
                <h3 className='text-brand-color'>Bangladesh sees record high daily coronavirus cases amid surge</h3>
                <p className='text-secondary'>Dhaka, Bangladesh – Bangladesh has reported a record-high number of daily COVID-19 infections as the government moved to ban flights from several countries in an attempt to stem surging cases.On Thursday, 6,469 people were diagnosed with the disease in the preceding 24 hours, bringing the South Asian nation’s cumulative caseload since the beginning of the pandemic to 617,764.</p>
                <button type="button" class="text-white btn btn-primary">Explore</button>

            </div>

        </section>
    );
};

export default NewsPortal;