const express = require("express");
const {
  registerUser,
  loginUser,
  getMe,
} = require("../controllers/UserControler");

const router = express.Router();

const { protect } = require("../middleware/authMiddleware");

const {} = require("../controllers/UserControler");

router.post("/", registerUser);
router.post("/login", loginUser);
router.get("/me", protect, getMe);

module.exports = router;
