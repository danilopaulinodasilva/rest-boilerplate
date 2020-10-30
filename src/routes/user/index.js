const express = require('express'),
      routes  = express.Router();

const UserController = require('../../app/controllers/UserController');

routes
    .get('/', UserController.index)
    .get('/:guid', UserController.show)
    .post('/', UserController.store)
    .put('/:guid', UserController.update)
    .delete('/:guid', UserController.destroy);

module.exports = routes;
