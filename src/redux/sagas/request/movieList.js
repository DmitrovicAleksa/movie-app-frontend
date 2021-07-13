import axiosInstance from "./axios";

export async function requestMovieList() {
 return await axiosInstance.get("/movies/");
  

}
