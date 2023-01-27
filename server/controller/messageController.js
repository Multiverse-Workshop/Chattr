require("dotenv").config();
const pool = require("../queries");
const { messages } = require("../data.json");


//only returns messages associates with user login - due to token validation
exports.getMessagesFromUsername = async (req, res) => {
  try {
    const username = req.username;
    //at this point user should be logged in with token
    pool.query(
      "SELECT * FROM users WHERE username = $1",
      [username],
      async (error, results) => {
        if (error) {
          throw error;
        }

        const userMessages = messages.filter(
          (message) => username == message.user || username === message.sentTo
        );

        userMessages.length > 0
          ? res.status(200).json({
              success: true,
              message: JSON.stringify(userMessages),
            })
          : res.status(400).json({
              success: false,
              message: `${username} does not have messages`,
            });
      }
    );
  } catch (error) {
    res.status(401).json({
      success: false,
      message: `Not Authorized: ${error}`,
    });
  }
};

//at this point user should be in and authenticated, user can only edit their own messages
exports.editMessageById = async (req, res) => {
  try {
    const username = req.username;
    const id = Number(req.params.id);
    const { message } = req.body;
    //at this point user should be logged in with token
    pool.query(
      "SELECT * FROM users WHERE username = $1",
      [username],
      async (error, results) => {
        if (error) {
          throw error;
        }

        let userMessage = messages.filter(
          (message) => username == message.user && id == message.id
        );

        if(userMessage.length > 0){
          userMessage = message
            res.status(200).json({
              success:true,
              message: `message ${id} updated to '${userMessage}'`
            })
        }else{
          res.status(400).json({
            success: false,
            message: `Could not find message with id of ${id}`,
          });
        }
      });
      
  } catch (error) {
    res.status(401).json({
      success: false,
      message: `Not Authorized: ${error}`,
    });
  }
}

//at this point user should be in and authenticated, user can only delete their own messages
exports.deleteMessageById = async (req, res) => {
  try {
    const username = req.username;
    const id = Number(req.params.id);
    //at this point user should be logged in with token
    pool.query(
      "SELECT * FROM users WHERE username = $1",
      [username],
      async (error, results) => {
        if (error) {
          throw error;
        }

        let userMessage = messages.filter(
          (message) => username == message.user && id == message.id
        );

        if(userMessage.length > 0){
            res.status(200).json({
              success:true,
              message: `The message: '${userMessage[0].message}' by user: '${userMessage[0].user}' with id: '${userMessage[0].id}' has been deleted`
            })
        }else{
          res.status(400).json({
            success: false,
            message: `Could not find message with id of ${id}`,
          });
        }
      });
      
  } catch (error) {
    res.status(401).json({
      success: false,
      message: `Not Authorized: ${error}`,
    });
  }
}

//this route can only be completed by an admin user
exports.getAllMessages = async(req, res) => {
  try {
    const username = req.username;
    //at this point user should be logged in with token
    pool.query(
      "SELECT * FROM users WHERE username = $1",
      [username],
      async (error, results) => {
        if (error) {
          throw error;
        }
        
          res.status(200).json({
            success:true,
            message: JSON.stringify(messages)
          })
        });
  } catch (error) {
    res.status(401).json({
      success: false,
      message: `Not Authorized: ${error}`,
    });
  }
}