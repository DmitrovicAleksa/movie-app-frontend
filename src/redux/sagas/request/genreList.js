import axiosInstance from "./axios";

export async function requestGenreList() {
  return await axiosInstance.get("/genres/");
 
}
