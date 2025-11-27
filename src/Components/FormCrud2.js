import React from "react";
import "../css/Style.css";
const FormCrud2 = (props) => {
  return (
    <div className="form-overlay">
      <form>
        <h3>Edit Details</h3>
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter Name"
            className="form-control mt-2"
          />
        </div>
        <div className="form-group">
          <label>Price</label>
          <input
            type="number"
            name="name"
            className="form-control mt-2"
            placeholder="Enter Price"
          />
        </div>
        <div className="form-group">
          <label>Category</label>
          <select className="form-control mt-2" name="category">
            <option value="-1"></option>
            <option value={"mobiles"}>mobiles</option>
            <option value={"laps"}>laps</option>
            <option value={"tv"}>tv's</option>
          </select>
        </div>
        <button
          className="btn btn-primary float-end"
          onClick={(e) => {
            e.preventDefault();
          }}
        >
          Send
        </button>
        <button
          className="btn btn-danger float-end"
          onClick={(e) => {
            e.preventDefault();
            props.close();
          }}
        >
          Cancel
        </button>
      </form>
    </div>
  );
};

export default FormCrud2;
