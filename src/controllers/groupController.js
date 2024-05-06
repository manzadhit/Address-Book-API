const httpStatus = require("http-status");
const {
  createGroup,
  getAllGroups,
  getGroupById,
  updateGroup,
  deleteGroup,
} = require("../models/group");

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
    const transformedData = allGroups.map((group) => {
      return {
        ...group,
        listContact: JSON.parse(group.listContact),
      };
    });

    res.status(httpStatus.OK).send({
      status: httpStatus.OK,
      message: "Successfully get all groups",
      data: transformedData,
    });
  } catch (error) {
    res.status(httpStatus.INTERNAL_SERVER_ERROR).send({
      status: httpStatus.INTERNAL_SERVER_ERROR,
      message: error.message,
    });
  }
};

const getGroupByIdController = async (req, res) => {
  try {
    const { groupId } = req.params;
    const group = await getGroupById(groupId);

    res.status(httpStatus.OK).send({
      status: httpStatus.OK,
      message: "Successfully get group by id",
      data: group,
    });
  } catch (error) {
    res.status(httpStatus.INTERNAL_SERVER_ERROR).send({
      status: httpStatus.INTERNAL_SERVER_ERROR,
      message: error.message,
    });
  }
};

const updateGroupController = async (req, res) => {
  try {
    const { groupId } = req.params;
    const { groupName } = req.body;

    await getGroupById(groupId);
    await updateGroup(groupId, groupName);
    const groupUpdated = await getGroupById(groupId);

    res.status(httpStatus.OK).send({
      status: httpStatus.OK,
      message: "Successfully update group",
      data: groupUpdated,
    });
  } catch (error) {
    res.status(httpStatus.INTERNAL_SERVER_ERROR).send({
      status: httpStatus.INTERNAL_SERVER_ERROR,
      message: error.message,
    });
  }
};

const deleteGroupController = async (req, res) => {
  try {
    const { groupId } = req.params;
    await getGroupById(groupId);
    await deleteGroup(groupId);

    res.status(httpStatus.OK).send({
      status: httpStatus.OK,
      message: "Sucessfully delete group",
    });
  } catch (error) {
    res.status(httpStatus.INTERNAL_SERVER_ERROR).send({
      status: httpStatus.INTERNAL_SERVER_ERROR,
      message: error.message,
    });
  }
};

module.exports = {
  createGroupController,
  getAllGroupsController,
  getGroupByIdController,
  updateGroupController,
  deleteGroupController,
};
