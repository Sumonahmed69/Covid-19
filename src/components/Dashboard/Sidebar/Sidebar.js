import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'
import logo from '../../../images/image-asset.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faSignOutAlt, faCalendar, faGripHorizontal, faUsers } from '@fortawesome/free-solid-svg-icons';


const Sidebar = () => {
    return (
        <div className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4" style={{ height: "100vh" }}>
            <img  style={{height: '100px',width: '100px'}} src={logo} alt=""/>
            <ul className="list-unstyled">
                <li>
                    <Link to="/dashboard" className="text-white">
                        <FontAwesomeIcon icon={faGripHorizontal} /> <span>Dashboard</span>
                    </Link>
                </li>
                <li>
                    <Link to="/appointment" className="text-white">
                        <FontAwesomeIcon icon={faCalendar} /> <span>Appointment</span>
                    </Link>
                </li>
                <li>
                    <Link to="/patients" className="text-white">
                        <FontAwesomeIcon icon={faUsers} /> <span>Review</span>
                    </Link>
                </li>
                
                
            </ul>
            <div>
                <Link to="/" className="text-white"><FontAwesomeIcon icon={faSignOutAlt} /> <span>Home</span></Link>
            </div>
        </div>
    );
};

export default Sidebar;