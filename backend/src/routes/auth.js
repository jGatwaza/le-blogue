const express = require("express");
const router = express.Router();
const { upload } = require("../middleware/multer");
const { login, register, getUser, updateUser } = require("../controllers/auth");

router.post("/login", (req, res) => {
  login(req, res);
});

router.post("/register", (req, res) => {
  register(req, res);
});

router.get("/user/:id", (req, res) => {
  getUser(req, res);
});

// Include user ID in the PUT request
router.put("/user/:id", upload.single("image"), (req, res) => {
  updateUser(req, res);
});

module.exports = router;
