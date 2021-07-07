import axios from "axios";

const config = {
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
};

const axiosInstance = axios.create({
  baseURL: "http://127.0.0.1:8000/",
  config,
});

axiosInstance.defaults.headers.common["Authorization"] = `Bearer ${localStorage.getItem("token")}`

export default axiosInstance;
