import axios from "axios";

const url = "http://localhost:8000/posts";

export const fetchPosts = () => axios.get(url);
export const createPost = (newpost) => {
  //   console.log("new message: ", newpost);
  return axios.post(url, newpost);
};
