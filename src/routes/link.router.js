const express = require("express");
const router = express.Router();
const links = require("../controllers/link.controller");

// Gets all the links
router.get("/", links.getAllLinks);

// Gets a single user with the specified :id
router.get("/:id", links.getLink);

// Adds a new user
router.post("/", links.addLink);

// Updates existing user with the specified :id
router.patch("/:id", links.updateLink);

// Deletes user with the specified :id
router.delete("/:id", links.deleteLink);

module.exports = router;
