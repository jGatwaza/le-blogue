const express = require("express");
const router = express.Router();

const blogController = require("../controllers/blogs");

router.get("/", (req, res) => {
    blogController.getBlogs(req, res);
});
router.get("/categories/:id", (req, res) => {
    blogController.getBlog(req, res);
});
router.put("/:id", (req, res) => {
    blogController.updateBlog(req, res);
});
router.post("/", (req, res) => {
    blogController.createBlog(req, res);
    console.log(req.body);
});
router.delete("/:id", (req, res) => {
    blogController.deleteBlog(req, res);
});
router.get("/:id", (req, res) => {
    blogController.getBlog(req, res);
});


module.exports = router;