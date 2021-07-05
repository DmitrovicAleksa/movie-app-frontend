import axios from "axios";


const config = {
  headers: {
    Authorization: `Bearer ${localStorage.getItem('token')}`,
    "Content-Type": "application/json",
  },
};

export async function requestLoginUser(payload) {
  return await axios.post("http://127.0.0.1:8000/login/", payload, config);
}
