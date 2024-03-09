const mongoose = require("mongoose");

const postSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
    //   required: true,
    },
    caption: {
      type: String,
      max: 500,
    },
    img: {
      type: String,
    },
    tags: {
      type: Array,
      default: [],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("post", postSchema);