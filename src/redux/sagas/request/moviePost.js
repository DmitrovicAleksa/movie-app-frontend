import axiosInstance from "./axios";

export async function requestMoviePost({title,description,image,genre}) {
  const data = await axiosInstance.post("/movies/",{title,description,image,genre});
  console.log(data)
  const accessToken = data.data.access;
  axiosInstance.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`

  return data;
  
}