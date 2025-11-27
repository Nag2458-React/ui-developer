import React, { useState } from "react";

const Usestates = (props) => {
  const inputStyle = { marginBottom: "10px" };

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");

  const [user, setUser] = useState([]);

  const [editIndex, setEditIndex] = useState(null);

  // ADD or UPDATE USER
  const addUser = () => {
    if (!name || !email || !role) {
      alert("Please fill all fields");
      return;
    }

    // UPDATE MODE
    if (editIndex !== null) {
      const updated = [...user];
      updated[editIndex] = { name, email, role };
      setUser(updated);
      setEditIndex(null);
    }
    // ADD MODE
    else {
      setUser([...user, { name, email, role }]);
    }

    setName("");
    setEmail("");
    setRole("");
  };

  // DELETE USER
  const deleteUser = (index) => {
    const newUsers = user.filter((u, i) => i !== index);
    setUser(newUsers);
  };

  // EDIT USER
  const editUser = (index) => {
    setName(user[index].name);
    setEmail(user[index].email);
    setRole(user[index].role);
    setEditIndex(index);
  };

  return (
    <div className="container text-center">
      <h4>CRUD Operations Using useState Hook</h4>
      <hr />

      <div className="inp">
        <input
          type="text"
          className="form-control"
          placeholder="User Name"
          style={inputStyle}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="email"
          className="form-control"
          placeholder="User Email"
          style={inputStyle}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="text"
          className="form-control"
          placeholder="User Role"
          style={inputStyle}
          value={role}
          onChange={(e) => setRole(e.target.value)}
        />

        <button
          onClick={addUser}
          className="btn btn-success"
          style={{ width: "40%", margin: "20px 0px" }}
        >
          {editIndex !== null ? "Update User" : "Add User"}
        </button>
        <div className="">
          <table className="table table-bordered" style={{ width: "100%" }}>
            <thead style={{ background: props.themeColor }}>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>

            <tbody>
              {user.length === 0 ? (
                <tr>
                  <td colSpan="5" style={{ textAlign: "center", color: "red" }}>
                    No Records Found
                  </td>
                </tr>
              ) : (
                user.map((u, index) => (
                  <tr key={index}>
                    <td>{u.name}</td>
                    <td>{u.email}</td>
                    <td>{u.role}</td>
                    <td>
                      <button
                        className="btn btn-primary"
                        onClick={() => editUser(index)}
                      >
                        Edit
                      </button>
                    </td>
                    <td>
                      <button
                        className="btn btn-danger"
                        onClick={() => deleteUser(index)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Usestates;
