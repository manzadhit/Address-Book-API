const httpStatus = require("http-status");
const {
  createContactGroup,
  getAllContactGroups,
  getContactGroupById,
  updateContactGroup,
  deleteContactGroup,
} = require("../models/contactGroup");

const { getContactById, updateContact } = require("../models/contact");
const { getGroupById } = require("../models/group");

const createContactGroupController = async (req, res) => {
  try {
    const { contactId, groupId } = req.body;
    await getContactById(contactId);
    await getGroupById(groupId);
    const contactGroup = await createContactGroup(contactId, groupId);

    res.status(httpStatus.CREATED).send({
      status: httpStatus.CREATED,
      message: "Successfully create contactGroup",
      data: contactGroup,
    });
  } catch (error) {
    res.status(httpStatus.INTERNAL_SERVER_ERROR).send({
      status: httpStatus.INTERNAL_SERVER_ERROR,
      message: error.message,
    });
  }
};

const getAllContactGroupsController = async (req, res) => {
  try {
    const allContactGroups = await getAllContactGroups();
    res.status(httpStatus.OK).send({
      status: httpStatus.OK,
      message: "Successfully get all contactGroups",
      data: allContactGroups,
    });
  } catch (error) {
    res.status(httpStatus.INTERNAL_SERVER_ERROR).send({
      status: httpStatus.INTERNAL_SERVER_ERROR,
      message: error.message,
    });
  }
};

const getContactGroupByIdController = async (req, res) => {
  try {
    const { contactGroupId } = req.params;
    const contactGroup = await getContactGroupById(contactGroupId);

    res.status(httpStatus.OK).send({
      status: httpStatus.OK,
      message: "Successfully get contactGroup by id",
      data: contactGroup,
    });
  } catch (error) {
    res.status(httpStatus.INTERNAL_SERVER_ERROR).send({
      status: httpStatus.INTERNAL_SERVER_ERROR,
      message: error.message,
    });
  }
};

const updateContactGroupController = async (req, res) => {
  try {
    const { contactGroupId } = req.params;
    const { contactId, groupId } = req.body;

    await getContactGroupById(contactGroupId);
    await updateContactGroup(contactGroupId, contactId, groupId);
    const contactGroupUpdated = await getContactGroupById(contactGroupId);

    res.status(httpStatus.OK).send({
      status: httpStatus.OK,
      message: "Successfully update contactGroup",
      data: contactGroupUpdated,
    });
  } catch (error) {
    res.status(httpStatus.INTERNAL_SERVER_ERROR).send({
      status: httpStatus.INTERNAL_SERVER_ERROR,
      message: error.message,
    });
  }
};

const deleteContactGroupController = async (req, res) => {
  try {
    const { contactGroupId } = req.params;
    await getContactGroupById(contactGroupId);
    await deleteContactGroup(contactGroupId);

    res.status(httpStatus.OK).send({
      status: httpStatus.OK,
      message: "Sucessfully delete contactGroup",
    });
  } catch (error) {
    res.status(httpStatus.INTERNAL_SERVER_ERROR).send({
      status: httpStatus.INTERNAL_SERVER_ERROR,
      message: error.message,
    });
  }
};

module.exports = {
  createContactGroupController,
  getAllContactGroupsController,
  getContactGroupByIdController,
  updateContactGroupController,
  deleteContactGroupController
};
