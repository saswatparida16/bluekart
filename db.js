const mongoose = require("mongoose");
const path = require("path");

const mongoURI = "mongodb+srv://saswatparida18:mongodb@cluster0.mcx66nu.mongodb.net/bluekart-usersDetails";
const mongoURI2 = "mongodb+srv://saswatparida18:mongodb@cluster0.mcx66nu.mongodb.net/productDetails";

const connectToMongo = () => {
  return mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

module.exports = connectToMongo;
