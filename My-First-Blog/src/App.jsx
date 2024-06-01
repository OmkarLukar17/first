import React, { useEffect, useState } from "react";
import "react-toastify/dist/ReactToastify.css";

import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Write from "./pages/write/Write";
import Topbar from "./componets/topbar/Topbar";
import Single from "./pages/single/Single";
import Setting from "./pages/settings/Setting";
import Edit from "../src/pages/Edit";
import About from "../src/pages/about/About";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";
import Contactpage from "./pages/contacts/Contactpage";
import Test from "./componets/Test";
function App() {
  const [uselog, setuserlog] = useState(false);

  async function loginStatus() {
    const loginStatus = await axios.get("http://localhost:5000/loginStatus");
    if (loginStatus.data.rows[0].loginstatus === 1) {
      setuserlog(true);
    }
  }

  useEffect(() => {
    loginStatus();
  }, []);

  async function handlelogin() {
    await axios.post("http://localhost:5000/gettingid");
  }
  return (
    <BrowserRouter>
      <Topbar />
      <Routes>
        <Route
          path="/"
          element={uselog ? <Home /> : <Login logOuts={handlelogin} />}
        ></Route>
        <Route path="/post/:id" element={<Single />}></Route>
        <Route path="/login" element={uselog ? <Home /> : <Login />}></Route>
        <Route
          path="/register"
          element={uselog ? <Home /> : <Register />}
        ></Route>
        <Route
          path="/write"
          element={uselog ? <Write /> : <Register />}
        ></Route>
        <Route path="/edit/:id" element={<Edit />}></Route>
        <Route
          path="/setting"
          element={uselog ? <Setting /> : <Login />}
        ></Route>
        <Route path="/about" element={uselog ? <About /> : <Login />}></Route>
        <Route
          path="/contact"
          element={uselog ? <Contactpage /> : <Login />}
        ></Route>
        <Route path="/test" element={<Test />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
