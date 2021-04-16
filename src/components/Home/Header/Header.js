import React from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import HeaderMain from '../HeaderMain/HeaderMain';
import HotlineService from '../HotlineSerivce/HotlineService';
import './Header.css';

const Header = () => {
    return (
        <section>
            <Navbar></Navbar>
            <div  style={{marginTop: '85px'}} className=" top-container">
                <HeaderMain></HeaderMain>
            </div>
            <HotlineService></HotlineService>


        </section>
    );
};

export default Header;