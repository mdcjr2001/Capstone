const mongoose = require("mongoose");

const postSchema = new mongoose.Schema(
  {
    id: {
      type: String,
    //   required: true,
    },
    Caption: {
      type: String,
      max: 500,
    },
    // image: {
    //   type: String,
    //   required: false,
    // },
    Tags: {
      type: Array,
      default: [],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("post", postSchema);