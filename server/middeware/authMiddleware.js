require("dotenv").config();
const pool = require("../queries");
const jwt = require("jsonwebtoken");

const secret = process.env.JWT_SECRET;

//validate token and user
exports.protectedRoute = async (req, res, next) => {
    let token;
  
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer")
    ) {
      try {
        token = req.headers.authorization.split(" ")[1];
        const userToken = jwt.verify(token, secret);
  
        pool.query(
          "SELECT * FROM users WHERE username = $1",
          [userToken.username],
          async (error, results) => {
            if (error) {
              throw error;
            }
            req.username = results.rows[0].username;
            req.admin = results.rows[0].admin;
            next();
          }
        );
      } catch (error) {
        res.status(401).json({
          success: false,
          message: `Not authorized to access - Error: ${error}`,
        });
      }
    }
    if (!token) {
      res.status(401).json({
        success: false,
        message: `Not authorized to access`,
      });
    }
  };
  exports.isAdmin = async (req, res, next) => {
    if (req.username && req.admin) {
      next();
    } else {
      res.status(401).json({
        success: false,
        message: `You are not authorized, not an admin`
      });
    }
  }