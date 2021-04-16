import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import NewsPortal from '../NewsPortal/NewsPortal';
import OnlineDoctor from '../OnlineDoctor/OnlineDoctor';
import Services from '../Seriveces/Services';
import Testimoial from '../Testimonial/Testimoial';


const Home = () => {
    return (

       <div>
           <Header></Header>
           <Services></Services>
           <NewsPortal></NewsPortal>
           <OnlineDoctor></OnlineDoctor>
           <Testimoial></Testimoial>
           <Footer></Footer>
       </div>
       

    );
};

export default Home;