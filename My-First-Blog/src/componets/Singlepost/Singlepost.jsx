import React, { useEffect } from "react";
import "./singlepost.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

function Singlepost(props) {
  const navigate = useNavigate();

  const [datas, setData] = useState({
    title: "",
    discription: "",
    image: "",
  });

  async function getdata() {
    try {
      const responsse = await axios.get(
        `http://localhost:5000/singlepost/${props.index}`
      );

      console.log(
        "I am a original respones from the data",
        responsse.data.rows[0]
      );

      setData((prevNote) => {
        return {
          ...prevNote,
          title: responsse.data.rows[0].title,
          discription: responsse.data.rows[0].discription,
          image: responsse.data.rows[0].image,
        };
      });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  useEffect(() => {
    getdata();
  }, [props.index]);

  function edit() {
    props.onEdit();
    navigate("/edit");
  }
  async function deletes() {
    const responsse = await axios.get(
      `http://localhost:5000/deletepost/${props.index}`
    );
    console.log(responsse);
    navigate("/");
  }
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img src={datas.image} alt="Update Post" className="singlePostImg" />
        <h1 className="singlePostTitle">
          {datas.title}
          <div className="singlePostEdit">
            <Link to={`/edit/${props.index}`} classNamAe="link">
              <i
                className=" singlePostIcon  fa-regular fa-pen-to-square"
                style={{ color: "teal" }}
                onClick={edit}
              ></i>
            </Link>
            <i
              className=" singlePostIcon far fa-trash-alt"
              onClick={deletes}
            ></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="SinglePostAuthor">
            {" "}
            Author:<b>Harshal</b>
          </span>
          <span className="singlePostDate">1 hour ago</span>
        </div>
        <p className="singlePostDesc">{datas.discription}</p>
      </div>
    </div>
  );
}

export default Singlepost;
