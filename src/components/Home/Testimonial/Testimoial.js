import React from 'react';
import TestimonialData from './../TestimonialData/TestimonialData';
import userReview1 from '../../../images/Ellipse 1.png';
import userReview2 from '../../../images/Ellipse 2.png';
import userReview3 from '../../../images/Ellipse 3.png';

const Testimoial = () => {

    const testimonialData = [
        {
            quote : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ',
            name : 'Wilson Harry',
            from : 'California',
            img : userReview1
        },
        {
            quote : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ',
            name : 'Ema Gomez',
            from : 'California',
            img : userReview2
        },
        {
            quote : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ',
            name : 'Aliza Farari',
            from : 'California',
            img : userReview3
        }
    ]

    return (
        <section className="testimonials my-5 py-5">
           <div className="container">
               <div  className="section-header text-brand-color text-center">
                   <h5 className="text-primary text-uppercase">Testimonial</h5>
                   <h1>What Our Patients <br/> Says </h1>
               </div>
               <div className="card-deck mt-5 row">
                    {
                        testimonialData.map(testimonial => <TestimonialData testimonial={testimonial} key={testimonial.name}/>)
                    }
                </div>
           </div>
       </section>
    );
};

export default Testimoial;