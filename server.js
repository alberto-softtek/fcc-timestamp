// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({optionSuccessStatus: 200}));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


// your first API endpoint... 
app.get("/api/hello", function (req, res) {
  res.json({greeting: 'hello API'});
});



// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});


app.get("/api/timestamp", function (req, res) {
  res.send('hello from timestamp');
});

app.get('/api/timestamp/:date_string', (req, res) => {  
  console.log(req.params.date_string);
  const dateVar = !isNaN(req.params.date_string) ? parseInt(req.params.date_string) : req.params.date_string;
  const date = req.params.date_string !== 'undefined' ? new Date(dateVar) : new Date();
  
  res.json(date.toString() !== 'Invalid Date' ? {'unix': date.getTime(), 'utc': date.toUTCString()} : {"unix": null, "utc" : "Invalid Date" });
});