import "./write.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

function Write() {
  const [imageSrc, setImageSrc] = useState(null);

  // Handle file selection
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImageSrc(imageUrl);
      console.log("Image url", imageUrl);
      // Update the note object with the imageSrc
      setnote((prevNote) => ({
        ...prevNote,
        image: imageUrl,
      }));
    }
  };

  const [note, setnote] = useState({
    title: "",
    discription: "",
    image:
      "https://cdn2.iconfinder.com/data/icons/text-file-essential/48/v-06-512.png",
  });

  const navigate = useNavigate();

  function typeTitle(event) {
    const { name, value } = event.target;
    event.preventDefault();

    setnote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }

  async function show(event) {
    event.preventDefault();
    navigate("/");

    const responsse = await axios.post("http://localhost:5000/write", note);
    console.log(responsse);
  }

  return (
    <div className="write">
      <img className="writeImg" src={imageSrc} alt="Upload Image" />
      <form className="writeForm" action="/" method="post">
        <div className="writeFormGroup">
          <label htmlFor="file">
            <i className=" writeIcon fas fa-plus"></i>
          </label>
          <input
            className="fileinput"
            id="file"
            type="file"
            accept="image/*"
            name="image"
            onChange={handleImageChange}
          />
          <input
            type="text"
            placeholder="Title"
            className="writeInput"
            autoFocus={true}
            onChange={typeTitle}
            name="title"
          />
        </div>
        <div className="writeFormGroup">
          <textarea
            placeholder="Tell your story..."
            type="text"
            className="writeInput writeText"
            name="discription"
            onChange={typeTitle}
          ></textarea>
        </div>
      </form>

      <Link to="/">
        <button className="writeSubmit" onClick={show} type="submit">
          Publish
        </button>
      </Link>
    </div>
  );
}

export default Write;
