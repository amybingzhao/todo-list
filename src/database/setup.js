const mysql = require('mysql');

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "TodoList",
  insecureAuth: true,
  multipleStatements: true
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  const createColumnsTableSql = `
    CREATE TABLE IF NOT EXISTS Columns (
        id int NOT NULL AUTO_INCREMENT, 
        name VARCHAR(255) NOT NULL, 
        PRIMARY KEY(id)
    );`;
  con.query(createColumnsTableSql, function (err, result) {
    if (err) throw err;
    console.log("Table created");
  });

const createItemsTableSql = `
  CREATE TABLE IF NOT EXISTS Items (
      id int NOT NULL AUTO_INCREMENT,
      content VARCHAR(1000) NOT NULL,
      dateCreated TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      columnId int NOT NULL,
      PRIMARY KEY(id),
      FOREIGN KEY(columnId) REFERENCES Columns(id)
  );
  `;
con.query(createItemsTableSql, function (err, result) {
  if (err) throw err;
  console.log("Table created");
});

const insertInitialColumnsSql = `
    INSERT IGNORE INTO Columns (name)
    VALUES ("Todo");

    INSERT IGNORE INTO Columns (name)
    VALUES ("In progress");

    INSERT IGNORE INTO Columns (name)
    VALUES ("Done");
  `;
con.query(insertInitialColumnsSql, function (err, result) {
  if (err) throw err;
  console.log("Columns created");
});
});