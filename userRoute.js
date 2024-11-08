const express = require('express');
var router = express.Router();

const userController = require('../controllers/userController');
router.post('/users',userController.addUser);
router.get('/users',userController.alluser);

module.exports=router;