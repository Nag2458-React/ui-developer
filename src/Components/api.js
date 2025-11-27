import axios from "axios";
const url = "http://localhost:5000/products";
const url1 = "https://dummyjson.com/users";
export async function getData() {
  return await axios.get(url);
}
export async function deleteData(id) {
  return await axios.delete(`${url}/${id}`);
}

export async function postData(pro) {
  return await axios.post(url, pro, {
    headers: {
      "Content-Type": "application/json",
    },
  });
}
// users rendering
export async function getUsers() {
  return await axios.get(url1);
}
export async function deleteUsers(id) {
  return await axios.delete(`${url1}/${id}`);
}
