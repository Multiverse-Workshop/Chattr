const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json({ type: 'application/json' }));

app.get('/', function (req, res) {
    return res.send('Hello world');
});

app.get('/users', function (req, res) {
    return res.send('this is where users will go')
});

// app.post('/', function (req, res) {
//     return
// })

// app.get('/users/:id', function (req, res) {
//     return res.send()
// });


app.listen(process.env.PORT || 8080);