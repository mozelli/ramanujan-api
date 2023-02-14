require('dotenv').config({ path: ".env.develop" });
const cors = require('cors');
const express = require('express');
const app = express();
const posts = require('./routes/posts');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
  res.header("Access-Control-Allow-Headers", "X-PINGOTHER, Content-Type, Authorization")
  app.use(cors());
  next();
});

app.use("/posts", posts.routes);

app.listen(process.env.PORT, () => console.log(`Server running on http://localhost:${process.env.PORT}`));