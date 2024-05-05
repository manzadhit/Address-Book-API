const httpStatus = require("http-status");
const { createGroup, getAllGroups } = require("../models/group");

const createGroupController = async (req, res) => {
  try {
    const { groupName } = req.body;
    const group = await createGroup(groupName);

    res.status(httpStatus.CREATED).send({
      status: httpStatus.CREATED,
      message: "Successfully create group",
      data: group,
    });
  } catch (error) {
    res.status(httpStatus.INTERNAL_SERVER_ERROR).send({
      status: httpStatus.INTERNAL_SERVER_ERROR,
      message: error.message,
    });
  }
};

const getAllGroupsController = async (req, res) => {
  try {
    const allGroups = await getAllGroups();
    res.status(httpStatus.OK).send({
      status: httpStatus.OK,
      message: "Successfully get all groups",
      data: allGroups
    })
  } catch (error) {
    res.status(httpStatus.INTERNAL_SERVER_ERROR).send({
      status: httpStatus.INTERNAL_SERVER_ERROR,
      message: error.message,
    });
  }
}

module.exports = { createGroupController, getAllGroupsController };
