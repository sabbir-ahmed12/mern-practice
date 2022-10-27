const express = require("express");
const HelloController = require("../controllers/HelloController");
const router = express.Router();

// Route
router.get("/hello", HelloController.Hello);
