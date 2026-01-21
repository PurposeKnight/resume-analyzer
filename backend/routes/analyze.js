const express = require("express");
const multer = require("multer");
const path = require("path");
const { analyzeResume } = require("../controllers/analyzeController");

const router = express.Router();

const upload = multer({
  dest: path.join(__dirname, "../uploads"),
});

router.post("/", upload.single("resume"), analyzeResume);

module.exports = router;
