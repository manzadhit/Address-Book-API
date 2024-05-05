const db = require("../connection/connection");

const createContact = (requestData) => {
  const { name, phoneNumber, company, email } = requestData;
  return new Promise((resolve, reject) => {
    db.run(
      "INSERT INTO Contacts (name, phoneNumber, company, email) VALUES (?, ?, ?, ?)",
      [name, phoneNumber, company, email],
      (err) => {
        if (err) {
          reject(err);
        } else {
          db.get(
            "SELECT * FROM Contacts WHERE name = ? AND phoneNumber = ? AND company = ? AND email = ?",
            [name, phoneNumber, company, email],
            (err, data) => {
              if (err) {
                reject(err);
              } else {
                resolve(data);
              }
            }
          );
        }
      }
    );
  });
};

const getContact =  () => {
  return new Promise((resolve, reject) => {
    db.all("SELECT * FROM Contacts", (err, data) => {
      if(err) {
        reject(err);
      } else {
        resolve(data);
      }
    })
  })
}

const getContactById = (contactId) => {
  return new Promise((resolve, reject) => {
    db.get("SELECT * FROM Contacts WHERE id = ?", [contactId], (err, data) => {
      if(err) {
        reject(err);
      } else if(!data) {
        reject(new Error(`Contact with id ${contactId} not found`));
      }else {
        resolve(data);
      }
    })
  })
}

const updateContact = (contactId, requestData) => {
  const { name, phoneNumber, company, email } = requestData;

  return new Promise((resolve, reject) => {
    db.run("UPDATE Contacts SET name = ?, phoneNumber = ?, company = ?, email = ? WHERE id = ?", [name, phoneNumber, company, email, contactId], (err) => {
      if(err) {
        reject(err);
      } else {
        resolve();
      }
    })
  })
}

const deleteContact = (contactId) => {
  return new Promise((resolve, reject) => {
    db.run("DELETE FROM Contacts WHERE id = ?", [contactId], (err) => {
      if(err) {
        reject(err);
      } else {
        resolve()
      }
    })
  })
}

module.exports = { createContact, getContact, getContactById, updateContact, deleteContact};
