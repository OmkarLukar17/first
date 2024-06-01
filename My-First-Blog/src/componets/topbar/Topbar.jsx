import React, { useEffect, useState } from "react";
import "./topBar.css";
import { Link } from "react-router-dom";
import axios from "axios";

function TopBar(props) {
  const [user, setuser] = useState();

  async function logOutStatuss() {
    const loginStatus = await axios.get("http://localhost:5000/logOutStatuss");
    console.log(loginStatus.data.rows[0].loginstatus);
    if (loginStatus.data.rows[0].loginstatus) {
      setuser(true);
    }
  }

  useEffect(() => {
    logOutStatuss();
  }, []);

  async function logOutStatus() {
    window.location.reload();

    const loginStatus = await axios.get("http://localhost:5000/logOutStatus");
    console.log(loginStatus.data.rows[0].loginstatus);
    setuser(false);
  }
  return (
    <div className="top">
      <div className="topLeft">
        <i className=" topIcon fa-brands fa-square-facebook"></i>
        <i className=" topIcon fa-brands fa-square-x-twitter"></i>
        <i className=" topIcon fa-brands fa-square-instagram"></i>
        <i className=" topIcon fa-brands fa-square-whatsapp"></i>
      </div>
      <div className="topCenter">
        <ul className="toplist">
          <li className="topListItem">
            <Link to="/" className="link">
              HOME
            </Link>
          </li>
          <li className="topListItem">
            <Link to="/write" className="link">
              WRITE
            </Link>
          </li>
          <li className="topListItem">
            <Link to="/about" className="link">
              ABOUT
            </Link>
          </li>
          <li className="topListItem">
            <Link to="/contact" className="link">
              CONTACT
            </Link>
          </li>
          <li className="topListItem" onClick={logOutStatus}>
            {user && "LOGOUT"}
          </li>
        </ul>
      </div>
      <div className="topRight">
        {user ? (
          <Link to="/setting" className="link">
            {" "}
            <img
              className="topImg"
              src="https://devforum-uploads.s3.dualstack.us-east-2.amazonaws.com/uploads/optimized/4X/0/3/1/031b0eafd9e889b7ed5e6aee6c63fb1b1b157e82_2_498x500.jpeg"
              alt="Profile"
            />
          </Link>
        ) : (
          <ul className="toplist">
            <li className="topListItem">
              <Link to="/login" className="link">
                LOGIN
              </Link>
            </li>

            <li className="topListItem">
              <Link to="/register" className="link">
                REGISTER
              </Link>
            </li>
          </ul>
        )}

        <i className=" topSearchIcon fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  );
}
export default TopBar;
