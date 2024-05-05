const express = require("express");
const router = express.Router();

const {
  createContactController,
  getContactController,
  getContactByIdController,
  updateContactController,
} = require("../controllers/contactController");

router
  .route("/contact")
  .get(getContactController)
  .post(createContactController);

router.route("/contact/:contactId")
  .get(getContactByIdController)
  .put(updateContactController);

module.exports = router;
