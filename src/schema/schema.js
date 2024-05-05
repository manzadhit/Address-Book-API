const db = require("../connection/connection");

const createTables = async () => {
  try {
    await db.exec("BEGIN");
    await db.run(`
    CREATE TABLE IF NOT EXISTS Contacts (
      id INTEGER PRIMARY KEY,
      name TEXT NOT NULL,
      phoneNumber TEXT UNIQUE,
      company TEXT,
      email TEXT UNIQUE
    );
    `);

    await db.run(`
    CREATE TABLE IF NOT EXISTS Groups (
      id INTEGER PRIMARY KEY,
      groupName TEXT NOT NULL
    );
    `);

    await db.run(`
    CREATE TABLE IF NOT EXISTS GroupContact (
      id INTEGER PRIMARY KEY,
      contactId INTEGER,
      groupId INTEGER,
      FOREIGN KEY(contactId) REFERENCES Contacts(id),
      FOREIGN KEY(groupId) REFERENCES Groups(id)
    );`);

    await db.exec("COMMIT");
    console.log("Successfully create tables");
  } catch (error) {
    await db.exec("ROLLBACK");
    console.log("Failed to create tables :", error.message);
  }
};

// createTables();
