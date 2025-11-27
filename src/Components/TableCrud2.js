import React from "react";
import { FaTrash, FaEdit } from "react-icons/fa";

const TableCrud2 = (props) => {
  return (
    <div>
      <div
        className="table-responsive"
        style={{ width: "100%", height: "385px" }}
      >
        <table className="table table-bordered table-striped">
          <thead style={{ background: props.themeColor }}>
            <tr>
              <th>ID</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Maiden Name</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {props.users.map((user) => {
              return (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.firstName}</td>
                  <td>{user.lastName}</td>
                  <td>{user.maidenName}</td>
                  <td className="action2">
                    <FaTrash
                      size={15}
                      color="#aa013a"
                      onClick={() => props.deleteUser(user.id)} // <-- fixed
                    />

                    <FaEdit size={15} color="rgb(14 108 122)" />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableCrud2;
