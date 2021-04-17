import React, { useContext } from 'react';
import icon from '../../../images/google-icon.png';
import logo from '../../../images/image-asset.png'
import './Login.css';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { useHistory, useLocation } from 'react-router';
import { UserContext } from '../../../App';


if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
}


const Login = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    const handleGoogleSignIn = () => {
        const provider = new firebase.auth.GoogleAuthProvider();

        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {

                const { displayName, email, photoURL } = result.user;
                const signInUser = { name: displayName, photoURL }
                setLoggedInUser(signInUser)
                history.replace(from);
                console.log(signInUser, email);

            }).catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                const email = error.email;
                const credential = error.credential;
                // ...
                console.log(errorCode, errorMessage, email, credential);
            });

    }


    return (

        <section className='d-flex justify-content-center bg-colors'>

            <div style={{ backgroundColor: '#128c7e' }} className="w-50 d-flex align-items-center  card mt-5 text-center p-5">
                
                <img className='img-fluid my-3' style={{ height: '60px' }} src={logo} alt="" />
                <h3 className=''>Login With</h3>
                <button onClick={handleGoogleSignIn} className='px-5 py-1 mx-5 mt-5 mb-2 rounded-pill bg-light border border-success' > <img className='mx-2' style={{ height: '30px' }} src={icon} alt="" /> continue whith Google</button>
                <div className='d-flex'>
                    <p>Don't have an account? </p><a href="# "> create a account</a>
                </div>

            </div>
        </section>

    );
};

export default Login;