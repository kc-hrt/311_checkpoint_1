const express = require('express');
const router = express.Router();
const usersController = require('../controllers/users')

router.get('/users', usersController.listUsers) // get list
router.get('/users/:id', usersController.showUser) // get single item
router.post('/users', usersController.createUser) // create a new item
router.put('/users/:id', usersController.updateUser) // update a single item
router.delete('/users/:id', usersController.deleteUser) // delete an item

module.exports = router