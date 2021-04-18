import React, { useContext } from 'react';
import logo from '../../../images/image-asset.png'
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';

const Navbar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    return (
        <nav style={{ backgroundColor: '#128C7E' }} className="fixed-top  navbar navbar-expand-lg navbar-light  ">
            <div className="container-fluid">
                <Link style={{ color: "#242949", fontWeight: 'bold' }} className="navbar-brand fs-4 " to="home"> <img style={{ height: '60px' }} className='mx-5 img-fluid' src={logo} alt="" /> COVID-19 Bangladesh </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse " id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto ">
                        <li className="nav-item ">
                            <Link id='home' className="nav-link ms-5 text-white " aria-current="page" to="/home">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link ms-4 text-white" to="/Services">Services</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link ms-4 text-white" to="/blog">Blog</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link ms-4 text-white" to="/dashboard">Dashboard </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link ms-4 text-white" to="/admin">Admin</Link>
                        </li>
                        <li className="nav-item">


                            <Link className="nav-link ms-4 text-white bg-dark rounded" to="/login">LOGIN</Link>
                        </li>
                        <li className="nav-item mt-1 mx-2">

                            <img style={{ height: '30px', borderRadius: '30px' }} src={loggedInUser.photoURL} alt="" />
                        </li>





                    </ul>

                </div>
            </div>
        </nav>
    );
};

export default Navbar;