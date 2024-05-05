const express = require("express");
const router = express.Router();

const { createContactController } = require("../controllers/contactController");

router.post("/contact", createContactController)



module.exports = router;