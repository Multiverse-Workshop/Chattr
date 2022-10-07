const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const Data = require('./data')

app.use(bodyParser.json({ type: 'application/json' }));

app.get('/', function (req, res) {
    return res.send('Hello world');
});

app.get('/users', function (req, res) {
    return res.send(Data.Users)
});

// app.post('/login', function (req, res) {
//     return res.send()
// })

app.get('/users/:id', function (req, res) {
    const id = req.params.Data.Users.id
    return res.send(Data.Users(id))
});


app.listen(process.env.PORT || 8080);