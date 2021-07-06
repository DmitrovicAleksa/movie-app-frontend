import axiosInstance from "./axios";

export async function requestPostUser(payload) {
  return await axiosInstance.post("/users/", payload);
}
