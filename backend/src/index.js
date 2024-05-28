const express = require("express");
const cors = require("cors");
const app = express();
const port = 8000;

const blogRoutes = require("./routes/blogRoutes");

app.use(cors()); // Enable CORS for all requests
app.use(express.json()); // Enable parsing JSON bodies


app.use("/api/blogs", blogRoutes);

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});