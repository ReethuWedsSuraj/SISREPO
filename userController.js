const express = require('express');
const User = require('../service/user');

const addUser=(req,res)=>{
const user=new User(req.body);
    user.save().then((user)=>{
        res.send(user);
        console.log(user);
    }).catch((error)=>{
        res.send(error);
    })
}

const alluser = (req,res)=>{
User.find({}).then((users)=>{
    res.send(users);
    console.log(users);
}).catch((error)=>{
    res.send(error);
})
}

module.exports= {addUser,alluser};