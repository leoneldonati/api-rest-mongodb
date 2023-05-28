import { Router } from "express";
import {
  getPosts,
  getPost,
  addPost,
  updatePost,
  deletePost,
} from "../controllers/Posts.controller.js";

// router instance
export const router = Router();

//GET REQUEST
router.get("/posts", getPosts);
router.get("/posts/:id", getPost);

//POST REQUEST
router.post("/posts", addPost);

//PUT REQUEST
router.put("/posts/:id", updatePost);

//DELETE REQUEST
router.delete("/posts/:id", deletePost);
