import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Register = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  // handle input change
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  // Email validation function
  const isValidEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };
  // handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    // --- VALIDATION ---
    if (
      form.firstName.trim() === "" ||
      form.lastName.trim() === "" ||
      form.email.trim() === "" ||
      form.password.trim() === ""
    ) {
      alert("Please fill all fields before submitting!");
      return; // STOP submit
    }
    // EMAIL FORMAT VALIDATION
    if (!isValidEmail(form.email)) {
      alert("Please enter a valid email address!");
      return;
    }
    try {
      await axios.post("http://localhost:5000/users", form);

      alert("User Registered Successfully!");

      // reset form
      setForm({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
      });
    } catch (error) {
      console.log(error);
      alert("Error while registering");
    }
  };

  return (
    <div className="container">
      <h3 className="text-center">Register Here</h3>
      <hr />

      <div className="reg">
        <form style={{ margin: "auto" }} onSubmit={handleSubmit}>
          <div className="form-group">
            <label>First Name</label>
            <input
              name="firstName"
              type="text"
              className="form-control"
              placeholder="First Name"
              value={form.firstName}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Last Name</label>
            <input
              name="lastName"
              type="text"
              placeholder="Last Name"
              className="form-control"
              value={form.lastName}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              name="email"
              type="email"
              placeholder="Email"
              className="form-control"
              value={form.email}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              name="password"
              type="password"
              placeholder="Password"
              className="form-control"
              value={form.password}
              onChange={handleChange}
            />
          </div>

          <div className="form-group text-center mt-3">
            <button className="btn btn-primary">Register</button>
          </div>

          <div className="form-group text-center mt-2">
            You have an account? <Link to="/login">Login</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
