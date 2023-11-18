import axios from "axios";

export const rede = axios.create({
  baseURL: "http://62.72.63.164:5000/api",

  headers: {
    "Content-type": "application/json",
  },
});

export default {
  getPostAll() {
    return rede.get("/GetAllPosts");
  },
  getUserLogin(data) {
    return rede.post("/User/Login", data);
  },
  postCreateUser(data) {
    return rede.post("/User/CreateUser", data);
  },
};
