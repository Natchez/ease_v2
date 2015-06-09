var express = require('express');
var bodyParser = require('body-parser');
var http = require('http');
var path = require('path');
var app = express();

app.set('name', 'Ease');
app.set('port', process.env.PORT || 3000);
app.use('/', express.static(__dirname + '/www'));
app.use(bodyParser.json());


/////////////////////////////////////////// DATABASE CONNECTION /////////////////////////////////////

var mysql = require('mysql');
var connection = mysql.createPool({
    host: '104.154.45.71',
    user: 'admin',
    password: 'anfc2015',
    database: 'ease'
});

/////////////////////////////////////////// CREATE SERVER STUFFS /////////////////////////////////////

http
    .createServer(app)
    .listen(
        app.get('port'),
        "0.0.0.0"
    );
console.log("Ease Up on PORT 3000");


/////////////////////////////////////////// USER CRUD LOGIN ////////////////////////////////////

app.post('/userLogin', function (req, res) {
    connection.query('SELECT * from user WHERE username = ? && password = ?', [(req.body.username), (req.body.password)], function (err, user) {
        if (typeof user == 'undefined' || user.length == 0) {
            res.status(401).json({
                message: 'Please verify your email/pswd'
            });
        } else {
            console.log(user);
            res.status(200).json({
                message: 'Logged In',
                user: user
            });
        }
    });
});


app.post('/userRegister', function (req, res, next) {
    var member = req.body;
    connection.query('INSERT INTO user SET ?', member, function (err, result) {
        console.log(member);
        if (err)
            res.status(401).json(err);
        else
            res.status(201).json({
                message: 'Account Created'
            });
    });

});



/////////////////////////////////////////// CLIENT CRUD ////////////////////////////////////

app.post('/addClient', function (req, res, next) {
    var client = req.body;
    connection.query('INSERT INTO clients SET ?', client, function (err, result) {
        // error saving user in db
        if (err) {
            res.status(401).json(err);
        } else
            res.status(201).json({
                message: 'Client Created'
            });
    });

});

app.get('/getList', function (req, res) {
    var rows = "";
    connection.query('SELECT * FROM clients', function (err, rows, result) {
        for (var i = 0; i < rows.length; i++)
            console.log('The solution is: ', rows[i].fname);
        res.status(200).json(rows);
    });
});

app.get('/getClient', function (req, res) {
    connection.query('SELECT * FROM ease.clients WHERE idclients = ?', [(req.query.id)], function (err, client) {
         if (typeof client == 'undefined' || client.length == 0) {
            res.status(401).json({
                message: 'Incorrect Query'
            });
        } else {
            res.status(200).json({
                message: 'Client Found',
                client: client
            });
        }
    });
});

app.post('/delClient', function(req, res){
    var client = req.body.id;
    connection.query('DELETE FROM ease.clients WHERE idclients= ?', client, function(err, client){
        if (typeof client == 'undefined' || client.length == 0) {
            res.status(401).json({
                message: 'Incorrect Query'
            });
        } else {
            console.log('deleted')
            res.status(200).json({
                message: 'Client Deleted'
            });
        }
    });
    
});


/////////////////////////////////////////// ARCHVIE CRUD ////////////////////////////////////

app.get('/getArchiveList', function (req, res) {
    var rows = "";
    connection.query('SELECT * FROM ease.archive', function (err, rows, result) {
        for (var i = 0; i < rows.length; i++)
            console.log('The solution is: ', rows[i].fname);
        res.status(200).json(rows);
    });
});

app.get('/getSingleTimer', function (req, res) {
    connection.query('SELECT * FROM ease.archive WHERE idarchive = ?', [(req.query.id)], function (err, archive) {
         if (typeof archive == 'undefined' || archive.length == 0) {
            res.status(401).json({
                message: 'Incorrect Query'
            });
        } else {
            res.status(200).json({
                message: 'Entry Found',
                client: client
            });
        }
    });
});
