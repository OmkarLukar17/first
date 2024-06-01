import React, { useEffect, useState } from "react";
import "./setting.css";
import Sidebar from "../../componets/sidebar/Sidebar";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Setting(props) {
  const navigate = useNavigate();

  const [defaultData, setdefaultData] = useState({});
  const [imagesrc, setImageSrc] = useState();
  const [editusername, seteditusername] = useState(false);
  const [editemail, seteditemail] = useState(false);

  const [editpass, seteditpass] = useState(false);

  function editEmail() {
    seteditemail(true);
  }

  function editPass() {
    seteditpass(true);
  }

  function editUserName() {
    seteditusername(true);
  }

  async function getData() {
    const getdata = await axios.get("http://localhost:5000/gettingUserData");
    console.log("Getitng data into the setting page", getdata.data.rows[0].id);
    setdefaultData(getdata.data.rows[0]);
  }

  useEffect(() => {
    getData();
  }, []);

  const [updateData, setUpdateData] = useState({
    username: "",
    email: "",
    password: "",
    profile: "",
  });
  console.log("data is u[dating", updateData);

  function updateDetails(event) {
    const { name, value } = event.target;
    setUpdateData((previous) => {
      return { ...previous, [name]: value };
    });
  }

  async function editdata(event) {
    event.preventDefault();
    const getUpadteValue = await axios.post(
      "http://localhost:5000/updateUserData",
      updateData
    );
    navigate("/");
  }

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImageSrc(imageUrl);
      // Update the note object with the imageSrc
      setUpdateData((prevNote) => ({
        ...prevNote,
        profile: imageUrl,
      }));
    }
  };

  return (
    <div className="setting">
      <div className="settingWrapper">
        <div className="settingTitle">
          <span className="settingUpdateTitle">Update Your Account</span>
          <span className="settingDeleteTitle">Delete Account</span>
        </div>
        <form action="" className="settingForm">
          <label>Profile Picture</label>
          <div className="settingPP">
            <img src={imagesrc} alt="ProfilePictureHere" />
            <label htmlFor="fileInput">
              <i className=" settingPPIcon far fa-user-circle"></i>
            </label>
            <input
              type="file"
              id="fileInput"
              onChange={handleImageChange}
              style={{ display: "none" }}
            />
          </div>
          <label>Username</label>
          <input
            value={editusername ? null : defaultData.username}
            onClick={editUserName}
            onChange={updateDetails}
            type="text"
            placeholder="Enter Your Username...."
            name="username"
          />
          <label>Email</label>
          <input
            value={editemail ? null : defaultData.email}
            onClick={editEmail}
            onChange={updateDetails}
            type="text"
            placeholder="Email"
            name="email"
          />
          <label>Passsword</label>
          <input
            value={editpass ? null : defaultData.passwords}
            onClick={editPass}
            onChange={updateDetails}
            type="password"
            placeholder="Password"
            name="password"
          />
          <button className="settingSubmit" onClick={editdata}>
            Update
          </button>
        </form>
      </div>
      <Sidebar />
    </div>
  );
}

export default Setting;
