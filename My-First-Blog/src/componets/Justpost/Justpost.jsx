import React, { useState } from "react";
import "./justpost.css";
import { Link } from "react-router-dom";

function Justpost(props) {
  return (
    <div className="justpost">
      <div className="card-image">
        <h5>{props.username}</h5>
        <Link to={`/post/${props.id}`} classNamAe="link">
          {" "}
          <img className="postImg" src={props.imageSrc} alt="Loading" />{" "}
        </Link>
      </div>
      <div className="postInfo">
        <span className="postTitle">
          <Link to={`/post/${props.id}`} className="link">
            {props.title}
          </Link>
        </span>
        <p className="postdisc">{props.discription}</p>
        <div className="timeNcat">
          <span className="postDate">1 hour ago</span>
          <div className="postCats">
            <span className="postCat">Music</span>
            <span className="postCat">Life</span>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Justpost;
