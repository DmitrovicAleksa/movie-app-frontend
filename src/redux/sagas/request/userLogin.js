import axiosInstance from "./axios";

export async function requestLoginUser(payload) {
  return await axiosInstance.post("/login/", payload);
}
