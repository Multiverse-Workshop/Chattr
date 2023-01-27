const express = require('express');
const messageRouter = express.Router();

//import router logic from controller
const{
    getMessagesFromUsername,
    editMessageById,
    deleteMessageById,
    getAllMessages,
} = require('../controller/messageController');

const{
    isAdmin,
    protectedRoute
} = require('../middeware/authMiddleware')

messageRouter.get('/', protectedRoute, getMessagesFromUsername);
messageRouter.put('/id/:id',protectedRoute, editMessageById);
messageRouter.delete('/id/:id',protectedRoute, deleteMessageById);
messageRouter.get('/admin', protectedRoute, isAdmin, getAllMessages);

module.exports = messageRouter;