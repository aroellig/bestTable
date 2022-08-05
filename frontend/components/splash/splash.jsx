import React from "react";
import SignUpForm from '../session/signup_form'
import LoginForm from '../session/login_form';
import {Link} from 'react-router-dom'
const Splash = () => {    
    return(
        <div className="homepage">
          <Link to="/signup" className="logoutbtn">Sign up</Link>
          <Link to="/login" className="profile">Login</Link>
          
        </div>
    )}
    export default Splash;