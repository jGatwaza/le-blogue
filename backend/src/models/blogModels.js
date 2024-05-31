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
      ref: "Category",
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
// Add a toJSON method to the schema to control the output of blog instances
blogSchema.method("toJSON", function () {
  const { __v, _id, categoryIds, ...object } = this.toObject();
  object.id = _id;

  object.categories = categoryIds.map((category) => {
    return {
      id: category._id,
      title: category.title,
      description: category.description,
      color: category.color,
    };
  });

  // Ensure author is included in the returned object
  if (this.author) {
    object.author = this.author;
  }

  return object;
});

module.exports = mongoose.model("Blog", blogSchema);