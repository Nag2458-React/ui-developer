import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    // Check fields
    if (loginData.email.trim() === "" || loginData.password.trim() === "") {
      alert("Please enter both email and password");
      return;
    }

    try {
      const res = await axios.get("http://localhost:5000/users");

      const user = res.data.find(
        (u) => u.email === loginData.email && u.password === loginData.password
      );

      if (user) {
        alert("Login Successful!");
        navigate("/"); // redirect to Home page
      } else {
        alert("Invalid Email or Password!");
      }
    } catch (error) {
      console.log(error);
      alert("Something went wrong");
    }
  };

  return (
    <div className="container">
      <h3 className="text-center">Login Here</h3>
      <hr />

      <div className="reg">
        <form style={{ margin: "auto" }} onSubmit={handleLogin}>
          <div className="form-group">
            <label>Email</label>
            <input
              name="email"
              type="email"
              placeholder="Email"
              className="form-control"
              value={loginData.email}
              onChange={handleChange}
            />
          </div>

          <div className="form-group mt-2">
            <label>Password</label>
            <input
              name="password"
              type="password"
              placeholder="Password"
              className="form-control"
              value={loginData.password}
              onChange={handleChange}
            />
          </div>

          <div className="form-group text-center mt-3">
            <button className="btn btn-primary">Login</button>
          </div>

          <div className="form-group text-center mt-2">
            You don't have an account? <Link to="/register">Register</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
