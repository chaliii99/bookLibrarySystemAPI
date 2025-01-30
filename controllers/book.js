const {
  getBooks,
  search,
  createBook,
  getBookById,
  updateBook,
  deleteBook,
} = require("../services/book");

async function getBooks(req, res) {
  try {
    const books = await getBooks();
    res.json(books);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

async function getBookById(req, res) {
  try {
    const book = await getBookById(req.params.id);
    res.json(book);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

async function search(req, res) {
  try {
    const books = await search(req.query);
    res.json(books);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

async function createBook(req, res) {
  try {
    const book = await createBook(req.body);
    res.json(book);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

async function updateBook(req, res) {
  try {
    const book = await updateBook(req.params.id, req.body);
    res.json(book);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

async function deleteBook(req, res) {
  try {
    await deleteBook(req.params.id);
    res.json({ message: "delete success!!" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

module.exports = {
  getBooks,
  search,
  createBook,
  getBookById,
  updateBook,
  deleteBook,
};
