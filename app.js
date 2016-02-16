// Requires \\
var express = require('express');
var bodyParser = require('body-parser');
var logger = require('morgan')

// Create Express App Object \\
var app = express();

app.use(logger('dev'))

// Application Configuration \\
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));

// Create Routes

app.get('/', function(req, res){
	res.sendFile('index.html', { root : './public'})
})

app.post('/formsubmit', function(req, res){
	res.redirect('/success')
})

app.get('/success', function(req, res){
	res.send('Success!')
})

// Creating Server and Listening for Connections \\
var port = 3000
app.listen(port, function(){
  console.log('Server running on port ' + port);

})
