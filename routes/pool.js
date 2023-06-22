var mysql = require("mysql");
var pool = mysql.createConnection({
  host: "localhost",
  port: 3306,
  database: "task",
  user: "root",
  password: "0000",
  multipleStatements: true,
});
module.exports = pool;
