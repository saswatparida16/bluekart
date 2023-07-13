const express = require("express");
const connectToMongo = require("./db");
const cors = require('cors');

const app = express();
const PORT = 3000;
app.use(express.json());
app.use(cors());

  connectToMongo().then(() => {
    console.log("MongoDB connections established successfully.");
  })
  .catch((err) => {
    console.error("Failed to connect to MongoDB:", err);
  });


  app.get('/', (req, res) => {
    res.send('Hello, World!');
  });

app.use("/api/users", require("./users"));
app.use("/api/productDetails", require("./productPage"));

// Start the server

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
