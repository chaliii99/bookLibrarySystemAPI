const Book = require("../models/book");

async function getBooks() {
  return await Book.find(query);
}

async function search(query) {
  const books = await Book.find(query);
  if (books) {
    return books;
  }
  return null;
}

async function createBook(data) {
  const { title, genre, createdAt } = data;
  if (title && genre && createdAt) {
    const book = new Book({
      title: data.title,
      genre: data.genre,
      createdAt: Date.now(data.createdAt),
    });
    await book.save();
    return book;
  }
  throw new Error("Missing required fields");
}

async function getBookById(id) {
  // check book by id
  const book = await Book.findById(id);
  if (book) {
    return book;
  }
  throw new Error("Book not found");
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
  throw new Error("Book not found");
}

async function deleteBook(id) {
  const book = await Book.findById(id);
  if (book) {
    await book.remove();
    return "Delete success!!";
  }
  throw new Error("Book not found");
}

module.exports = {
  getBooks,
  search,
  createBook,
  getBookById,
  updateBook,
  deleteBook,
};
