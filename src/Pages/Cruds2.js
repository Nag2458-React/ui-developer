import React, { useEffect, useState } from "react";
import { getUsers, deleteUsers } from "../Components/api";
import TableCrud2 from "../Components/TableCrud2";
import FormCrud2 from "../Components/FormCrud2";

const Cruds2 = ({ themeColor }) => {
  const [users, setUsers] = useState([]);
  const [openForm2, setOpenForm2] = useState(false);
  useEffect(() => {
    getUserData();
  }, []);
  let getUserData = async () => {
    let res = await getUsers();
    setUsers(res.data.users);
  };
  let deleteUserData = async (id) => {
    await deleteUsers(id); // API call

    setUsers((prevUsers) => prevUsers.filter((u) => u.id !== id)); // UI update
  };
  return (
    <div className="container">
      <h3 className="text-center">API Crud Operations</h3>
      <hr></hr>

      <button
        className="btn btn-primary float-end"
        style={{
          margin: "10px 0px",
          background: "rgb(14 108 122)",
          border: "0",
          width: "18%",
        }}
      >
        Add User
      </button>
      <TableCrud2
        users={users}
        themeColor={themeColor}
        deleteUser={deleteUserData}
      />
      {/* <FormCrud2 /> */}
    </div>
  );
};

export default Cruds2;
