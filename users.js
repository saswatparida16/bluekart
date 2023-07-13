const express = require("express");
const User = require("./models/User");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcrypt");


router.post(
  "/signup",
  [
    body("name").notEmpty().withMessage("Name is required"),
    body("email").isEmail().withMessage("Invalid email"),
    body("password")
      .isLength({ min: 5 })
      .withMessage("Password must be 5 charachters"),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try{
    let user  = await  User.findOne({email:req.body.email});
    if(user){
      return res.status(400).json({error: "sorry a user with this email aready exists"})
    }
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    user =await User.create({
      name: req.body.name,
      email: req.body.email,
      password: hashedPassword,
    })


      // .then((user) => res.json(user))
      // .catch((err) => {
      //   console.log(err);
      //   res.json({ error: "Already have an account In This Email" });
      // });
    res.json({"Send to database":"success"});
  }catch(error){
    console.log(error.withMessage)
    res.status(500).send("some error occur")
  }
  }
);


router.post(
  "/l",
  [
    body("email").isEmail().withMessage("Invalid email"),
    body("password")
      .isLength({ min: 1 })
      .withMessage("Password can not be blank"),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const {email, password} = req.body;
    try{
      let user = await User.findOne({email});
      if(!user){
        return res.status(400).json({error:"Invalid Username or Password"});
      }
      const passwordCompare = await bcrypt.compare(password, user.password);
      if (!passwordCompare) {
        return res.status(400).json({ error: "Invalid Username or Password" });
    }

    res.json({"login":"success"});
  }catch(error){
      console.log(error.withMessage);
      res.status(500).send("some Error Occured");
  }
}) 
module.exports = router;
