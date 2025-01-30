const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
require("dotenv").config();

// Routes
const authRoutes = require("./routes/auth");
const bookRoutes = require("./routes/books");

const app = express();

app.use(bodyParser.json());

// Database Connection
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log("err :" + err));

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/books", bookRoutes);

const PORT = process.env.PORT;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
