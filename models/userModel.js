const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: [true, "Please entre your name"],
  },
  email: {
    type: String,
    required: true,
    trim: true,
    unique:[true, "Please entre your email"],
  },
  password: {
    type: String,
    required: [true, "Please entre your password"],
  },
  role: {
    type: Number,
    default: 0, //0=user , 1= admin
  },
  avatar: {
    type: String,
    default:
      "https://res.cloudinary.com/hatemhadiri/image/upload/v1635321447/sample.jpg",
  },
  
 
});

module.exports = mongoose.model("User", userSchema);
