import React from 'react';
import ServiceInfo from '../ServiceInfo/ServiceInfo';
import test from '../../../images/corona-test.jpg';
import vaccine from '../../../images/vaccine-img.jpg';
import movementPass from '../../../images/movement-pass.jpg';
import Navbar from '../../Shared/Navbar/Navbar';


const Services = () => {

    const serviceData = [

        {

            name: 'Covid-19 Vaccination',
            img: vaccine,
            info: 'Vaccination is the administration of a vaccine to help the immune system develop protection from a disease. Vaccines contain a microorganism or virus in a weakened, live or killed state, or proteins or toxins from the organism.'
        },
        {

            name: 'Covid-19 Test',
            img: test,
            info: '“Testing has been since the beginning of the pandemic key to scale-up diagnostic confirmation of COVID-19 cases and to initiate a timely response against the virus.”'
        },
        {

            name: 'Lockdown Movement Pass',
            img: movementPass,
            info: 'The Bangladesh Police have launched an app and started taking applications for movement passes that will allow citizens to stay outside for up to three hours during the strict nationwide lockdown from April 14 to April 21.'
        }
    ]

    return (
        <section className='mt-5'>
            <Navbar></Navbar>
            

            <div className='text-center'>
                <h5 className='App-link'>OUR SERVICES</h5> <br />
                <h2 className='text-brand-color' >Service We Provide</h2>
            </div>

            <div className=' d-flex justify-content-center'>

                <div className=' row w-75 mt-5'>

                    {
                        serviceData.map(info => <ServiceInfo info={info} key={info.name}></ServiceInfo>)
                    }

                </div>
                
            </div>
            
            
        </section>
    );
};

export default Services;