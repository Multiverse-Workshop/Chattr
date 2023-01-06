const express = require('express');
const Data = require('../data.json');

exports.registerUser = async(req, res) => {
    try{
        res.send('Try to register');
    }catch(error){
        res.status(400).json({
            success: false,
            message: `User could not be registered - Error: ${error}`
        })
    }
}

exports.loginUser = async(req, res) => {
    try{
        res.send('Try to login');
    }catch(error){
        res.status(400).json({
            success: false,
            message: `Login failed - Error: ${error}`
        })
    }
}

exports.getAllUsers = async(req, res) => {
    try{
        res.send(Data.Users);

    }catch(error){
        res.status(400).json({
            success: false,
            message: `All Users not returned - Error: ${error}`
        })
    }
      
}

exports.getUserById = async(req, res) => {
    try{
        const id = Number(req.params.id);
        //filtering users array to find correct user
        let foundUser = Data.Users.filter((users) => {
            return users.id === id;
        });
        res.send(foundUser);
    }catch(error){
        res.status(400).json({
            success: false,
            message: `User not found - Error: ${error}`
        })
    }
}