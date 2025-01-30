const Book = require("../models/book");

async function getBooks() {
  const books = await Book.find();
  // Return the books in the response
  res.json(books);
}

async function search(query) {
  const books = await Book.find(query);
  if (books) {
    return books;
  }
  return null;
  // Return the books in the response
}

async function createBook(data) {
  const { title, genre, createdAt } = req.body;
  if (title && genre && createdAt) {
    const book = new Book({
      title: data.title,
      genre: data.genre,
      createdAt: Date.now(data.createdAt),
    });
    await book.save();
    return book;
  }
  return null;
}

async function getBookById(id) {
  // check book by id
  const book = await Book.findById(id);
  if (book) {
    return book;
  }
  return null;
}

async function updateBook(id, data) {
  // check book by id

  const book = await Book.findById(id);
  if (book) {
    book.title = data.title || book.title;
    book.genre = data.genre || book.genre;
    await book.save();
    return book;
  }
  return null;
}

async function deleteBook(id) {
  const book = await Book.findById(req.params.id);
  if (book) {
    await book.remove();
    return "delete success!!";
  }
  return null;
}

module.exports = {
  getBooks,
  search,
  createBook,
  getBookById,
  updateBook,
  deleteBook,
};
