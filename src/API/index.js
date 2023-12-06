import axios from "axios";

export const rede = axios.create({
  baseURL: "http://62.72.63.164:5000/api",

  headers: {
    "Content-type": "application/json",
    Authorization: "Bearer " + localStorage.getItem("token"),
  },
});

export default {
  getPostAll() {
    return rede.get("/post/GetAllPosts");
  },
  reaizarLogin(data) {
    return rede.post("/User/Login", data);
  },
  postCreateUser(data) {
    return rede.post("/User/CreateUser", data);
  },
};
