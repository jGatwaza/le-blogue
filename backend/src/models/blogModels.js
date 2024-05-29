const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema(
  {
    authorId: {
      type: String,
      required: true,
    },
    categoryIds: {
      type: Array,
      required: false,
    },
    title: {
      type: String,
      required: false,
    },
    description: {
      type: String,
      required: false,
    },
    image: {
      type: String,
      required: false,
    },
    content: {
      type: Array,
      required: false,
    },
  },
  { timeStamp: false }
);

module.exports = mongoose.model("Blog", blogSchema);