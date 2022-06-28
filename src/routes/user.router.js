const express = require('express')
const router = express.Router()
const users = require('../controllers/user.controller')

// Gets all the users
router.get('/', users.getAllUsers)

// Gets a single user with the specified :id
router.get('/:id', users.getUser)

// Adds a new user
router.post('/', users.addUser)

// Updates existing user with the specified :id
router.patch('/:id', users.updateUser)

// Deletes user with the specified :id
router.delete('/:id', users.deleteUser)

module.exports = router