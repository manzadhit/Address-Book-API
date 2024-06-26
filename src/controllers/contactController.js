const httpStatus = require("http-status");
const {
  createContact,
  getContact,
  getContactById,
  updateContact,
  deleteContact,
} = require("../models/contact");

const createContactController = async (req, res) => {
  try {
    const contact = await createContact(req.body);
    res.status(httpStatus.CREATED).send({
      status: httpStatus.CREATED,
      message: "successfully create contact",
      data: contact,
    });
  } catch (error) {
    res.status(httpStatus.INTERNAL_SERVER_ERROR).send({
      status: httpStatus.INTERNAL_SERVER_ERROR,
      message: error.message,
    });
  }
};

const getContactController = async (req, res) => {
  try {
    const allContact = await getContact();
    res.status(httpStatus.OK).send({
      status: httpStatus.OK,
      message: "successfully get all contacts",
      data: allContact,
    });
  } catch (error) {
    res.status(httpStatus.INTERNAL_SERVER_ERROR).send({
      status: httpStatus.INTERNAL_SERVER_ERROR,
      message: error.message,
    });
  }
};

const getContactByIdController = async (req, res) => {
  try {
    const { contactId } = req.params;
    const contact = await getContactById(contactId);
    res.status(httpStatus.OK).send({
      status: httpStatus.OK,
      message: "successfully get contact",
      data: contact,
    });
  } catch (error) {
    res.status(httpStatus.INTERNAL_SERVER_ERROR).send({
      status: httpStatus.INTERNAL_SERVER_ERROR,
      message: error.message,
    });
  }
};

const updateContactController = async (req, res) => {
  try {
    const { contactId } = req.params;
    await getContactById(contactId);
    await updateContact(contactId, req.body);
    const contactUpdated = await getContactById(contactId);

    res.status(httpStatus.OK).send({
      status: httpStatus.OK,
      message: "successfully update contact",
      data: contactUpdated,
    });
  } catch (error) {
    res.status(httpStatus.INTERNAL_SERVER_ERROR).send({
      status: httpStatus.INTERNAL_SERVER_ERROR,
      message: error.message,
    });
  }
};

const deleteContactController = async (req, res) => {
  try {
    const { contactId } = req.params;
    await getContactById(contactId);
    await deleteContact(contactId);
    res.status(httpStatus.OK).send({
      status: httpStatus.OK,
      message: "Successfully delete contact",
    });
  } catch (error) {
    res.status(httpStatus.INTERNAL_SERVER_ERROR).send({
      status: httpStatus.INTERNAL_SERVER_ERROR,
      message: error.message,
    });
  }
};

module.exports = {
  createContactController,
  getContactController,
  getContactByIdController,
  updateContactController,
  deleteContactController
};
