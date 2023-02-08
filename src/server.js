require('dotenv').config({ path: ".env.develop" });
const cors = require('cors');
const express = require('express');
const app = express();
const posts = require('./routes/posts');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use("/posts", posts.routes);

app.listen(process.env.PORT, () => console.log(`Server running on http://localhost:${process.env.PORT}`));