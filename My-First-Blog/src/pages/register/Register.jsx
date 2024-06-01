import React, { useState } from "react";
import "../../pages/register/register.css"
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';



function Register(){
    const notify = () => toast("User Successfully Registered");

    const navigates=useNavigate();
const [userDetails,setuserDetails]=useState({
        username:"",
        email:"",
        password:""
    })
function getUserData(event){
const name =event.target.name;
const value=event.target.value;
    event.preventDefault();

    setuserDetails((prevNote) => {
      return {
      ...prevNote,
        [name]: value,
      };
    });

}

async function submitRegister(event){
    setTimeout(()=>{
        notify()
    },1);
    

    navigates("/login");
    
    event.preventDefault();
    try {
        const response = await axios.post('http://localhost:5000/register', userDetails);
        // console.log(response.data); // Optionally handle the response data
        // Redirect to login page after successful registration
    } catch (error) {
        console.error('Registration failed:', error);
        // Handle error (e.g., show an error message to the user)
    }

}


    return(
<div className="register">
<ToastContainer />
    <span className="registerTitle">Register</span>
    <form className="registerForm">
        <label >
            Username
        </label>
        <input type="text" className="registerInput" placeholder="Enter your username..."  onChange={getUserData} name="username"/>
        <label   > 
            Email
        </label>
        <input type="text" className="registerInput" placeholder="Enter your email..." name="email" onChange={getUserData}/>
        <label  >Password</label>
        <input type="password"  className="registerInput"  placeholder="Enter your password..."  onChange={getUserData} name="password"/>
        <button className="registerButton" onClick={submitRegister} type="submit">Register</button>

    </form>
    <button className="registerLoginButton">
    <Link to="/login" className="link" >Login</Link> 

    
    </button>
</div>
    );
}

export default Register;