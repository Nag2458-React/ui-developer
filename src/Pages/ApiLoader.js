import React, { useEffect, useState } from "react";

const ApiLoader = ({ themeColor }) => {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getData();
  }, []);
  async function getData() {
    setLoading(true);
    let res = await fetch("https://jsonplaceholder.typicode.com/users");
    let result = await res.json();
    setUser(result);
    setLoading(false);
  }
  async function deleteData(id) {
    const isConfirm = window.confirm("Are you sure you want to delete?");

    if (!isConfirm) return;

    await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
      method: "DELETE",
    });

    setUser(user.filter((u) => u.id !== id));
  }

  if (loading) {
    return (
      <div className="bubble-loader-wrapper">
        <div className="bubble-loader">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <p>Loading...</p>
      </div>
    );
  }
  return (
    <div className="container">
      <h3 className="text-center">API Loader</h3>
      <hr></hr>
      <br />
      <div className="table-responsive">
        <table className="table table-bordered table-striped">
          <thead style={{ background: themeColor }}>
            <tr>
              <th>S.no</th>
              <th>Name</th>
              <th>User Name</th>
              <th>Email</th>
              <th>Phone Number</th>
              <th>City</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {user.length === 0 ? (
              <tr>
                <td colSpan={5}>
                  <strong>----- No Data Found -----</strong>
                </td>
              </tr>
            ) : (
              user.map((use, i) => (
                <tr>
                  <td>{i + 1}</td>
                  <td>{use.name}</td>
                  <td>{use.username}</td>
                  <td>{use.email}</td>
                  <td>{use.phone}</td>
                  <td>{use.address.city}</td>
                  <td>
                    <button
                      className="btn delete"
                      onClick={() => deleteData(use.id)}
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
  );
};

export default ApiLoader;
