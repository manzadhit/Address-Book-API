const db = require("../connection/connection");

const createContactGroup = (contactId, groupId) => {
  return new Promise((resolve, reject) => {
    db.run("INSERT INTO GroupContact (contactId, groupId) VALUES (?, ?)", [contactId, groupId], (err) => {
      if (err) {
        reject(err);
      } else {
        db.get(
          "SELECT * FROM GroupContact WHERE contactId = ? AND groupId = ?",
          [contactId, groupId],
          (err, data) => {
            if (err) {
              reject(err);
            } else if (!data) {
              reject(new Error(`ContactGroup not found`));
            } else {
              resolve(data);
            }
          }
        );
      }
    });
  });
};

const getAllContactGroups = () => {
  return new Promise((resolve, reject) => {
    db.all("SELECT * FROM GroupContact", (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
};

const getContactGroupById = (contactGroupId) => {
  return new Promise((resolve, reject) => {
    db.get("SELECT * FROM GroupContact WHERE id = ?", [contactGroupId], (err, data) => {
      if (err) {
        reject(err);
      } else if (!data) {
        reject(new Error(`ContactGroup with id ${contactGroupId} not found`));
      } else {
        resolve(data);
      }
    });
  });
};

const updateContactGroup = (contactGroupId, contactId, groupId) => {
  return new Promise((resolve, reject) => {
    db.run(
      "UPDATE GroupContact SET contactId = ?, groupId = ? WHERE id = ?",
      [contactId, groupId, contactGroupId],
      (err) => {
        if (err) {
          reject(err);
        } else {
          resolve();
        }
      }
    );
  });
};

const deleteContactGroup = (contactGroupId) => {
  return new Promise((resolve, reject) => {
    db.run("DELETE FROM GroupContact WHERE id = ?", [contactGroupId], (err) => {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });
  });
};


module.exports = {
  createContactGroup,
  getAllContactGroups,
  getContactGroupById,
  updateContactGroup,
  deleteContactGroup
};
