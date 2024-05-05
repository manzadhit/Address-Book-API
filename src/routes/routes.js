const express = require("express");
const router = express.Router();

const {
  createContactController,
  getContactController,
  getContactByIdController,
  updateContactController,
  deleteContactController,
} = require("../controllers/contactController");
const {
  createGroupController,
  getAllGroupsController,
  getGroupByIdController,
  updateGroupController,
  deleteGroupController,
} = require("../controllers/groupController");

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
router.route("/groups").post(createGroupController).get(getAllGroupsController);

router
  .route("/groups/:groupId")
  .get(getGroupByIdController)
  .put(updateGroupController)
  .delete(deleteGroupController);

module.exports = router;
