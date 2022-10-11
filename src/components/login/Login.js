import React from 'react';
import './Login.css';
import { auth, provider } from "../api/firebase";
import { Button } from '@material-ui/core';
import { login } from "../../features/userSlice";
import { useDispatch } from "react-redux";
import { AlternateEmail } from '@material-ui/icons';


function Login() {
    const dispatch = useDispatch();

    const signIn = () => {
       auth.signInWithPopup(provider)
       .then(({user}) => {
        dispatch(login({
            displayName: user.displayName,
            email: user.email,
            photoURL: user.photoURL
        }))
       })
       .catch(error => AlternateEmail(error.message));
    }

    return (
        <div className="login">
            <div className="login__container">
                <img src="https://static.dezeen.com/uploads/2020/10/gmail-google-logo-rebrand-workspace-design_dezeen_2364_col_0.jpg" alt="google_auth" />
                <Button variant="contained" color="primary" onClick={signIn}>Login</Button>
            </div>
        </div>
    )
}

export default Login;