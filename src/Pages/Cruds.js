import React, { useEffect, useState } from "react";
import "../App.css";
import Table from "../Components/Table";
import Form from "../Components/Form";
import { getData, deleteData } from "../Components/api";
const Cruds = ({ themeColor }) => {
  const [products, setProducts] = useState([]);
  const [openForm, setopenForm] = useState(false);
  useEffect(() => {
    getProducts();
  }, []);
  let getProducts = async () => {
    let res = await getData();
    setProducts(res.data);
  };
  let deleteProducts = async (id) => {
    await deleteData(id);
    getProducts();
  };
  let showForm = () => setopenForm(true);
  let closeForm = () => setopenForm(false);
  return (
    <div className="container text-center">
      <h4 className="title">Cruds</h4>
      <hr></hr>

      <div className="col-md-12">
        <button
          className="btn btn-primary float-end"
          onClick={() => {
            showForm();
          }}
          style={{
            margin: "10px 0px",
            background: "rgb(14 108 122)",
            border: "0",
            width: "18%",
          }}
        >
          Add Product
        </button>
      </div>
      <Table
        products={products}
        delete={deleteProducts}
        themeColor={themeColor}
      />
      {openForm && <Form close={closeForm} />}
    </div>
  );
};

export default Cruds;
