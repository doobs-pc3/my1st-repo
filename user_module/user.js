const { request } = require("express");
const express = require("express");
const connection = require("./database");

router = express.Router();

// **GET ALL** users request:
router.get("/", (request, response) => {
  connection.query(`select * from user`, (errors, results) => {
    if (errors) {
      response.status(400).send("server error");
    } 
    else {
      response.send(results);
    } 
  });
});


// **GET ONE** user request:
router.get("/:userid", (request, response) => {
  const { userid } = request.params;
  connection.query(`select * from user where user_id = ${request.params.userid}`,
  (errors, results) => {
    if (errors) {
      response.status(400).send("server error");
    } 
    else {
      response.send(results);
    } 
  });
});


module.exports = router;
