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


// POST:
router.post("/", (request, response) => {
  connection.query(
    `insert into user(user_idcard, user_firstname, user_lastname, user_gender, user_dob, user_phone, user_email, user_address1, user_address2, user_postcode) values (${request.body.idcard}, '${request.body.firstname}', '${request.body.lastname}', '${request.body.gender}', '${request.body.dob}', '${request.body.phone}', '${request.body.email}', '${request.body.address1}', '${request.body.address2}', '${request.body.postcode}')`,
    (errors, results, fields) => {
      if (errors) {
        console.log(errors);
        response.status(400).send("server error.");
      } 
      else {
        response.send(`User with the name ${request.body.firstname} added to the database.`);
      }
    }
  );
});


// PUT:
router.put("/:userid", (request, response) => {
  const { userid } = request.params;
  connection.query(
    `update user set user_email = '${request.body.email}' where user_id = ${request.params.userid}`,
    (errors, results) => {
      if (errors) {
        console.log(errors);
        response.status(400).send("server error.");
      } 
      else {
        response.send(`The email of user bearing id ${request.params.userid} has been updated.`);
      }
    }
  );
});


// DELETE:
router.delete("/:userid", (request, response) => {
  const { userid } = request.params;
  connection.query(
    `delete from user where user_id = ${request.params.userid}`,
    (errors, results) => {
      if (errors) {
        console.log(errors);
        response.status(400).send("server error.");
      } 
      else {
        response.send(`User with id ${request.params.userid} deleted from database`);
      }
    }
  );
});


module.exports = router;
