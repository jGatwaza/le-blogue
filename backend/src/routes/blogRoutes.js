const express = require("express");
const router = express.Router();

const blogController = require("../controllers/blogs");

router.get("/", (req, res) => {
    blogController.getBlogs(req, res);
});
router.get("/categories/:id", (req, res) => {
    blogController.getBlogByCategoryId(req, res);
});
router.put("/categories/:id", (req, res) => {
    blogController.updateBlogById(req, res);
});
router.post("/", (req, res) => {
    blogController.createBlogs(req, res);
});
router.delete("/:id", (req, res) => {
    blogController.deleteBlogById(req, res);
});
router.get("/:id", (req, res) => {
    blogController.getBlogById(req, res);
});


module.exports = router;