import React from "react";
import "./sidebar.css";


function Sidebar(){
    return <div className="sidebar">
        <div className="sidebarItem">
            <span className="sidebarTitle">
                ABOUT ME
            </span>
            <img className="sidebarImg"  src="https://t3.ftcdn.net/jpg/02/43/12/34/240_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg" alt="Myimageishere" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse facilis ipsa officiis, nisi nostrum nesciunt commodi cumque facere enim mollitia quo laborum dolor libero veniam,</p>
       
        </div>
        <div className="sidebarItem">
        <span className="sidebarTitle">
                CATEGORIRES
            </span>
            <ul className="sidebarList">
                <li className="sidebarListItem">Life</li>
                <li className="sidebarListItem">Music</li>
                <li className="sidebarListItem">style</li>
                <li className="sidebarListItem">Sport</li>
                <li className="sidebarListItem">Tech</li>
                <li className="sidebarListItem">Cinema</li>
            </ul>
        </div>
        <div className="sidebarItem">
        <span className="sidebarTitle">
                FOLLOW US
            </span>
            <div className="sidebarSocial">
            <i className="sidebarIcon fa-brands fa-square-facebook"></i>
            <i className="  sidebarIcon fa-brands fa-square-x-twitter"></i>
            <i className=" sidebarIcon  fa-brands fa-square-instagram"></i>
            <i className=" sidebarIcon  fa-brands fa-square-whatsapp"></i>
             
            </div>
        </div>
    </div>
}
export default Sidebar;
