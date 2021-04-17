import React from 'react';
import './SidebarAdmin.css';
import logo from '../../../images/image-asset.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt,  faListOl, faPlusSquare, faUserPlus, faTasks } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';


const SidebarAdmin = () => {
    return (
        <div className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4" style={{ height: "100vh" }}>
            <img style={{ height: '50px', width: '50px', marginLeft: '50px' }} src={logo} alt="" />
            <ul className="list-unstyled">
                <li>
                    <Link to="/oderlist" className="text-white">
                        <FontAwesomeIcon icon={faListOl} /> <span>OderLIst</span>
                    </Link>
                </li>
                <li>
                    <Link to="/addService" className="text-white">
                        <FontAwesomeIcon icon={faPlusSquare} /> <span>Add Service</span>
                    </Link>
                </li>
                <li>
                    <Link to="/makeAdmin" className="text-white">
                        <FontAwesomeIcon icon={faUserPlus} /> <span>Make Admin</span>
                    </Link>
                </li>
                <li>
                    <Link to="/manageService" className="text-white">
                        <FontAwesomeIcon icon={faTasks} /> <span>Manage Service</span>
                    </Link>
                </li>


            </ul>
            <div>
                <Link to="/" className="text-white"><FontAwesomeIcon icon={faSignOutAlt} /> <span>Home</span></Link>
            </div>
        </div>
    );
};

export default SidebarAdmin;