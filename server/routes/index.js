const express = require('express');
const router = express.Router();

//import router logic from controller
const{
    getAllUsers,
    getUserById,
    loginUser,
    registerUser,
    getUserByUserName
} = require('../controller/index');

//routers
router.get('*/users', getAllUsers);
router.get('*/users/id/:id', getUserById);
router.post('*/register', registerUser);
router.post('*/login', loginUser);
router.get('*/users/username/:username', getUserByUserName);


module.exports = router;