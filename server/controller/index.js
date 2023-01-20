require("dotenv").config();
const Data = require("../data.json");
const pool = require("../queries");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const e = require("express");

const secret = process.env.JWT_SECRET;

exports.registerUser = async (req, res) => {
  const { username, email, password, firstname, lastname } = req.body;
  try {
    if (!username || !email || !password || !firstname || !lastname) {
      res.status(400).send(`Please include all fields to register`);
    }
    //check if user exists
    pool.query(
      "SELECT * FROM users WHERE userName = $1",
      [username],
      async (error, results) => {
        if (error) {
          throw error;
        }
        if (results.rows[0]) {
          res.status(400).json({
            success: false,
            message: `${username} already exists, ${results.rows[0]}`,
          });
        }
        //user does not exist then add them
        else{
          const hash = await bcrypt.hash(password, 10);
          pool.query(
            "INSERT INTO users (username, email, password, firstName, lastName) VALUES ($1, $2, $3, $4, $5) RETURNING *",
            [username, email, hash, firstname, lastname],
            (error, results) => {
              if (error) {
                throw error;
              }
              res.status(201).json({
                success: true,
                message: `User registered: ${results.rows[0].username}`,
                token: jwt.sign(
                  {
                    userId: results.rows[0].id,
                    username: results.rows[0].username,
                  },
                  secret,
                  {
                    expiresIn: "30d",
                  }
                ),
              });
            }
          );
        }
      }
    );
  } catch (error) {
    res.status(400).json({
      success: false,
      message: `User could not be registered - Error: ${error}`,
    });
  }
};

exports.loginUser = async (req, res) => {
  try {
    const { username, password } = req.body;
    pool.query(
      "SELECT * FROM users WHERE username = $1",
      [username],
      async (error, results) => {
        if (error) {
          throw error;
        }
        const nonHash = await bcrypt.compare(
          password,
          results.rows[0].password
        );
        nonHash
          ? res.status(200).json({
              success: true,
              message: `${username} has been logged in`,
            })
          : res.status(400).json({
              success: false,
              message: `Password or Username incorrect`,
            });
      }
    );
  } catch (error) {
    res.status(400).json({
      success: false,
      message: `Login failed - Error: ${error}`,
    });
  }
};

exports.getAllUsers = async (req, res) => {
  try {
    pool.query("SELECT * FROM users ORDER BY id ASC", (error, results) => {
      if (error) {
        throw error;
      }
      res.status(200).json({
        success: true,
        message: results.rows,
      });
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: `All Users not returned - Error: ${error}`,
    });
  }
};

exports.getUserById = async (req, res) => {
  try {
    const id = Number(req.params.id);
    pool.query(
      "SELECT * FROM users WHERE id = $1",
      [id],
      async (error, results) => {
        if (error) {
          throw error;
        }
        res.status(200).json({
          success: true,
          message: results.rows,
        });
      }
    );
  } catch (error) {
    res.status(400).json({
      success: false,
      message: `ID not found - Error: ${error}`,
    });
  }
};

exports.getUserByUserName = async (req, res) => {
    try {
      const username = req.params.username;
      console.log(username)
      console.log(typeof username)
      pool.query(
        "SELECT * FROM users WHERE username = $1",
        [username],
        async (error, results) => {
          if (error) {
            throw error;
          }
          res.status(200).json({
            success: true,
            message: results.rows[0],
          });
        }
      );
    } catch (error) {
      res.status(400).json({
        success: false,
        message: `${username} not found - Error: ${error}`,
      });
    }
  };

  exports.deleteUserById = async(req, res) => {
    try{
        const id = Number(req.params.id);
    pool.query(
      "DELETE FROM users WHERE id = $1",
      [id],
      async (error, results) => {
        if (error) {
          throw error;
        }
        res.status(200).json({
          success: true,
          message: `user with id: ${id} has been deleted`,
        });
      }
    );

    }catch(error){
        res.status(400).json({
            success: false,
            message: `user with id: ${id} could not be deleted - Error: ${error}`,
          });
    }
  }
  exports.deleteUserByUserName = async(req, res) => {
    try{
        const username = req.params.username;
    pool.query(
      "DELETE FROM users WHERE username = $1",
      [username],
      async (error, results) => {
        if (error) {
          throw error;
        }
        res.status(200).json({
          success: true,
          message: `${username} has been deleted`,
        });
      }
    );

    }catch(error){
        res.status(400).json({
            success: false,
            message: `${username} could not be deleted - Error: ${error}`,
          });
    }
  }