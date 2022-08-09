const router = require('express').Router();
let User = require('../models/user.model');
const bcrypt = require('bcrypt')
const validator =require("validator");
const { signupUser,loginUser } = require('../controller/usersCotroller');



router.route('/').get((req, res) => {
  User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const username = req.body.username;

  const newUser = new User({username});

  newUser.save()
    .then(() => res.json('User added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});


router.post('/signup', signupUser)
router.post('/login' ,loginUser)
  




module.exports = router;

// if (!username || !password){ 
//   throw Error("Fields cannot be empty")

// }

// const salt = await bcrypt.genSalt(10)
// const hash = await bcrypt.hash(password, salt)
// const newUser = new User({username , password : hash })

// newUser.save()
// .then(() => res.json("New User Added!"))
// .catch(err => res.status(400).json("Error :" + err))
