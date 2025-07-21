// backend/server.js
const express = require("express");
const cors = require("cors");
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Use Render's dynamic port OR 5000 locally
const PORT = process.env.PORT || 5000;

// Dummy credentials
const correctEmail = "test@example.com";
const correctPassword = "123456";

// GET route to confirm backend is working
app.get("/", (req, res) => {
  res.send("✅ Backend is running");
});

// Login POST route
app.post("/login", (req, res) => {
  const { email, password } = req.body;

  if (email === correctEmail && password === correctPassword) {
    res.json({ success: true });
  } else {
    res.json({ success: false });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

