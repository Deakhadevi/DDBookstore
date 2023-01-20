import React from 'react';
import {

Link

  } from "react-router-dom";
// it will be integrated login api

const Login = () => {
    return (
        <div>
            Login componenet rendering

            <Link to="/signup">
            <button>Register with us</button>
            </Link>
        </div>
    );
}

export default Login;
