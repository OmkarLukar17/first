import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useState ,useEffect} from "react";
import Button from '@mui/material/Button';
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import {useParams} from "react-router-dom";


function Edit() {
  const { id } = useParams();



  console.log("I am the index under edit page",id)


  const [temp, setTemp] = useState();

  const [editPostValue,setgeteditPostdata] = useState({
  
    title: "",
    discription:"",
    image:
      "",
  });

  const [note, setnote] = useState(
    {   
      title:editPostValue.title,
      discription:editPostValue.discription,
      image:editPostValue.image,  
      console : console.log(temp)
     
  }
 );
  

  
async function editData(){
    try {
    const responsse = await axios.get(`http://localhost:5000/editpost/${id}`);
    setTemp(responsse.data.rows[0])

    console.log("I am a original respones in the edit page from the data",responsse.data.rows[0]);
    
    setgeteditPostdata((prevNote) => {
      return {
        ...prevNote,
           title:responsse.data.rows[0].title,
           discription:responsse.data.rows[0].discription,
           image:responsse.data.rows[0].image,
      };
    });


    setnote((prevNote) => {
      return {
        ...prevNote,
           title:responsse.data.rows[0].title,
           discription:responsse.data.rows[0].discription,
           image:responsse.data.rows[0].image,
      };
    });

  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

useEffect(()=>{
  editData();
},[id])






  const [editTitle, seteditTitle] = useState(false);
  function editTitles() {
    seteditTitle(true);
  }

  const [editdisc, seteditdisc] = useState(false);
  function editdiscc() {
    seteditdisc(true);
  }




  const [imageSrc, setImageSrc] = useState(null);

const [imageChnange,setImageChange]=useState(false);

  // Handle file selection
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImageSrc(imageUrl);
      // Update the note object with the imageSrc
      setnote((prevNote) => ({
        ...prevNote,
        image: imageUrl,
      }));
      if(imageUrl!==""){
        setImageChange(true);
      }
      
    }
  };


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
    // Note[corrent]=note;

    // console.log(Note);
console.log("Note data",note);;
console.log("post value",editPostValue)


 const responsse = await axios.put(`http://localhost:5000/saveEditPost/${id}`,note);
 console.log(responsse)
    // navigate("/post/");
    event.preventDefault();
  }








  return (
    <>
    

      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "80ch" },
        }}
        noValidate
        autoComplete="off"
      ><img src={imageChnange?imageSrc:editPostValue.image} alt="No-Image" />
           <label>Select Image</label>
           <input
            type="file"
            accept="image/*"
            name="image"
            onChange={handleImageChange}
            
          />
        <label>Title</label>
        <TextField
        // onChange={getNote}
          id="outlined-basic"
          onChange={typeTitle}
        
        
          variant="outlined"
          onClick={editTitles}
          name="title"
          value={editTitle ? null :editPostValue.title}
        />
         <label>Discription </label>
        <TextField
          //  onChange={getNote}
          id="outlined-basic"
          onChange={typeTitle}
          // label="Description"
          name="discription"

          variant="outlined"
          onClick={editdiscc}
          value={editdisc ? null :editPostValue.discription}
        />
     

       <Button variant="contained" type="submit" onClick={show}
       >
        <Link to="/"  style={{color:"white" , textDecoration:"none"}}>Save</Link> </Button>
     
     
      </Box>
    </>
  );
}
export default Edit;