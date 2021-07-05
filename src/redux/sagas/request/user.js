import axios from "axios";

export async function requestPostUser(payload) {
  return await axios.post(
    "http://127.0.0.1:8000/users/",
    payload
  );
}

