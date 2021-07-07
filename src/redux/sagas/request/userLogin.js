import axiosInstance from "./axios";

export async function requestLoginUser(payload) {
  const data =  await axiosInstance.post("/login/", payload);
  const accessToken = data.data.access;
  axiosInstance.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`

  return data
}
