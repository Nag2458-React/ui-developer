import React from "react";
import Style from "../css/Style.css";
const Table = (props) => {
  return (
    <div
      className="table-responsive"
      style={{ width: "100%", height: "385px" }}
    >
      <table className="table table-bordered table-striped">
        <thead style={{ background: props.themeColor }}>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Price</th>
            <th>Category</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {props.products.map((pro) => (
            <tr key={pro.id}>
              <td>{pro.id}</td>
              <td>{pro.title}</td>
              <td>{pro.price}</td>
              <td>{pro.category}</td>
              <td className="actions">
                <button className="btn edit-btn m-1">Edit</button>
                <button
                  className="btn delete-btn m-1"
                  onClick={() => {
                    props.delete(pro.id);
                  }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
