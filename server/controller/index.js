require('dotenv').config()
const Data = require('../data.json');
const pool = require('../queries');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET

exports.registerUser = async(req, res) => {
    const {username, email, password, firstName, lastName} = req.body;
    try{
        if(!username || !email || !password || !firstName || !lastName){
            res.status(400).send(`Please include all fields to register`);
        }
        //add something to check if user already exists
        const hash = await bcrypt.hash(password, 10);
        pool.query('INSERT INTO users (username, email, password, firstName, lastName) VALUES ($1, $2, $3, $4, $5) RETURNING *', [username, email, hash, firstName, lastName], (error, results) => {
            if (error) {
              throw error
            }
            res.status(201).json({
                success: true, 
                message:`User registered: ${results.rows[0].username}`,
                token: jwt.sign({userId: results.rows[0].id, username: results.rows[0].username}, secret, {
                    expiresIn: '30d'
                })
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
        const {username, password} = req.body;
        pool.query('SELECT * FROM users WHERE username = $1', [username], async(error, results) => {
            if (error) {
              throw error
            }
            const nonHash = await bcrypt.compare(password, results.rows[0].password);
            nonHash ? res.status(200).json({
                success: true,
                message: `${username} has been logged in`
            }) : res.status(400).json({
                success: false,
                message: `Password or Username incorrect`
            });
        })
    }catch(error){
        res.status(400).json({
            success: false,
            message: `Login failed - Error: ${error}`
        })
    }
}

exports.getAllUsers = async(req, res) => {
    try{
        pool.query('SELECT * FROM users ORDER BY id ASC', (error, results) => {
            if (error) {
              throw error
            }
            res.status(200).json({
                success: true,
                message:results.rows
            })
        })
            
    }catch(error){
        res.status(400).json({
            success: false,
            message: `All Users not returned - Error: ${error}`
        })
    }
      
}

//still need to change below to work with psql
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