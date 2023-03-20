const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');

// Serve static files from the public folder
app.use(express.static(path.join(__dirname, 'public')));

// Define a route for handling the root request
app.get('/', function(req, res) {
  fs.readFile(path.join(__dirname, 'public', 'data.json'), function(err, data) {
    if (err) {
      console.error(err);
      res.status(500).send('Internal Server Error');
    } else {
      console.log("Data from file", data);
      var jsonData = JSON.parse(data);
      console.log("Parsed data", jsonData);
      res.send(jsonData);
    }
  });
});

// Start the server on port 3000
app.listen(8080, ()=>{
  console.log('Server started on port 8080');
});