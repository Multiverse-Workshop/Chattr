const express = require('express');
const router = express.Router();

//import router logic from controller
const{
    getAllUsers,
    getUserById,
    loginUser,
    registerUser
} = require('../controller/index');

//routers
router.get('*/users', getAllUsers);
router.get('*/users/:id', getUserById);
router.get('*/register', registerUser);
router.get('*/login', loginUser);

module.exports = router;