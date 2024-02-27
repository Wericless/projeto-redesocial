import axios from "axios";
import { id } from "date-fns/locale";

export const rede = axios.create({
  baseURL: "http://62.72.63.164:5000/api",

  headers: {
    "Content-type": "application/json",
    Authorization: "Bearer " + localStorage.getItem("token"),
  },
});

rede.interceptors.request.use((config) => {
  if (localStorage.getItem("token"))
    config.headers["Authorization"] = "Bearer " + localStorage.getItem("token");

  return config;
});

export default {
  criarUsuario(data) {
    return rede.post("/User/CreateUser", data);
  },
  realizarLogin(data) {
    return rede.post("/User/Login", data);
  },
  criarPostagem(data) {
    return rede.post("/Post/CreatePost", data);
  },
  deletarPost(idPost) {
    return rede.delete(`/post/DeletePost/${idPost}`);
  },
  getPostAll() {
    return rede.get("/post/GetAllPosts");
  },
  postUsuario() {
    return rede.get("/post/GetMyPosts");
  },
  likeEDislike(idPost) {
    return rede.post("/post/LikeUnlikePost/" + idPost);
  },
  atualizarPost(idPost, novoConteudo) {
    return rede.patch("/post/UpdatePost/" + idPost, novoConteudo);
  },
};
