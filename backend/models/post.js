const mongoose = require("mongoose");

const postSchema = new mongoose.Schema(
  {
    id: {
      type: String,
      //   required: true,
    },
    caption: {
      type: String,
      max: 500,
    },
    // image: {
    //   type: String,
    //   required: false,
    // },
    tags: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("post", postSchema);
