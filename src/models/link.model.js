const mongoose = require("mongoose");

const linkSchema = new mongoose.Schema(
  {
    linkurl: {
      type: String,
      required: [true, "Link is required"],
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