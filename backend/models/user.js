const mongoose = require("mongoose");
const bcrypt = require('bcrypt');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    // firstName: {type: String, trim: true, required: true },
    // lastName: {type: String, trim: true, required: true },
    emailId: {type: String, trim: true, required: true },
    password: { type: String, required: true },
    // createdAt: { type: Date, default: Date.now },
    // updatedAt: { type: Date, default: Date.now },
});
// Hash the password before saving it to the database
userSchema.pre('save', async function (next) {
    const user = this;
    if (!user.isModified('password')) return next();
  
    try {
      const salt = await bcrypt.genSalt();
      user.password = await bcrypt.hash(user.password, salt);
      next();
    } catch (error) {
      return next(error);
    }
  });
  
  // Compare the given password with the hashed password in the database
  userSchema.methods.comparePassword = async function (password) {
    return bcrypt.compare(password, this.password);
  };
  
//   const User = mongoose.model('User', userSchema);

// const collection = mongoose.model("collection", new Schema)

module.exports = mongoose.model("user", userSchema);

// module.exports = collection