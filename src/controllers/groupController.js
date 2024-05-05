const httpStatus = require("http-status");
const { createGroup } = require("../models/group");

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

module.exports = { createGroupController };
