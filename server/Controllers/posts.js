import mongoose from "mongoose";
import PostMessage from "../Model/postMessage.js";

export const getPosts = async (request, response) => {
  try {
    const getPostMessage = await PostMessage.find();
    response.status(200).json(getPostMessage);
  } catch (error) {
    response.status(404).json({ message: error.message });
  }
};

export const createPosts = async (request, response) => {
  const post = request.body;

  const newPost = new PostMessage(post);
  try {
    await newPost.save();
    response.status(200).json(newPost);
  } catch (error) {
    response.status(409).json({ message: error.message });
  }
};

export const updatePost = async (request, response) => {
  const { id: _id } = request.params;
  const post = request.body;

  if (!mongoose.Types.ObjectId.isValid(_id))
    return response.status(404).send("no posts with that id");

  const updatedPost = await PostMessage.findByIdAndUpdate(
    _id,
    { ...post, _id },
    {
      new: true,
    }
  );
  response.json(updatedPost);
};

export const deletePost = async (request, response) => {
  try {
    await PostMessage.deleteOne({ _id: request.params.id });
    response.status(200).json({ message: "user deleted succesfully" });
  } catch (error) {
    response.status(409).json({ message: error.message });
  }
};
