const User = require('../models/user.model')

// Gets all the users
exports.getAllUsers = async (req, res, next) => {
  try { 
    let users = await User.find()
    res.status(200).json(users)
  } catch (e) {
    res.statusCode = 404
    next(e)
  }
};

// Gets a single user with the specified :id
exports.getUser = async (req, res, next) => {
  try {
    let user = await User.findById(req.params.id)
    res.status(200).json(user)
  } catch (e) {
    res.statusCode = 404
    next(new Error(`User not found: ${req.params.id}`))
  }
};

// Adds a new user
exports.addUser = async (req, res, next) => {
  let user = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password
  })

  try {
    await user.save()
    res.status(201).json(user)
  } catch (e) {
    // catches validation and schema errors and sends to err handler
    res.statusCode = 400
    next(e)
  }
};

// Updates existing user with the specified :id
exports.updateUser = async (req, res, next) => {
    try {
      let newUser = await User.findOneAndUpdate(
        {_id: req.params.id}, {$set: req.body}, { new: true}
      )
      res.status(201).json(newUser)
    } catch (e) {
    res.statusCode = 404
    next(new Error(`User not found: ${req.params.id}`))
  }
};

// Deletes user with the specified :id
exports.deleteUser = async (req, res, next) => {
    try {
      await User.deleteOne({_id: req.params.id})
      res.status(201).json({
        message: "User deleted successfully"
      }) 
    } catch (e) {
      res.statusCode = 404
      next(new Error(`User not found: ${req.params.id}`))
    }
};
