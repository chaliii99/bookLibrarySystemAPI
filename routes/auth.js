const express = require("express");
const router = express.Router();


// example users data
const users = [
  {
    id: 1,
    name: "John Doe",
    email: " john@example.com",
    password: "password",
  },
  {
    id: 2,
    name: "Jane Doe",
    email: " jane@example.com",
    password: "password",
  },
];

// login
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: "Please enter all fields" });
    }

    const user = await users.findOne({ email });
    if (!user) {
      return res.status(400).json({ error: "Invalid credentials" });
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
    res.json({
      token,
      user: { id: user._id, name: user.name, email: user.email },
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// register
router.post("/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ error: "Please enter all fields" });
    }

    const user = await users.findOne({ email });
    if (user) {
      return res.status(400).json({ error: "User already exists" });
    }

    const newUser = new users({ name, email, password });
    await newUser.save();

    const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET);
    res.json({
      message: "User registered successfully",
      token,
      user: { id: newUser._id, name: newUser.name, email: newUser.email },
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
module.exports = router;

