const Link = require("../models/link.model");

// Gets all the users
exports.getAllLinks = async (req, res, next) => {
  try {
    let links = await Link.find();
    res.status(200).json(links);
  } catch (e) {
    res.statusCode = 404;
    next(e);
  }
};

// Gets a single user with the specified :id
exports.getLink = async (req, res, next) => {
  try {
    let link = await Link.findById(req.params.id);
    res.status(200).json(link);
  } catch (e) {
    res.statusCode = 404;
    next(new Error(`Link not found: ${req.params.id}`));
  }
};

// Adds a new user
exports.addLink = async (req, res, next) => {
  let link = new Link({
    linkurl: req.body.linkurl,
    file: req.body.file,
    form: req.body.form,
  });

  try {
    await link.save();
    res.status(201).json(link);
  } catch (e) {
    // catches validation and schema errors and sends to err handler
    res.statusCode = 400;
    console.log(e);
    next(e);
  }
};

// Updates existing user with the specified :id
exports.updateLink = async (req, res, next) => {
  try {
    let newLink = await Link.findOneAndUpdate(
      { _id: req.params.id },
      { $set: req.body },
      { new: true }
    );
    res.status(201).json(newLink);
  } catch (e) {
    res.statusCode = 404;
    next(new Error(`Link not found: ${req.params.id}`));
  }
};

// Deletes user with the specified :id
exports.deleteLink = async (req, res, next) => {
  try {
    await Link.deleteOne({ _id: req.params.id });
    res.status(201).json({
      message: "Link deleted successfully",
    });
  } catch (e) {
    res.statusCode = 404;
    next(new Error(`Link not found: ${req.params.id}`));
  }
};