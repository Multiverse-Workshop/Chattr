require('dotenv').config()
const Data = require('../data.json');
const pool = require('../queries');
const bcrypt = require('bcrypt');

exports.registerUser = async(req, res) => {
    const {userName, email, password, firstName, lastName} = req.body;
    try{
        const hash = await bcrypt.hash(password, 10);
        pool.query('INSERT INTO users (userName, email, password, firstName, lastName) VALUES ($1, $2, $3, $4, $5) RETURNING *', [userName, email, hash, firstName, lastName], (error, results) => {
            if (error) {
              throw error
            }
            res.status(201).json({
                success: true, 
                message:`User registered: ${results.rows[0].id}`
            }) 
        })
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