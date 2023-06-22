var express = require("express");
var router = express.Router();
var pool = require("./pool");
var upload = require("./multer");
/* GET users listing. */

router.post("/send_data", function (req, res, next) {
  pool.query(
    "insert into content(text) values (?)",
    [req.body.text],
    function (error, result) {
      if (error) {
        res.status(500).json({ message: "Server Error", status: "false" });
      } else {
        res.status(200).json({ message: "Data Send Successfully" });
      }
    }
  );
});

router.get("/get_data", function (req, res, next) {
  pool.query(
    "select * from content",
    function (error, result) {
      if (error) {
        res.status(500).json({ message: "Server Error", status: "false" });
      } else {
        res
          .status(200)
          .json({ message: "Data Send Successfully", result: result });
      }
    }
  );
});

router.post("/edit_data", function (req, res, next) {
  pool.query(
    "update content set text = ? where contentid = ?",
    [req.body.text, req.body.contentid],
    function (error, result) {
      if (error) {
        res.status(500).json({ message: "Server Error", status: "false" });
      } else {
        res.status(200).json({ message: "Data Send Successfully" });
      }
    }
  );
});

router.post("/delete", function (req, res, next) {
  pool.query(
    "delete from content where contentid = ?",
    [req.body.contentid],
    function (error, result) {
      console.log(error);
      if (error) {
        res.status(500).json({ message: "Server Error", status: "false" });
      } else {
        res.status(200).json({ message: "Data Delete Successfully" });
      }
    }
  );
});

module.exports = router;
