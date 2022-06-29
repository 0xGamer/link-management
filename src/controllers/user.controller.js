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
  if (!req.params.id) {
    res.statusCode = 400
    next(new Error("Please Specify the user id"))
  }
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
    console.log(user)
    res.status(201).json(user)
  } catch (e) {
    // catches validation and schema errors and sends to err handler
    res.statusCode = 400
    next(e)
  }
};

// Updates existing user with the specified :id
exports.updateUser = (req, res, next) => {
  res.send("test");
};

// Deletes user with the specified :id
exports.deleteUser = (req, res, next) => {
  res.send("test");
};
