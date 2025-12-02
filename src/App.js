import "./App.css";
import Navbar from "./Components/Navbar";
import { Routes, Route } from "react-router-dom";
import "./css/main.scss";
import Home from "./Pages/Home";
import Props from "./Pages/Props";
import Usestates from "./Pages/Usestates";
import Cruds from "./Pages/Cruds";
import Footer from "./Components/Footer";
import Cruds2 from "./Pages/Cruds2";
// import { FaHome } from "react-icons/fa";
import { useState } from "react";
import Calculator from "./Pages/Calculator";
// import Keypad from "./Components/Keypad";
import ApiIntegration from "./Pages/ApiIntegration";
import Register from "./Pages/Register";
import Login from "./Pages/Login";

function App() {
  const data = [
    {
      id: 1,
      name: "Nagababu",
      role: "Developer",
      bg: "#2639a138",
      cbg: "#2639a138",
      skills: ["React", "JavaScript", "HTML"],
    },
    {
      id: 2,
      name: "Ravi",
      role: "Designer",
      bg: "#3a550c29",
      cbg: "#3a550c29",
      skills: ["Photoshop", "Figma", "UI/UX"],
    },
    {
      id: 3,
      name: "Suresh",
      role: "Front End Developer",
      bg: "#ff572226",
      cbg: "#ff572226",
      skills: ["Angular", "CSS", "Bootstrap"],
    },
  ];
  const [themeColor, setThemeColor] = useState("#3b5e7b");
  return (
    <>
      <Navbar themeColor={themeColor} setThemeColor={setThemeColor} />
      <div className="body-height">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/props" element={<Props users={data} />} />
          <Route
            path="/usestates"
            element={<Usestates themeColor={themeColor} />}
          />
          <Route path="/cruds" element={<Cruds themeColor={themeColor} />} />
          <Route path="/cruds-2" element={<Cruds2 themeColor={themeColor} />} />
          <Route
            path="/calculator"
            element={<Calculator themeColor={themeColor} />}
          />
          <Route
            path="/register"
            element={<Register themeColor={themeColor} />}
          />
          <Route path="/login" element={<Login themeColor={themeColor} />} />
          <Route
            path="/ApiIntegration"
            element={<ApiIntegration themeColor={themeColor} />}
          />
        </Routes>
      </div>
      <Footer themeColor={themeColor} />
    </>
  );
}

export default App;
