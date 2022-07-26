
const mongoose = require('mongoose');
const bcrypt = require('bcrypt')
const validator =require("validator");



const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 3
  },
  password:{
    type:String,
    require : true
  }
}, {
  timestamps: true,
});

//static signup method
userSchema.statics.signup = async function (username, password){

  //validation
  if(!username || !password){
    throw Error("All fields must be filled")
  }
  if(!validator.isEmail(username)){
    throw Error("please enter a valid email")
  }
  if(!validator.isStrongPassword(password)){
    throw Error("password not strong enough")
  }

  const exists = await this.findOne({ username })
  if(exists){
    throw Error("Email already in use")
  }

  const salt = await bcrypt.genSalt(10)
  const hash = await bcrypt.hash(password, salt)

  const user = await this.create({username , password : hash })

  return user
}

//static login method
userSchema.statics.login = async function (username, password){

  if(!username || !password){
    throw Error("All fields must be filled")
  }

  const user = await this.findOne({username})
  if(!user){
    throw Error("Incorrect email")
  }

  const match = await bcrypt.compare(password, user.password)

  if (!match){
    throw Error("Incorrect password")
  }

  return user
}



const User = mongoose.model('User', userSchema);

module.exports = User;