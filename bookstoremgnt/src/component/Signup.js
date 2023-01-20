import axios from 'axios';
import React,{useState} from 'react';
import {
    Link
      } from "react-router-dom";

// singing up with nanme, email, and possword
const Signup = () => {
    let [data, setData] = useState({});

    const handleChange = (e) => {
        setData({
            ...data,
         [e.target.name] : e.target.value
     })
    }
    console.log(data);

    async function sendData() {
        let res = await axios.post('/user',{data});
        console.log(res.data)
    }
    return (
        <div>
            <input type="text" placeholder='username' name='name' onChange={handleChange}/>
            <input type="text" placeholder='email' name='email'  onChange={handleChange}/>
            <input type="text" placeholder='password' name='password' onChange={handleChange}/>
            <input type="submit" onClick={sendData} />
            <Link to="/">
            <p>Are you register user ? login here</p>
            </Link>

        </div>
    );
}

export default Signup;
