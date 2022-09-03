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
