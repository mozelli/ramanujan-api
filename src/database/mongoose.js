const mongoose = require("mongoose");
mongoose.set('strictQuery', false);

mongoose.connect(process.env.DB_URL, () => {
  console.log("Database connected!\n");
});
mongoose.Promise = global.Promise;

module.exports = mongoose;