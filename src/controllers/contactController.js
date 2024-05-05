const httpStatus = require("http-status");
const { createContact, getContact } = require("../models/contact");

const createContactController = async (req, res) => {
  try {
    const contact = await createContact(req.body);
    res.status(httpStatus.CREATED).send({
      status: httpStatus.CREATED,
      message: "successfully create contact",
      data: contact,
    });
  } catch (error) {
    console.log(error.message);
  }
};

const getContactController = async (req, res) => {
  const allContact = await getContact();
  res.status(httpStatus.OK).send({
    status: httpStatus.OK,
    message: "successfully get all contacts",
    data: allContact,
  });
};

module.exports = { createContactController, getContactController };
