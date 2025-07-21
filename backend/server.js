// backend/index.js
const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

const correctEmail = "test@example.com";
const correctPassword = "123456";

app.post("/login", (req, res) => {
  const { email, password } = req.body;

  if (email === correctEmail && password === correctPassword) {
    res.json({ success: true });
  } else {
    res.json({ success: false });
  }
});

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});

