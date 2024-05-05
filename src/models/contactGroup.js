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


module.exports = {
  createContactGroup,
  getAllContactGroups,
};
