import React, { useState } from "react";
import SearchDropdown from "./SearchDropdown";

const SelectForm = ({ themeColor }) => {
  const cardBgColors = [
    "#fde68a",
    "#bfdbfe",
    "#bbf7d0",
    "#fecaca",
    "#ddd6fe",
    "#fed7aa",
  ];

  const headerBgColors = [
    "#f59e0b",
    "#3b82f6",
    "#22c55e",
    "#ef4444",
    "#8b5cf6",
    "#f97316",
  ];

  const [user, setUser] = useState("");
  const [age, setAge] = useState("");
  const [marks, setMarks] = useState("");
  const [subject, setSubject] = useState("");
  const [radio, setRadio] = useState("");
  const [check, setChecked] = useState([]);
  const [vehicle, setVehicle] = useState(null);
  const [students, setStudents] = useState([]);
  const addStudents = () => {
    if (!user || !age || !marks || !subject || check.length === 0 || !vehicle) {
      alert("please Fill");
      return;
    }
    setStudents([
      ...students,
      { user, age, marks, subject, radio, check, vehicle: vehicle.label },
    ]);
    setUser("");
    setAge("");
    setMarks("");
    setSubject("");
    setRadio("");
    setVehicle(null);
    setChecked("");
  };
  const handleCheckbox = (e) => {
    const value = e.target.value;

    if (check.includes(value)) {
      // uncheck
      setChecked(check.filter((item) => item !== value));
    } else {
      // check
      setChecked([...check, value]);
    }
  };

  return (
    <div className="container">
      <div className="card forms">
        <div className="row">
          <div className="col-md-3">
            <label>School Name</label>
            <SearchDropdown
              value={vehicle}
              onChange={(option) => setVehicle(option)}
            />
          </div>
          <div className="col-md-3">
            <label>Student Name</label>
            <input
              value={user}
              onChange={(e) => setUser(e.target.value)}
              type="text"
              className="form-control"
              placeholder="Student Name"
            />
          </div>
          <div className="col-md-3">
            <label>Student Age</label>
            <input
              value={age}
              onChange={(e) => setAge(e.target.value)}
              type="number"
              className="form-control"
              placeholder="Student Age"
            />
          </div>

          <div className="col-md-3">
            <label>Subject Name</label>
            <select
              className="form-control"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            >
              <option>Subject Name</option>
              <option>Telugu</option>
              <option>Hindi</option>
              <option>English</option>
            </select>
          </div>
          <div className="col-md-3">
            <label>Student Class</label>
            <div className="d-flex">
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value="10th Class"
                  checked={check.includes("10th Class")}
                  onChange={handleCheckbox}
                  id="defaultCheck1"
                />
                <label class="form-check-label" for="defaultCheck1">
                  10th Class
                </label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value="9th Class"
                  checked={check.includes("9th Class")}
                  onChange={handleCheckbox}
                  id="defaultCheck2"
                />
                <label class="form-check-label" for="defaultCheck2">
                  9th Class
                </label>
              </div>
            </div>
          </div>

          <div className="col-md-3">
            <label>Student Marks</label>
            <input
              value={marks}
              onChange={(e) => setMarks(e.target.value)}
              type="number"
              className="form-control"
              placeholder="Student Marks"
            />
          </div>
          <div className="col-md-3">
            <label>Student Status</label>
            <div className="d-flex">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="exampleRadios"
                  id="exampleRadios1"
                  checked={radio === "Passed"}
                  onClick={(e) => setRadio(e.target.value)}
                  value="Passed"
                />
                <label className="form-check-label" for="exampleRadios1">
                  Passed
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="exampleRadios"
                  id="exampleRadios2"
                  value="Failed"
                  chacked={radio === "Failed"}
                  onClick={(e) => setRadio(e.target.value)}
                />
                <label className="form-check-label" for="exampleRadios2">
                  Failed
                </label>
              </div>
            </div>
          </div>

          <div className="col-md-12 text-center">
            <button className="btn btn-success mt-4" onClick={addStudents}>
              {" "}
              Add Student
            </button>
          </div>
        </div>
      </div>
      <table className="table table-bordered mt-4">
        <thead style={{ background: themeColor }}>
          <tr>
            <th>School Name</th>
            <th>Name</th>
            <th>Age</th>
            <th>Subject Name</th>
            <th>Student Class</th>
            <th>Marks</th>
            <th>Student Status</th>
          </tr>
        </thead>
        <tbody>
          {students.length !== 0 ? (
            students.map((s, i) => (
              <tr key={i}>
                <td>{s.vehicle}</td>
                <td>{s.user}</td>
                <td>{s.age}</td>
                <td>{s.subject}</td>
                <td>{s.check.join(", ")}</td>
                <td>{s.marks}</td>
                <td>{s.radio}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="7">No Records Found</td>
            </tr>
          )}
        </tbody>
      </table>

      <div className="row">
        {students.map((st, i) => (
          <div className="col-md-3 mb-3" key={i}>
            <div
              className="card card1"
              style={{
                backgroundColor: cardBgColors[i % cardBgColors.length],
              }}
            >
              {/* HEADER */}
              <div
                className="card-header text-white fw-bold"
                style={{
                  backgroundColor: headerBgColors[i % headerBgColors.length],
                }}
              >
                {st.vehicle}
              </div>

              {/* BODY */}
              <div className="card-body">
                <p>
                  <strong>Student Name:</strong> {st.user}
                </p>
                <p>
                  <strong>Subject:</strong> {st.subject}
                </p>
                <p>
                  <strong>Class:</strong> {st.check.join(", ")}
                </p>
                <p>
                  <strong>Marks:</strong> {st.marks}
                </p>
                <p>
                  <strong>Status:</strong> {st.radio}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SelectForm;
