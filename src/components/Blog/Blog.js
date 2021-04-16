import React from 'react';
import NewsPortal from '../Home/NewsPortal/NewsPortal';
import Navbar from '../Shared/Navbar/Navbar';

const Blog = () => {
    return (
        <section style={{marginTop: '100px'}}>
            <div >
                <Navbar></Navbar>

            </div>
            <div >
                <h3 style={{color: '#242949', fontWeight: 'bold'}} className="text-center"> Covid-19 News Portals</h3>
            <NewsPortal></NewsPortal>
           
        </div>
      
        </section>
    );
};

export default Blog;