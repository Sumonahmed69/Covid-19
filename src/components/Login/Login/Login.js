import React from 'react';
import icon from '../../../images/google-icon.png';
import logo from '../../../images/image-asset.png'
import './Login.css';

const Login = () => {
    return (
        <section  className='d-flex justify-content-center bg-colors'>
            <div style={{backgroundColor: '#128c7e'}} className="w-50 d-flex align-items-center  card mt-5 text-center p-5">
                <img className='img-fluid my-3' style={{ height: '60px' }} src={logo} alt="" />
                <h3 className=''>Login With</h3>
                <button className='px-5 py-1 mx-5 mt-5 mb-2 rounded-pill bg-light border border-success' > <img className='mx-2' style={{ height: '30px' }} src={icon} alt="" /> continue whith Google</button>
                <div className='d-flex'>
                <p>Don't have an account? </p><a href="# "> create a account</a>
                </div>

            </div>
        </section>
    );
};

export default Login;