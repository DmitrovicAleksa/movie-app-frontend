import axios from "axios";

const config = {
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
    "Content-Type": "application/json",
  },
};

const axiosInstance = axios.create({
  baseURL: "http://127.0.0.1:8000/",
  config,
});

export default axiosInstance;
