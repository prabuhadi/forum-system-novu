"use strict";

const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 4000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

//////////* Creating new users  */////////

// 👇holds all the existing users
const users = [];
// 👇holds all the post created
const threadList = [];
// 👇generates a random string as ID
const generateID = () => Math.random().toString(36).substring(2, 10);

app.post("/api/register", async (req, res) => {
  const { username, email, password } = req.body;
  const id = generateID();
  const result = users.filter(
    (user) => user.email === email && user.password === password
  );

  if (result.length === 0) {
    const newUser = { id, username, email, password };
    users.push(newUser);
    return res.json({ message: "Account created successsfully!" });
  } else {
    res.json({ error_message: "User already exists" }); // if else statement check user avail
  }
});

app.post("/api/login", (req, res) => {
  const { email, password } = req.body;
  let result = users.filter(
    (user) => user.email === email && user.password === password
  );

  if (result.length !== 1) {
    return res.json({ error_message: "Incorrect credentials" });
  } else {
    res.json({ message: "Login successfully", id: result[0].id });
  }
});

app.post("/api/create/thread", async (req, res) => {
  const { thread, userId } = req.body;
  const threadId = generateID();

  threadList.unshift({
    id: threadId,
    title: thread,
    userId,
    replies: [],
    likes: [],
  });

  res.json({ message: "Thread created successfully!", thread: threadList });
});

app.get("/api/all/threads", (res, req) => {
  res.json({ threads: threadList });
});

app.get("/api", (req, res) => {
  res.json({
    message: "Selamat Pagi",
  });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
