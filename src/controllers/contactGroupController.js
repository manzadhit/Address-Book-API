const httpStatus = require("http-status");
const {
  createContactGroup,
  getAllContactGroups
} = require("../models/contactGroup");

const { getContactById } = require("../models/contact");
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


module.exports = {
  createContactGroupController,
  getAllContactGroupsController,
};
