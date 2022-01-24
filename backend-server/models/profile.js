const mongoose = require("mongoose")
const { Schema } = mongoose;
const profileSchema = new Schema({
    user : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "user"
      },
    image : {
        type : String,
        required : true
    },
    age : {
        type : Number,
        required : true
    },
    dateOfBirth : {
        type : Date,
        required : true
    },
    education : {
        type : String,
        required : true
    },
    createdAt : {
        type : Date,
        default : Date.now
    }
  });
  const Profile = mongoose.model("profile", profileSchema)
  module.exports = Profile