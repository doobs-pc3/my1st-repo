// import express module for the purpose of creating backend service:
const express = require("express"); 

// import body-parser module for the purpose of parsing body's content from request:
const bodyParser = require("body-parser");

// import cross-origin resource sharing module for server side configuration:
const cors = require("cors");

// to create a router we first 'require' the route module which in this case is the user module:
const userRouter = require("./user");

// create an express application and then add the router specifying a URL path of user:
application = express();
application.use(cors());
application.use(bodyParser.json());
application.use("/user", userRouter);    

// start the express application on port 8000:
application.listen(8000, (error) => {
  if (!error) {
    console.log("application started succesfully");
  }
});
