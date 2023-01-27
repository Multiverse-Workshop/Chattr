const express = require('express');
const userRouter = express.Router();

//import router logic from controller
const{
    getAllUsers,
    getUserById,
    loginUser,
    registerUser,
    getUserByUserName,
    deleteUserById,
    deleteUserByUserName,
} = require('../controller/userController');

const{
    isAdmin,
    protectedRoute
} = require('../middeware/authMiddleware')

//routers
userRouter.get('/', getAllUsers);
userRouter.get('/id/:id', getUserById);
userRouter.post('/register', registerUser);
userRouter.post('/login', loginUser);
userRouter.get('/username/:username', getUserByUserName);
userRouter.delete('/admin/id/:id',protectedRoute, isAdmin, deleteUserById);
userRouter.delete('/username/:username', protectedRoute, deleteUserByUserName);


module.exports = userRouter;