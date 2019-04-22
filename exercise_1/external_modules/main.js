const request = require("request");
const fs = require('fs');
const process = require('process');



request("https://icanhazdadjoke.com/api", function(error, response, body) {
  var theResponse = response;
if (!error && response.statusCode == 200) {
    console.log(JSON.parse(body)); // Show the JSON for the Star Wars Character
  }
  
});

fs.appendFile('jokes.txt', theResponse, function (err) {
  if (err) throw err;
  console.log('Saved!');
});