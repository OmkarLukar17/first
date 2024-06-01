import React, { useEffect, useState } from "react";
import "./post.css";
import Justpost from "../Justpost/Justpost";
import axios from "axios";

function Post() {
  const [data, setData] = useState([]);

  async function getdata() {
    try {
      const responsse = await axios.get("http://localhost:5000/");
      // console.log(JSON.parse(responsse.data.rows));

      console.log(responsse.data.rows);
      setData(responsse.data.rows);

      // setData(response.data); // Uncomment this line if you want to update state with the response data
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  useEffect(() => {
    getdata();
  }, []);

  return (
    <div className="posts">
      {data.reverse().map((note) => {
        return (
          <Justpost
            title={note.title}
            discription={note.discription}
            id={note.id}
            imageSrc={note.image}
            username={note.username}
          />
        );
      })}
    </div>
  );
}

export default Post;
