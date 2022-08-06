const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const cors = require("cors");

const links = require("./routes/link.router");

// import middlewares
const notFound = require("./middlewares/notFound");
const handleErrors = require("./middlewares/handleErrors");

const app = express();

// Setup logging, .env, cors, security headers and body parser
app.use(morgan(":method :url :status :response-time ms"));
require("dotenv").config();
app.use(cors());
app.use(helmet());
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Hello From Express",
  });
});

// attatch the user router
app.use("/links", links);

// When no above urls match
app.use(notFound);

// Error handler
app.use(handleErrors);

module.exports = app;
