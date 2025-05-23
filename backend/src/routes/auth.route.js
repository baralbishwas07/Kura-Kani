const express = require("express");
const {
  signup,
  login,
  logout,
  updateProfile,
  checkAuth,
  refreshAuthToken,
} = require("../controllers/auth.controller");
const protectRoute = require("../middleware/auth.middleware");

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);

router.post("/refresh", refreshAuthToken);

router.put("/update-profile", protectRoute, updateProfile);

router.get("/check", protectRoute, checkAuth);

module.exports = router;
