import axios from "axios";

const url = "http://localhost:8000/posts";

export const fetchPosts = () => axios.get(url);
export const createPost = (newpost) => {
  return axios.post(url, newpost);
};

export const updatePost = (id, updatedPost) =>
  axios.patch(`${url}/${id}`, updatedPost);
