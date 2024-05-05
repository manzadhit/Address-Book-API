const db = require("../connection/connection");

const createGroup = (groupName) => {
  return new Promise((resolve, reject) => {
    db.run("INSERT INTO Groups (groupName) VALUES (?)", [groupName], (err) => {
      if (err) {
        reject(err);
      } else {
        db.get(
          "SELECT * FROM Groups WHERE groupName = ?",
          [groupName],
          (err, data) => {
            if (err) {
              reject(err);
            } else if (!data) {
              reject(new Error(`Group with groupName ${groupName} not found`));
            } else {
              resolve(data);
            }
          }
        );
      }
    });
  });
};

module.exports = {createGroup};
