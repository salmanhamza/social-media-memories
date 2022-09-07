import express from "express";
import {
  createPosts,
  deletePost,
  getPosts,
  updatePost,
} from "../Controllers/posts.js";

const router = express.Router();

router.get("/", getPosts);
router.post("/", createPosts);
router.patch("/:id", updatePost);
router.delete("/:id", deletePost);

export default router;
