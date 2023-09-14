const mysql = require("mysql2");
const express = require("express");
const app = express();

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "YaDuYhBa&863",
  database: "projectnest",
});

db.connect((err) => {
  if (err) {
    console.error("Error connecting to MySQL:", err);
  } else {
    console.log("Connected to MySQL database");
  }
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

async function importData(dataArray) {
    try {
      await connection.connect(); // Connect to the MySQL database
  
      for (const item of dataArray) {
        // Insert each item from the array into a MySQL table
        await connection.query('INSERT INTO user (username,email,password) VALUES (?, ?, ?)', [item.uname, item.eml, item.pwd]);
      }
  
      console.log('Data imported successfully.');
    } catch (error) {
      console.error('Error importing data:', error);
    }
}
const userArray = [
    { uname: 'John', eml: 'asd@gmail.com', password: '123456' },
    { uname: 'Peter', eml: 'per@yah.com', password: '623456'}]
importData(userArray);

