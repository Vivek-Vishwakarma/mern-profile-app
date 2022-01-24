const express = require("express")
const router = express.Router()
const User = require('../models/user')
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")

router.post( "/register" , async (req , res) => {
    const {name,email,password} = await  req.body;
    try {
        let user = await User.findOne({email:email})
        const salt = await bcrypt.genSalt();
        const passwordHash = await bcrypt.hash(password, salt);
        if(user){
            res.send({error : "user already exist"})
        } 
        else{
            user = await User.create({
                name : name,
                email : email,
                password : passwordHash
            })
            res.send(user)
        }
    } catch (error) {
        res.send({error : "cant create user"})
    }
})

router.post( "/login" , async (req , res) => {
    const {email,password} = await  req.body;
    try {
        let user = await User.findOne({email:email})
        if(!user) res.send({error : "user doesnt exist"})
        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch) res.send({error : "something wrong with your credentials"})
        const token = jwt.sign({ id: user._id }, "hello")
        res.send({token : token, name : user.name, email : user.email})
        
    } catch (error) {
        res.send({error : "problem logging in"})
    }
})
router.get( "/allusers" , async (req , res) => {
    const alluser = await User.find()
    res.send(alluser)
})

module.exports = router;