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

const getAllGroups = () => {
  return new Promise((resolve, reject) => {
    db.all("SELECT * FROM Groups", (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
};

const getGroupById = (groupId) => {
  return new Promise((resolve, reject) => {
    db.get("SELECT * FROM Groups WHERE id = ?", [groupId], (err, data) => {
      if (err) {
        reject(err);
      } else if (!data) {
        reject(new Error(`Group with id ${groupId} not found`));
      } else {
        resolve(data);
      }
    });
  });
};

const updateGroup = (groupId, newGroupName) => {
  return new Promise((resolve, reject) => {
    db.run(
      "UPDATE Groups SET groupName = ? WHERE id = ?",
      [newGroupName, groupId],
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

const deleteGroup = (groupId) => {
  return new Promise((resolve, reject) => {
    db.run("DELETE FROM Groups WHERE id = ?", [groupId], (err) => {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });
  });
};

module.exports = { createGroup, getAllGroups, getGroupById, updateGroup, deleteGroup };
