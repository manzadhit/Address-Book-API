const { createContact } = require("../models/contact");

const createContactController = async (req, res) => {
  try {
    const contact = await createContact(req.body);
    res.status(200).send({
      message: "successfully create contact",
      data: contact
    })
    console.log(contact);
  } catch (error) {
    console.log(error.message);
  }
}

module.exports = { createContactController };