import axios from "axios";

export const rede = axios.create({
  baseURL: "http://62.72.63.164:5000/api/",

  headers: {
    "Content-type": "application/json",
  },
});

export default {
  getPost() {
    return rede.get("/GetAllPosts");
  },
};
