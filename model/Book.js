const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  genre: { type: String, required: true },
  createdAt: { type: Date, default: Date.now, required: true },
});

module.exports = mongoose.model("Book", bookSchema);
