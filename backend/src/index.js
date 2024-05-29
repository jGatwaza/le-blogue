const cors = require("cors");

// const blogRoutes = require("./routes/blogRoutes");

// app.use(cors()); // Enable CORS for all requests
// app.use(express.json()); // Enable parsing JSON bodies


// app.use("/api/blogs", blogRoutes);

// app.listen(port, () => {
//   console.log(`Listening on port: ${port}`);
// });

const express = require("express");
const connectDB = require("./database/db");
require("dotenv").config();

connectDB();

const app = express();
const port = process.env.PORT || 8000;

app.use(express.json());

app.use("/api/blogs", require("./routes/blogRoutes"));

app.listen(port, () => {
  console.log(`IX blogging app listening on port ${port}`);
});