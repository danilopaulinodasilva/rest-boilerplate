const express = require('express'),
      routes  = express();

routes.use("/user", require("./user"));

module.exports = routes;
