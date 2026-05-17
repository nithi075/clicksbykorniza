import axios from "axios";

const api = axios.create({
  baseURL: "https://korniza-backend.onrender.com"
});

export default api;