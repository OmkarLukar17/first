import React, { useState } from "react";
import "./single.css";
import Sidebar from "../../componets/sidebar/Sidebar";
import Singlepost from "../../componets/Singlepost/Singlepost";
import { useParams } from "react-router-dom";
import Edit from "../Edit";

function Single() {
  const { id } = useParams();

  console.log("I am the ID inside single page", id);

  const [edit, setedit] = useState(false);
  function enableEdit() {
    setedit(true);
  }

  return (
    <div className="single">
      {edit ? <Edit /> : <Singlepost index={id} onEdit={enableEdit} />}

      <Sidebar />
    </div>
  );
}

export default Single;
