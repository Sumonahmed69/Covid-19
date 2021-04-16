import React from 'react';
import logo from '../../../images/image-asset.png'
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav style={{ backgroundColor: '#128C7E' }} class="fixed-top  navbar navbar-expand-lg navbar-light  ">
            <div class="container-fluid">
                <Link style={{ color: "#242949", fontWeight: 'bold' }} class="navbar-brand fs-4 " to="home"> <img style={{ height: '60px' }} class='mx-5 img-fluid' src={logo} alt="" /> COVID-19 Bangladesh </Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse " id="navbarSupportedContent">
                    <ul class="navbar-nav ms-auto ">
                        <li class="nav-item ">
                            <Link id='home' class="nav-link ms-5 text-white " aria-current="page" to="/home">Home</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link ms-5 text-white" to="/Services">Services</Link>
                        </li>

                        <li class="nav-item">
                            <Link class="nav-link ms-5 text-white" to="/blog">Blog</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link ms-5 text-white" to="/dashboard">Dashboard </Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link ms-5 text-white" to="/admin">Admin</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link ms-5 text-white bg-dark rounded" to="/login">LOGIN</Link>
                        </li>



                    </ul>

                </div>
            </div>
        </nav>
    );
};

export default Navbar;