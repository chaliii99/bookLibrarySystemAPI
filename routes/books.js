const express = require("express");
const authenticate = require("../middleware/auth");

const router = express.Router();
const {
  getBooks,
  search,
  createBook,
  getBookById,
  updateBook,
  deleteBook,
} = require("../controllers/book");

// GET all books
router.get("/", authenticate, getBooks);

// GET book by id
router.get("/:id", authenticate, getBookById);

// search book by different criteria
router.get("/search", authenticate, search);

// Create new book
router.post("/", authenticate, createBook);

// Update book
router.put("/:id", authenticate, updateBook);

// Delete book
router.delete("/:id", authenticate, deleteBook);

module.exports = router;
