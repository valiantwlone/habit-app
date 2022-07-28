
const mongoose = require('mongoose');
const bcrypt = require('bcrypt')

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
userSchema.statics.signup = async(email, password)=>{
  const exists = await this.findOne({ email })
  if(exists){
    throw Error("Email already in use")
  }

  const salt = await bcrypt.genSalt(10)
  const hash = await bcrypt.hash(password, salt)

  const user = await this.create({email , password : hash })
  return user
}

const User = mongoose.model('User', userSchema);

module.exports = User;