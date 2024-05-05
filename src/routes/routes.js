const express = require("express");
const router = express.Router();

const { createContactController, getContactController } = require("../controllers/contactController");

router.route("/contact")
.get(getContactController)
.post(createContactController)



module.exports = router;