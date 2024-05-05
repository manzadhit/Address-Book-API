const express = require("express");
const router = express.Router();

const {
  createContactController,
  getContactController,
  getContactByIdController,
  updateContactController,
  deleteContactController,
} = require("../controllers/contactController");
const { createGroupController } = require("../controllers/groupController");

// Contact Routes
router
  .route("/contact")
  .get(getContactController)
  .post(createContactController);

router
  .route("/contact/:contactId")
  .get(getContactByIdController)
  .put(updateContactController)
  .delete(deleteContactController);

// Group Routes
router.route("/groups").post(createGroupController);

module.exports = router;
