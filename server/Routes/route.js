import express from "express";
import { createPosts, getPosts } from "../Controllers/posts.js";

const router = express.Router();

router.get("/", getPosts);
router.get("/", createPosts);

export default router;
