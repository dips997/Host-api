const mongoose = require("mongoose");

// uri =
//   "mongodb+srv://dipak6355:Dipak997@dipakapi.svdsao8.mongodb.net/Dipakapi?retryWrites=true&w=majority";

const connectDB = (uri) => {
  console.log("connect db");
  return mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

module.exports = connectDB;
