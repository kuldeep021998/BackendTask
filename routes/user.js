var express = require("express");
var router = express.Router();
var pool = require("./pool");
var upload = require("./multer");
/* GET users listing. */

router.post("/register_user", function (req, res, next) {
  pool.query(
    "insert into user(email, mobile, name, fname, password) values (?,?,?,?,?)",
    [
      req.body.email,
      req.body.mobile,
      req.body.name,
      req.body.fname,
      req.body.password,
    ],
    function (error, result) {
      if (error) {
        res.status(500).json({ message: "Server Error", status: "false" });
      } else {
        res.status(200).json({ message: "User Registered Successfully" });
      }
    }
  );
});

router.post("/login", function (req, res, next) {
  pool.query(
    "select * from user where (email = ? or mobile = ?) and password = ?",
    [req.body.email, req.body.mobile, req.body.password],
    function (error, result) {
      if (error) {
        res.status(500).json({ message: "error", status: false });
      } else {
        if (result.length == 1) {
          res.status(200).json({
            message: "successfull Login",
            user: result[0],
            status: true,
          });
        } else {
          res.status(200).json({ message: "failed", status: false });
        }
      }
    }
  );
});

module.exports = router;
