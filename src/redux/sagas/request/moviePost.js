import axiosInstance from "./axios";

export async function requestMoviePost() {
  const data = await axiosInstance.post("/movies/");
  const accessToken = data.data.access;
  axiosInstance.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`

  return data;
  
}