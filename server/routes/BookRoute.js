import express from "express";
import { createBook, deleteBook, getAllBook, getBook, updateBook } from "../controller/BookController.js";
import { verifyAdmin, verifyUser, verifyToken } from "../utils/verifyToken.js";

const router = express.Router();

// CREATE
router.post("/:id", createBook)

// UPDATE
router.put("/:id", updateBook)

// DELETE
router.delete("/:id", deleteBook)

// GET
router.get("/find/:id", getBook)

// GET ALL
router.get("/", getAllBook)

export default router