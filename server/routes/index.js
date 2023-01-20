const express = require('express');
const router = express.Router();

//import router logic from controller
const{
    getAllUsers,
    getUserById,
    loginUser,
    registerUser,
    getUserByUserName,
    deleteUserById,
    deleteUserByUserName,
    getMessagesFromUsername,
    protectedRoute
} = require('../controller/index');

//routers
router.get('*/users', getAllUsers);
router.get('*/users/id/:id', getUserById);
router.post('*/register', registerUser);
router.post('*/login', loginUser);
router.get('*/users/username/:username', getUserByUserName);
router.delete('*/users/id/:id', deleteUserById);
router.delete('*/users/username/:username', deleteUserByUserName);
router.get('*/messages', protectedRoute, getMessagesFromUsername);



module.exports = router;