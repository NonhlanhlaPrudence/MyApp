const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Users = require('../models/users_schema');


//@route POST
//@desc: Registering new users
router.post("/register", async(req, res) => {
    //get user data from frontend
    const {
      name,
      surname,
      email,
      password
  } = req.body;
  
  
  try {
      //register new user
      const newUser = new Users({
          _id:mongoose.Types.ObjectId(),
          name: name,
          surname: surname,
          email: email,
          password: password
      })
  
      //check if user already exists
      userFound = await Users.findOne({ email: email }); 
      if (userFound) {
          return res.status(201).json({
              message: "User already exists.",
          })
      } else {
      //save new user
      newUser.save((err) => {
          if (err) {
              return console.log(err);
          } else {
              
              res.status(201).json({
                  message: "Registered, Please login."
              });
          }
      })
  }
      
  } catch (error) {
      res.status(500).json({
          message: "Failed to save new user",
          err: error
      })
  }
  
  });