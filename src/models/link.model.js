const mongoose = require("mongoose");

const linkSchema = new mongoose.Schema(
  {
    link: {
      type: String,
      required: [true, "Link is required"],
      unique: true,
    },

    file: {
      type: Boolean,
      required: [true, "Link Type is required"],
    },

    form: {
      type: Boolean,
      required: [true, "Link Type is required"],
    },
  },
  { collection: "links" }
);

module.exports = mongoose.model("Link", linkSchema);