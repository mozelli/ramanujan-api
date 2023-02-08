require('dotenv').config({ path: ".env.develop" });
const cors = require('cors');
const express = require('express');
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

require('./models/Posts');

app.listen(process.env.PORT, () => console.log(`Server running on http://localhost:${process.env.PORT}`));