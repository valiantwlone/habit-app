const User = require('../models/user.model')
const jwt = require("jsonwebtoken")
const SECRET = process.env.SECRET


const createToken =(_id)=>{
    return jwt.sign({_id}, SECRET , {expiresIn :'3d'})
  }

//login user
const loginUser = async(req,res)=>{
    const {username,password}=req.body
    try{
        const user = await User.login(username,password)

        const token = createToken(user._id)
        res.status(200).json({username, token})
    }catch(error){
        res.status(400).json({error: error.message})
    }

}

//signup user
const signupUser = async (req,res)=>{
    const {username , password} = req.body

    try{
        const user = await  User.signup(username, password)

        //Create JWT Token
        const token = createToken(user._id)

        res.status(200).json({username,token})
    }catch(error){
        res.status(400).json({error: error.message})

    }
}
module.exports ={loginUser,signupUser}