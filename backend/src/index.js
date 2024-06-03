const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3005;

// CORS options
const corsOptions = {
  origin: 'http://localhost:3000', // This should match the URL of your client
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  allowedHeaders: ["Content-Type", "Authorization"]
};

// Enable preflight requests for all routes
app.options('*', cors(corsOptions)); // Enable CORS preflight path for all routes

// Apply CORS to all routes
app.use(cors(corsOptions));
const connectDB = require("./database/db");
require("dotenv").config();
connectDB();
app.use(express.json());
app.use(cors());
app.use("/api/blogs", require("./routes/blogRoutes"));

app.listen(port, () => {
  console.log(`IX blogging app listening on port ${port}`);
});