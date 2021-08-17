var express = require('express');
var bodyParser = require('body-parser');
var db = require('./database');
var app = express();
var port = 3000;
app.use(logger);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("USER"));
app.get('/', function (req, res) {
    res.sendFile(__dirname + "/UI/index.html");
});
app.listen(port, function () {
    console.log("Example app listening at http://localhost:" + port);
});
app.get('/users/get', db.getUsers);
app.get('/users/:id', db.getUserById);
app.post('/users/post', db.createUser);
app["delete"]('/users/:id', db.deleteUser);
app.put('/users/:id', db.updateUser);
function logger(req, res, next) {
    console.log(req.method);
    console.log(req.url);
    next();
}
