import React, { useState } from "react";
import "./login.css"
import { Link } from "react-router-dom";
import { getValue } from "@testing-library/user-event/dist/utils";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import useremail from "../../value";
import { ToastContainer, toast } from 'react-toastify';

function Login(props){
const navigate = useNavigate();
const [clearfield,setclearfield]=useState(false);
// const[haveid,sethaveid]=useState();



    const notify = () => toast("Login Successful!");

const [loginValue,setLoginValue]=useState({
    email:"",
    password:""
})


function getValue(e){
e.preventDefault();

const {name,value}=e.target;
useremail.push(value);

setLoginValue((prevNote) => {
    return {
    ...prevNote,
      [name]: value,
    };
  });

}

async function loginUser(event){
event.preventDefault();

const responess= await axios.post("http://localhost:5000/loginUser",loginValue);
// const dataID=responess.data.getid.rows[0].id;
// console.log("Data in the login page",);
// sethaveid(responess.data.id);


const datas=responess.data.userDetails.rows[0].count;


if(datas==1){

    notify()
    setTimeout(()=>{

window.location.reload();

    },2000);
    navigate();
    props.logOuts();

}
else{
console.log("Login in Login page");

    setclearfield(true);
    toast.warn('❗ Incorrect Email ID or Password', {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });
}

// event.preventDefault();


}



    return(
        
<div className="login">
  {clearfield?<ToastContainer
position="top-center"
autoClose={3000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="dark"

/>:<ToastContainer position="top-center"
autoClose={3000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="dark"/>}


    <span className="loginTitle">Login</span>
    <form className="loginForm">
        <label>
            Email
        </label>
        <input type="text" className="loginInput" placeholder="Enter your email..." onChange={getValue} name="email" />
        <label>Password</label>
        <input type="password"  className="loginInput"  placeholder="Enter your password..." onChange={getValue} name="password"/>
        <button className="loginButton" onClick={loginUser}>Login</button>

    </form>
    <button className="loginRegisterButton">
        <Link to="/register" className="link" >Register</Link>
    </button>
</div>
    );
}

export default Login;