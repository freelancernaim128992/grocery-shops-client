import React from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import Header from '../Header/Header';
import firebaseConfig from './firebase.config';
import { useContext } from 'react';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router';

firebase.initializeApp(firebaseConfig)
const LogIn = () => {
    const [userInfo, setUserInfo] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    const handleGoogle = () => {
        firebase.auth()
        .signInWithPopup(googleProvider)
        .then((result) => {
            const user = result.user;
            const newUserInfo = {
                email: `${user.email}`,
                photoURL: `${user.photoURL}`,
                isSigned: true
            }
            setUserInfo(newUserInfo)
            history.replace(from);
        }).catch((error) => {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ...
        });
    }
    return (
        <>
        <Header />
        <div>
            <h1>This is Login</h1>
            <button onClick={handleGoogle}>Continue With Google</button>
        </div>
        </>
    );
};

export default LogIn;